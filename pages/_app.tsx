import { CacheProvider } from "@emotion/react";
import { StylesProvider } from "@mui/styles";
import { AppThemeProvider } from "src/providers";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { Layout } from "src/views/common/Layout";
import { GlobalStyles } from "src/styles/GlobalStyles";
import createEmotionCache from "src/utils/emotion/createEmotionCache";

import "src/utils/overrides";

// * Type imports
import type { FC } from "react";
import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/react";
import { CommonHTMLHeaders } from "src/views/common/headers/CommonHtmlHeaders";

// if (typeof window !== 'undefined') {
//   ReactGA.initialize(process.env.NEXT_PUBLIC_GA)
//   ReactGA.pageview(window.location.pathname + window.location.search)
//   hotjar.initialize(parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID), 6)
// }

type CustomAppProps = AppProps & {
  emotionCache?: EmotionCache;
  fallback: { [key: string]: any };
};

const clientSideEmotionCache = createEmotionCache();

const CustomApp: FC<CustomAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <CommonHTMLHeaders />
      <GlobalStyles />
      <StylesProvider injectFirst>
        <NextThemeProvider
          defaultTheme="system"
          themes={["light", "dark"]}
          enableSystem={true}
          enableColorScheme={false}
          attribute="class"
        >
          <AppThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppThemeProvider>
        </NextThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default CustomApp;
