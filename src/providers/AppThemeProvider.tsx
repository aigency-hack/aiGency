import { useCallback, useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { getDarkTheme } from "src/theme/darkTheme";
import { getLightTheme } from "src/theme/lightTheme";
import { useNextTheme } from "src/hooks/themes";
import { useMounted } from "src/hooks/useMounted";

import type { FC, PropsWithChildren } from "react";
import type { PaletteMode } from "@mui/material";
import type { ResponsiveFontSizesOptions } from "@mui/material/styles/responsiveFontSizes";

type Props = {
  [key: string]: unknown;
};

export const AppThemeProvider: FC<PropsWithChildren<Props>> = observer(({ children }) => {
  const mounted = useMounted();
  const { forcedTheme, resolvedTheme, systemTheme, setTheme } = useNextTheme();

  const setPaletteMode = useCallback(
    (mode: PaletteMode | "system") => {
      setTheme(mode);
    },
    [setTheme],
  );

  const togglePaletteMode = useCallback(() => {
    const newMode = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newMode);
  }, [resolvedTheme, setTheme]);

  const materialTheme = useMemo(() => {
    const responsiveFontSizesOptions: ResponsiveFontSizesOptions = {
      factor: 2, // * higher = smaller in small screens, @default: 2, @minimum: 1
    };
    const darkTheme = responsiveFontSizes(createTheme(getDarkTheme()), responsiveFontSizesOptions);
    const lightTheme = createTheme(getLightTheme(), responsiveFontSizesOptions);

    switch (forcedTheme ?? resolvedTheme ?? systemTheme) {
      case "dark":
        return darkTheme;
      case "light":
        return lightTheme;
      default:
        return systemTheme === "light" ? lightTheme : darkTheme;
    }
  }, [forcedTheme, resolvedTheme, systemTheme]);

  const emotionTheme = useMemo(() => {
    return { ...materialTheme };
  }, [materialTheme]);

  const extendedMaterialTheme = useMemo(
    () => ({
      ...materialTheme,
      setPaletteMode,
      togglePaletteMode,
    }),
    [materialTheme, setPaletteMode, togglePaletteMode],
  );

  return (
    <MaterialThemeProvider theme={extendedMaterialTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <CssBaseline />
        {mounted && children}
      </EmotionThemeProvider>
    </MaterialThemeProvider>
  );
});
