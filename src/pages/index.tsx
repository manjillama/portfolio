import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import Wrapper from '../components/wrapper';
import Spotify from '../components/spotify';
import IPhone from '../components/iphone';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Spotify />
        <IPhone />
        {/* <Quote />
        <HomeBlog />
        <Projects />
        <Footer /> */}
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
