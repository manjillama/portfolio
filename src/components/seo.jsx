import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title = 'Get to know me better - Manjil Tamang | Full Stack Software Engineer',
  description = "Hi this is Manjil Tamang. I'm Full stack software engineer with experience in designing and developing enterprise applications. Say hello!",
  image = 'https://www.manjiltamang.com/images/header.jpg'
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          name: 'author',
          content: 'Manjil Tamang'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'charset',
          content: 'utf-8'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:site_name',
          content: title
        }
      ]}
    />
  );
}
