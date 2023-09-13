import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';

export default function IPhone() {
  return (
    <div className="text-center mt-14 h-[370px] overflow-hidden">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <div style={{ display: 'table', margin: '0 auto', position: 'relative' }}>
          <img src="/images/phone.jpg" alt="phone frame" style={{ height: '100%' }} />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 12,
                top: 47,
                right: 12,
                bottom: 76,
                height: 'auto',
                overflowY: 'hidden'
              }}
            >
              <Parallax
                strength={200}
                renderLayer={(percentage: number) => (
                  <img
                    src="/images/me-1.jpg"
                    alt="Me"
                    style={{
                      marginTop: -100,
                      width: '100%',
                      transition: 'transform 1s ease 0s',
                      transform: `translateY(${percentage * 14}%)`
                    }}
                  />
                )}
              ></Parallax>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
