import Icon from './ui/icon';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { CustomLink } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-[15px] text-center my-32">
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <span className="section-kicker">04 / SAY HELLO</span>
        <h2 className="contact-title">Get in touch<span className="contact-wave" aria-hidden="true">👋</span></h2>
        <p className="text-gray-500">Whether you have a question or just want to say hi, my inbox is always open!</p>
        <div className="mt-12">
          <CustomLink
            isInternalLink={false}
            href="mailto:hello@manjiltamang.com"
            text={<>hello@manjiltamang.com <Icon /></>}
            showBoxShadowOnHover
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
