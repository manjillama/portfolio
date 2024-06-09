import React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import { CustomLink } from '../ui';
import { siteConfig } from '../../constants';

const HeaderHero = () => {
  return (
    <div className="bg-[#0a192f]">
      <Parallax
        className="container mx-auto h-screen	relative px-[15px]"
        renderLayer={(percentage: number) => (
          <div
            className="absolute text-white translate-y-[-50%] transition"
            style={{
              top: `calc(35% * ${percentage})`
            }}
          >
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <p className="text-md text-secondary-regular sm:mb-6 mb-4">Hi, I am</p>
              <h1 className="font-bold sm:text-6xl text-4xl sm:mb-6 mb-4 text-[#ccd6f6]">{siteConfig.name}.</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animateOnce animateIn="fadeInUp">
              <p className="font-bold sm:text-6xl text-3xl sm:mb-6 mb-4 text-[#8892b0]">{siteConfig.position}.</p>
            </ScrollAnimation>
            <ScrollAnimation delay={400} animateOnce animateIn="fadeInUp">
              <p className="max-w-2xl text-[#8892b0] mb-10">{siteConfig.intro}</p>
              <CustomLink
                text="Say hello 👋"
                href={'#contact'}
                variant="secondary"
                showBoxShadowOnHover
                isInternalLink={false}
              />
            </ScrollAnimation>
          </div>
        )}
      />
    </div>
  );
};

export default HeaderHero;
