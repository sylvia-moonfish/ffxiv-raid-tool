import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

import createEmotionCache from "src/createEmotionCache";
import theme from "src/theme";

const clientSideEmotionCache = createEmotionCache();

interface RaidToolAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function RaidToolApp(props: RaidToolAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default RaidToolApp;
