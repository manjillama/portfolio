import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
};

const Seo = ({ title, description, pathname, children }: Props) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();

  const data = {
    title: title ? `${title} | Manjil Tamang` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername
  };

  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="image" content={data.image} />
      <meta property="og:image" content={data.image} />
      <meta name="twitter:card" content={data.image} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:url" content={data.url} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
      <meta name="twitter:creator" content={data.twitterUsername} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;600;700&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
        crossOrigin="anonymous"
      />
      {/* <script defer src="/mailerlite.js"></script>
      <script
        defer
        src="https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c"
        type="text/javascript"
      ></script> */}
      {children}
    </>
  );
};

export default Seo;
