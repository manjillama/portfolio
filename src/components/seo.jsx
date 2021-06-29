import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title="Get to know me better - Manjil Tamang | Full Stack Software Engineer"
      meta={[
        {
          name: `description`,
          content:
            "Hi this is Manjil Tamang. I'm Full stack software engineer with experience in designing and developing enterprise applications. Say hello!"
        },
        {
          name: 'keywords',
          content:
            'Manjil Tamang, Coders in Nepal, Developers in Nepal, Kathmandu, Nepal, JavaScript, Java, React, Express, Spring Framework, Front-end developer, backend developer'
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
          content: 'Get to know me better! - Manjil Tamang | Full Stack Software Engineer'
        },
        {
          property: 'og:description',
          content:
            "Hi this is Manjil Tamang. I'm Full stack software engineer with experience in designing and developing enterprise applications. Say hello!"
        },
        {
          property: 'og:url',
          content: 'https://manjiltamang.com'
        },
        {
          property: 'og:image',
          content: 'https://www.manjiltamang.com/images/header.jpg'
        },
        {
          property: 'og:site_name',
          content: 'Get to know me better! - Manjil Tamang |  Full Stack Software Engineer'
        }
      ]}
    />
  );
}
