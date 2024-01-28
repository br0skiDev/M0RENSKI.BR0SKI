import Head from "next/head";

import "./globals.css";
import "./style.css";

import { Inter } from "next/font/google";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>M0RENSKI React Library</title>
        <meta name="description" content="M0RENSKI React Library by BR0SKI." />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <body className="bg-universe">
        {children}
      </body>
    </html>
  );
}
