import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/ico/76.jpg" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/ico/120.jpg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/ico/152.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/atom-one-dark.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
      </Helmet>

      <div>{children}</div>
      <script src="/mailerlite.js"></script>
      <script
        src="https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c"
        type="text/javascript"
      ></script>
    </>
  );
}
