import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useRef } from 'react';
import { SearchFormContext } from '@/context/searchInputContext';
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
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <SearchFormContext.Provider value={{ searchInputRef }}>
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
      </SearchFormContext.Provider>
    </>
  );
};

MyApp.displayName = 'MyApp';
export default MyApp;
