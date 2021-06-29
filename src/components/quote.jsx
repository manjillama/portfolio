import * as React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Quote() {
  return (
    <section
      style={{
        backgroundPosition: 'center 66.0844%',
        backgroundImage: 'url(/images/mount_phone.jpg)',
      }}
    >
      <div className="container-md">
        <div className="quote-section" style={{ padding: '10rem 0' }}>
          <div></div>
          <ScrollAnimation animateIn="fadeInUp">
            <div>
              <p style={{ fontSize: '1.4rem' }}>
                <i className="fas fa-quote-left"></i> You can never understand
                everything. But you should push yourself to understand the
                system. <i className="fas fa-quote-right"></i>
              </p>
              <h5 className="hint-text">
                - RYAN DAHL, <small>CREATOR OF NODE.JS</small>
              </h5>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
