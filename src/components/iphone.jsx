import * as React from 'react';
import { Parallax } from 'react-parallax';

export default function IPhone() {
  return (
    <div style={{ height: 350, overflow: 'hidden' }}>
      <div style={{ display: 'table', margin: '0 auto', position: 'relative' }}>
        <img src="/images/phone.jpg" style={{ height: '100%' }} />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
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
              overflowY: 'hidden',
            }}
          >
            <Parallax
              strength={200}
              renderLayer={(percentage) => (
                <img
                  src="/images/me.jpg"
                  style={{
                    marginTop: -20,
                    width: '100%',
                    transition: 'transform 1s ease 0s',
                    transform: `translateY(${percentage * 14}%)`,
                  }}
                />
              )}
            ></Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}
