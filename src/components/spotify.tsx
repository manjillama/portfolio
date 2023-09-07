import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Spotify() {
  return (
    <section className="text-center mt-20">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <h5 className="uppercase font-bold mb-4">Now playing on spotify 👾</h5>
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
