import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Quote() {
  return (
    <section
      style={{
        backgroundPosition: 'center 66.0844%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/images/mount_phone.jpg)'
      }}
    >
      <div className="container px-[15px]">
        <div className="flex flex-wrap" style={{ padding: '10rem 0' }}>
          <div className="basis-3/5"></div>
          <ScrollAnimation animateOnce animateIn="fadeInUp" className="md:basis-2/5 basis-full text-right">
            <div>
              <p className="text-xl mb-6">
                <i className="fas fa-quote-left"></i> You can never understand everything. But you should push yourself
                to understand the system. <i className="fas fa-quote-right"></i>
              </p>
              <h5 className="text-gray-500 text-md">
                - <span className="text-primary font-bold">RYAN DAHL</span>, <small>creator of node.js</small>
              </h5>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
