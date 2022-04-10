import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { styles } from '@/styles/globals';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      <Head>
        <title>Headless CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={styles} />
      {getLayout(
        <Component {...pageProps} />,
        pageProps.categoryData,
        pageProps.tagData
      )}
    </>
  );
}

MyApp.displayName = 'MyApp';

export default MyApp;
