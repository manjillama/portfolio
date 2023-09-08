import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { CustomLink } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="text-center my-32">
      <h5 className="font-bold mb-4 text-2xl">Get in touch 📬</h5>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <p className="text-gray-500">Whether you have a question or just want to say hi, my inbox is always open!</p>
        <div className="mt-12">
          <CustomLink
            isInternalLink={false}
            href="mailto:hello@manjiltamang.com"
            text="Say Hello"
            showBoxShadowOnHover
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
