import React from "react";

const HeaderSocials = () => (
  <div className="hidden md:block w-[40px] absolute bottom-0 right-[60px] left-auto z-10 text-slate-400">
    <ul className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-60 after:mx-auto after:bg-slate-400">
      <li>
        <a
          className="p-3.5 block text-xl hover-effect hover:text-secondary"
          href="https://bit.ly/2EYmxJV"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a
          className="p-3.5 block text-xl hover-effect hover:text-secondary"
          href="https://bit.ly/2JN69OO"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a
          className="p-3.5 block text-xl hover-effect hover:text-secondary"
          href="https://twitter.com/lamamanjil"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          className="p-3.5 block text-xl hover-effect hover:text-secondary"
          href="mailto:hello@manjiltamang.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default HeaderSocials;
