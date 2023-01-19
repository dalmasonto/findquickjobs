import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, MantineProvider } from '@mantine/core';
import { ReactElement, ReactNode } from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { getCookie } from 'cookies-next';
import { MantineWrapper } from '../layouts/MantineWrapper';
import { APP_NAME_WITH_SEP, THEME_COOKIE_NAME } from '../configs/appConfigs';

import "../styles/globals.css"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>
  }
}

export default function App(props : ComponentWithPageLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{`${APP_NAME_WITH_SEP} Welcome`}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineWrapper colorScheme={props.colorScheme}>
        {
          Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          )
            :
            <Component {...pageProps} />
        }

      </MantineWrapper>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(THEME_COOKIE_NAME, ctx) || 'light',
});