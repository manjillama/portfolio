import Icon from '../ui/icon';
import React from 'react';
import { CustomLink } from '../ui';
import { siteConfig } from '../../constants';

const HeaderHero = () => (
  <div className="homepage-hero">
    <div className="hero-layout container mx-auto">
      <div className="hero-copy">
        <p className="hero-greeting"><span aria-hidden="true"><Icon name="asterisk" /></span> Hi, I am</p>
        <h1>{siteConfig.name}<span className="hero-period">.</span></h1>
        <p className="hero-role">{siteConfig.position}<span className="hero-cursor" aria-hidden="true">_</span></p>
        <p className="hero-intro">{siteConfig.intro}</p>
        <div className="homepage-hero-actions">
          <CustomLink text="Say hello 👋" href="#contact" variant="secondary" showBoxShadowOnHover isInternalLink={false} />
          <a className="homepage-work-link" href="#projects">Explore my projects <span aria-hidden="true">↓</span></a>
        </div>
      </div>

    </div>
  </div>
);
export default HeaderHero;
