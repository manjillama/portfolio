import React from 'react';
import { Parallax } from 'react-parallax';
import { CustomLink } from '../ui';

const HeaderHero = () => {
  return (
    <div className="container mx-auto">
      <Parallax
        className="h-screen	relative px-[15px]"
        strength={100}
        renderLayer={(percentage: number) => (
          <div
            className="absolute text-white translate-y-[-50%]"
            style={{
              top: `calc(35% * ${percentage})`
            }}
          >
            <h5 className="text-md text-secondary mb-6">Hi, I am</h5>
            <h1 className="font-bold text-6xl mb-6 text-[#ccd6f6]">Manjil Tamang.</h1>
            <h5 className="font-bold text-6xl mb-6 text-[#8892b0]">Software Engineer.</h5>
            <p className="max-w-2xl text-[#8892b0] mb-10">
              I’m a software engineer who enjoys solving real-world problems using computer technologies. I specialize
              in building and executing web products.
            </p>
            <CustomLink
              text="Resume"
              href="/assets/manjiltamang-resume.pdf"
              target="_blank"
              variant="secondary"
              showBoxShadowOnHover
              isInternalLink={false}
            />
          </div>
        )}
      ></Parallax>
    </div>
  );
};

export default HeaderHero;
