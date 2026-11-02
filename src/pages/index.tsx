import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import Wrapper from '../components/wrapper';
import Spotify from '../components/spotify';
import IPhone from '../components/iphone';
import HomeBlog from '../components/home-blog';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Featured from '../components/featured';
import '../styles/home.css';

const IndexPage = () => {
  return (
    <Layout>
      <div className="homepage">
        <a className="homepage-skip" href="#projects">Skip to projects</a>
        <Header />
        <Wrapper>
          <section id="personal" className="homepage-personal container mx-auto">
            <div className="personal-photo"><IPhone /></div>
            <div className="personal-listening"><span className="section-kicker">AWAY FROM THE EDITOR</span><h2>A different kind<br />of background track<span>.</span></h2><Spotify /></div>
          </section>
          <Featured />
          <Projects />
          <HomeBlog />
          <Contact />
          <Footer />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
