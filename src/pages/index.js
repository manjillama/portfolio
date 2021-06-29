import * as React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Intro from '../components/intro';
import IPhone from '../components/iphone';
import Quote from '../components/quote';
import Wrapper from '../components/wrapper';
import Projects from '../components/projects';
import Spotify from '../components/spotify';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Get to know me better - Manjil Tamang | Full Stack Software Engineer
        </title>
      </Helmet>
      <Header />
      <Wrapper>
        <Intro />
        <Spotify />
        <IPhone />
        <Quote />
        <Projects />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
