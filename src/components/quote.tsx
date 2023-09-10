import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Quote() {
  return (
    <section
      style={{
        backgroundPosition: '58% 66.0844%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/images/mount_phone.jpg)'
      }}
    >
      <div className="container mx-auto px-[15px] mb-8">
        <div className="flex flex-wrap" style={{ padding: '10rem 0' }}>
          <div className="md:basis-3/5 basis-1/5"></div>
          <ScrollAnimation animateOnce animateIn="fadeInUp" className="md:basis-2/5 basis-4/5 text-right">
            <div>
              <p className="text-lg mb-6">
                <i className="fas fa-quote-left"></i> You can never understand everything. But you should push yourself
                to understand the system. <i className="fas fa-quote-right"></i>
              </p>
              <h5 className="text-gray-500 text-md">
                - <span className="text-black font-bold">RYAN DAHL</span>,{' '}
                <span className="text-sm">creator of node.js</span>
              </h5>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
