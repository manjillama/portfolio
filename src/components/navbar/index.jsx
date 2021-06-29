import React, { useState } from 'react';
import Nav from './nav';
import NavMobile from './nav-mobile';
import SearchOverlay from '../search-overlay';

export default function Navbar() {
  const [isNavMobileOpened, setIsNavMobileOpened] = useState(false);
  const [isSearchOverlayOpened, setIsSearchOverlayOpened] = useState(false);

  function handleIsNavMobileOpened(isOpened) {
    setIsNavMobileOpened(isOpened);
    preventBodyScroll(isOpened);
  }

  function handleIsSearchOverlayOpened(isOpened) {
    setIsSearchOverlayOpened(isOpened);
    preventBodyScroll(isOpened);
  }

  function preventBodyScroll(preventBodyScroll) {
    const bodyNode = document.querySelector('body');
    preventBodyScroll ? bodyNode.classList.add('no-scroll') : bodyNode.classList.remove('no-scroll');
  }

  return (
    <>
      <Nav
        handleIsNavMobileOpened={handleIsNavMobileOpened}
        handleIsSearchOverlayOpened={handleIsSearchOverlayOpened}
      />
      <NavMobile isNavMobileOpened={isNavMobileOpened} handleIsNavMobileOpened={handleIsNavMobileOpened} />
      {isSearchOverlayOpened && <SearchOverlay handleIsSearchOverlayOpened={handleIsSearchOverlayOpened} />}
    </>
  );
}
