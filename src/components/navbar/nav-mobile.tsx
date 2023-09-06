import React, { MouseEventHandler, useRef } from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import { useEffect } from "react";
import { CustomLink } from "../ui";

type Props = {
  isNavMobileOpened: boolean;
  handleIsNavMobileOpened: (isOpened: boolean) => void;
};

export default function NavMobile({
  isNavMobileOpened,
  handleIsNavMobileOpened,
}: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const bodyNode = document.querySelector("body");
    if (!bodyNode) return;

    isNavMobileOpened
      ? (bodyNode.style.overflow = "hidden")
      : (bodyNode.style.overflow = "auto");

    return () => {
      bodyNode.style.overflow = "auto";
    };
  }, [isNavMobileOpened]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current && (e.target as HTMLElement).contains(ref.current))
      handleIsNavMobileOpened(false);
  };

  return (
    <div
      ref={ref}
      className={`fixed inset-0 z-50 bg-black/50 ease-in-out duration-150 backdrop-blur-sm ${
        isNavMobileOpened ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
      onClick={handleBackdropClick}
    >
      <nav
        className={`${
          isNavMobileOpened ? "translate-x-0" : "translate-x-[250px]"
        } bg-white w-[250px] h-full absolute right-0 top-0 ease-in-out duration-150 flex flex-col items-end`}
      >
        <button
          onClick={() => handleIsNavMobileOpened(false)}
          className="cursor-pointer w-[24px] h-[24px] m-4"
        >
          <div>
            <div className="bg-black origin-[45%] rotate-45 w-[24px] border border-black" />
            <div className="bg-black origin-[45%]	-rotate-45 w-[24px] border border-black" />
          </div>
        </button>
        <ul className="w-full h-full text-center flex flex-col justify-center">
          <li className="mx-2 my-4">
            <Link
              to="/"
              className="inline-block uppercase font-bold p-2 text-sm cursor-pointer w-full"
            >
              Home
              <span className="block capitalize font-medium">Welcome</span>
            </Link>
          </li>
          <li className="mx-2 my-4">
            <button
              className="inline-block uppercase font-bold p-2 text-sm cursor-pointer w-full"
              onClick={() => {
                navigate("/#experience");
                handleIsNavMobileOpened(false);
              }}
            >
              Experience
              <span className="block capitalize font-medium">Work</span>
            </button>
          </li>
          <li className="mx-2 my-4">
            <Link
              to="/blogs"
              className="inline-block uppercase font-bold p-2 text-sm cursor-pointer w-full"
            >
              Blog
              <span className="block capitalize font-medium">Tech</span>
            </Link>
          </li>
          <li className="mx-2 my-6">
            <CustomLink
              text="Resume"
              href="/assets/manjiltamang-resume.pdf"
              target="_blank"
              variant="primary"
              showBoxShadowOnHover
            >
              Resume
            </CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
