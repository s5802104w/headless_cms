import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { styles } from '@/styles/globals';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  const props = {
    page: <Component {...pageProps} />,
    categoryData: pageProps.categoryData,
    tagData: pageProps.tagData,
  };
  return (
    <>
      <Head>
        <title>Headless CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={styles} />
      {getLayout({
        ...props,
        type: '',
        props: undefined,
        key: null,
      })}
    </>
  );
};

MyApp.displayName = 'MyApp';
export default MyApp;
