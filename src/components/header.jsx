import * as React from 'react';
import { Parallax } from 'react-parallax';

export default function Header() {
  return (
    <header>
      <Parallax
        className="jumbotron"
        bgImage="/images/header.jpg"
        strength={100}
        renderLayer={(percentage) => (
          <div
            style={{
              position: 'absolute',
              color: '#fff',
              textAlign: 'center',
              width: '90%',
              left: '50%',
              top: `calc(40% * ${percentage})`,
              borderRadius: '50%',
              transform: `translate(-50%,-50%)`,
            }}
          >
            <h5 className="hint-text">FULL STACK SOFTWARE ENGINEER</h5>
            <h1>MANJIL TAMANG</h1>
          </div>
        )}
      ></Parallax>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 170,
          backgroundRepeat: 'repeat',
          backgroundSize: 'initial',
          marginBottom: 55,
          backgroundImage: 'url(/images/brush_stroke.png)',
        }}
      ></div>
    </header>
  );
}
