import React from 'react';
import { socials } from '../../constants';

const HeaderSocials = () => (
  <div className="hidden md:block w-[40px] absolute bottom-0 right-[60px] left-auto z-10 text-slate-400">
    <ul className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-60 after:mx-auto after:bg-slate-400">
      {socials.map((social, index) => (
        <li key={index}>
          <a
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
  </div>
);

export default HeaderSocials;
