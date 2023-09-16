import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { socials } from '../../constants';

const HeaderSocials = () => (
  <div className="hidden md:block w-[40px] absolute bottom-0 right-[60px] left-auto z-10 text-slate-400">
    <ScrollAnimation delay={1000} animateOnce animateIn="fadeInUp">
      <ul className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-60 after:mx-auto after:bg-slate-400">
        {socials.map((social, index) => (
          <li key={index}>
            <a
              aria-label={social.name}
              className="p-3.5 block text-xl hover-effect hover:text-secondary-regular"
              href={social.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className={social.faIconClass}></i>
            </a>
          </li>
        ))}
      </ul>
    </ScrollAnimation>
  </div>
);

export default HeaderSocials;
