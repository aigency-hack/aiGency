import { Box } from "@mui/material";
import { useMuiTheme } from "src/hooks/themes";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

// * Type Imports
import type { FC, ReactNode } from "react";
import { useLayoutRenderConditions } from "src/hooks/useLayoutRenderConditions";
import { useResponsive } from "src/hooks/useResponsive";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const theme = useMuiTheme();
  const { isMobile } = useResponsive();

  const {
    isFooterHidden,
    isSidebarHidden,
    sidebarDesktopVariant,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useLayoutRenderConditions({
    sidebarDesktopVariant: "permanent",
  });

  return (
    <>
      <Box display="flex">
        <Navbar />
        <Sidebar
          variant={isMobile ? "temporary" : sidebarDesktopVariant}
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          hidden={isSidebarHidden}
        />
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1} // full-width
          sx={{
            height: "100%",
            minHeight: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
            ml: 30,
            mt: `${theme.mixins.toolbar.height}px`,
            [theme.breakpoints.down("sm")]: {
              ml: "unset",
            },
          }}
        >
          {/* Main can only appear once in html (see: https://www.w3schools.com/tags/tag_main.asp) */}
          <Box component="main" display="flex" flexDirection="column" flexGrow={1}>
            {children}
          </Box>
          <Footer hidden={isFooterHidden} />
        </Box>
      </Box>
    </>
  );
};
