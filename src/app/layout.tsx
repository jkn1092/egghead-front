import "@rainbow-me/rainbowkit/styles.css";

import { Inter } from "next/font/google";
import Providers from "./providers";
import Main from '@/layouts/Main';

import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';

import 'aos/dist/aos.css';


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <React.Fragment>
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>egg_head | Portfolio of Jeremy N.</title>
        </Head>
        <body>
          <Page>
            <Providers>
              <Main>
                {children}
              </Main>
            </Providers>
          </Page>
        </body>
      </html>
    </React.Fragment>
  );
}
