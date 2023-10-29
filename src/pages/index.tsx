import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import Wrapper from '../components/wrapper';
import Spotify from '../components/spotify';
import IPhone from '../components/iphone';
import Quote from '../components/quote';
import HomeBlog from '../components/home-blog';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Commentsy from '../components/Commentsy';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Spotify />
        <IPhone />
        <Quote />
        <Experience />
        <Commentsy />
        <Projects />
        <HomeBlog />
        <Contact />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
