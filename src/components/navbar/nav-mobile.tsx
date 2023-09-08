import React, { MouseEventHandler, useRef } from 'react';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import { useEffect } from 'react';
import { CustomLink } from '../ui';
import { navLinks } from '../../constants';

type Props = {
  isNavMobileOpened: boolean;
  handleIsNavMobileOpened: (isOpened: boolean) => void;
};

export default function NavMobile({ isNavMobileOpened, handleIsNavMobileOpened }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const bodyNode = document.querySelector('body');
    if (!bodyNode) return;

    isNavMobileOpened ? (bodyNode.style.overflow = 'hidden') : (bodyNode.style.overflow = '');

    return () => {
      bodyNode.style.overflow = '';
    };
  }, [isNavMobileOpened]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current && (e.target as HTMLElement).contains(ref.current)) handleIsNavMobileOpened(false);
  };

  const handleNavigate = (url: string) => {
    navigate(url);
    handleIsNavMobileOpened(false);
  };

  return (
    <div
      ref={ref}
      className={`fixed inset-0 z-50 bg-black/50 ease-in-out duration-150 backdrop-blur-sm ${
        isNavMobileOpened ? 'opacity-1 visible' : 'opacity-0 invisible'
      }`}
      onClick={handleBackdropClick}
    >
      <nav
        className={`${
          isNavMobileOpened ? 'translate-x-0' : 'translate-x-[250px]'
        } bg-[#112240] w-[250px] h-full absolute right-0 top-0 ease-in-out duration-150 flex flex-col items-end`}
      >
        <button onClick={() => handleIsNavMobileOpened(false)} className="cursor-pointer w-[24px] h-[24px] m-4">
          <div>
            <div className="origin-[45%] rotate-45 w-[24px] border border-white" />
            <div className="origin-[45%]	-rotate-45 w-[24px] border border-white" />
          </div>
        </button>
        <ul className="w-full h-full text-center flex flex-col justify-center">
          {navLinks.map((link) => (
            <li className="mx-2 my-6" key={link.title}>
              <button
                className="inline-block text-white uppercase font-bold p-2 text-sm cursor-pointer w-full hover:text-secondary-regular"
                onClick={() => handleNavigate(link.url)}
              >
                {link.title}
                <span className="block capitalize font-medium text-gray-400">{link.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
