import * as React from 'react';
import HeaderSocials from './header-socials';
import ParticlesBackground from './particles';
import BrushStroke from './brush-stroke';
import HeaderHero from './header-hero';

export default function Header() {
  return (
    <header className="relative">
      <ParticlesBackground />
      <HeaderHero />
      <HeaderSocials />
      <BrushStroke />
    </header>
  );
}
