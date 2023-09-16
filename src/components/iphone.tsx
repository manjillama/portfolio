import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';

export default function IPhone() {
  return (
    <div className="text-center mt-14 h-[350px] overflow-hidden">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <div style={{ display: 'table', margin: '0 auto', position: 'relative' }}>
          <div
            className="absolute right-[20px] top-[54px] z-10
    text-[8px] text-white bg-black opacity-60
    px-[8px] py-[4px] rounded-full"
          >
            Mount Batur, Bali - 2022
          </div>
          <img src="/images/phone.jpg" alt="phone frame" className="w-[334px] h-[683px]" />
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
                    className="w-[310px] h-[414px]"
                    style={{
                      marginTop: -100,
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
