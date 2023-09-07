import React from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const options = {
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  preset: 'stars',
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  background: {
    color: '#0a192f'
  }
};

const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadStarsPreset(main);
  };

  return (
    <Particles
      className="h-screen absolute inset-0"
      options={options}
      init={particlesInit}
      style={{ position: 'absolute' }}
    />
  );
};

export default ParticlesBackground;
