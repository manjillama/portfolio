import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../../constants';

type Props = {
  handleIsNavMobileOpened: (isOpened: boolean) => void;
  handleIsSearchOverlayOpened: (isOpened: boolean) => void;
};

export default function Nav({ handleIsNavMobileOpened, handleIsSearchOverlayOpened }: Props) {
  return (
    <div className="navbar h-[70px] sticky top-0 bg-white	z-10 border-b	border-[#f0f0f0]">
      <nav className="nav flex items-center justify-between p-[15px] container mx-auto h-full">
        <div>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="h-[20px]" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <li className="mx-2" key={link.title}>
              <Link
                to={link.url}
                className="text-primary inline-block uppercase font-bold text-sm cursor-pointer px-4 hover:text-primary-regular"
              >
                {link.title}
                <span className="block capitalize font-medium text-gray-500 text-[0.8rem] text-[0.8rem]">
                  {link.caption}
                </span>
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <button
              className="text-primary uppercase font-bold text-lg cursor-pointer px-4 hover:text-primary-regular"
              onClick={() => handleIsSearchOverlayOpened(true)}
            >
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>

        <ul className="md:hidden flex">
          <li className="mx-2">
            <button onClick={() => handleIsSearchOverlayOpened(true)}>
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li className="ml-2">
            <button onClick={() => handleIsNavMobileOpened(true)} className="h-[15px] w-[20px] cursor-pointer">
              <div className="bg-black h-[2px] mb-[3px]" />
              <div className="bg-black h-[2px] mb-[3px]" />
              <div className="bg-black h-[2px]" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
