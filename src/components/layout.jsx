import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/ico/76.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/ico/120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/ico/152.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
      </Helmet>

      <div>{children}</div>
    </>
  );
}
