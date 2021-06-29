import React, { useState } from 'react';
import Nav from './nav';
import NavMobile from './nav-mobile';

export default function Navbar() {
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);

  function handleIsNavMobileOpened(isOpened) {
    const bodyNode = document.querySelector('body');
    setIsNavMobileOpened(isOpened);
    isOpened
      ? bodyNode.classList.add('no-scroll')
      : bodyNode.classList.remove('no-scroll');
  }

  return (
    <>
      <Nav handleIsNavMobileOpened={handleIsNavMobileOpened} />
      <NavMobile
        isNavMobileOpened={isNavMobileOpened}
        handleIsNavMobileOpened={handleIsNavMobileOpened}
      />
    </>
  );
}
