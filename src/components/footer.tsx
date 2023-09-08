import React from 'react';
import { socials } from '../constants';
// import Newsletter from './newsletter';

export default function Footer() {
  return (
    <footer className="border-t	border-[#f0f0f0] py-10">
      <div className="container mx-auto px-[15px]">
        {/* <Newsletter /> */}
        <ul className="text-center mb-3">
          {socials.map((social) => (
            <li key={social.url} className="inline-block mx-[7.5px] text-xl text-gray-500 hover:text-primary-regular">
              <a href={social.url} rel="noopener noreferrer" target="_blank">
                <i className={social.faIconClass}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-500 text-sm">
          Coded in{' '}
          <a
            href="https://code.visualstudio.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-primary-regular hover:underline"
          >
            Visual Studio Code
          </a>{' '}
          by Manjil Tamang. Built with{' '}
          <a
            href="https://www.gatsbyjs.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-primary-regular hover:underline"
          >
            Gatsby
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-primary-regular hover:underline"
          >
            Tailwind CSS
          </a>
          , deployed on a{' '}
          <a
            href="https://www.digitalocean.com/products/droplets"
            rel="noopener noreferrer"
            target="_blank"
            className="text-primary-regular hover:underline"
          >
            DigitalOcean Droplet
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
