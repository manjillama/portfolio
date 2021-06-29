import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Intro() {
  return (
    <section>
      <div className="container-md">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="text-center">
            <h5 className="hint-text">HI THERE 👋🏽</h5>
            <h1 style={{ fontWeight: 300, fontSize: '3rem' }}>
              This is where you'll get to know me better.
            </h1>
            <p className="text-hint">
              Full stack software engineer with experience in designing and
              developing enterprise applications. Also, for interesting stuffs
              be sure to checkout my github profile (link at the bottom).
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
