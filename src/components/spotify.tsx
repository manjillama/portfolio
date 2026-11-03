import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { CustomLink } from './ui';

export default function Spotify() {
  return (
    <section className="container mx-auto px-[15px] text-center mt-16">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <h5 className="font-bold mb-4 text-2xl">Now playing on spotify 👾</h5>
        <div className="flex justify-center">
          <a target="_blank" href="https://spotify-tiles.vercel.app/">
            <img
              className="mx-auto"
              src="https://spotify-tiles.vercel.app/api/widgets/now-playing?theme=dark"
              alt="Now Playing"
            ></img>
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
}
