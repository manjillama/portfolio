import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Spotify() {
  return (
    <section className="container mx-auto px-[15px] text-center mt-16">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <h5 className="font-bold mb-4 text-2xl">Now playing on spotify 👾</h5>
        <img
          className="mx-auto"
          src="https://now-playing-profile.manjillama.vercel.app/now-playing"
          width="256"
          height="64"
          alt="Now Playing"
        ></img>
      </ScrollAnimation>
    </section>
  );
}
