import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Commentsy from '../commentsy';
import Centsibly from '../centsibly';

export default function Featured() {
    return (
        <div className="homepage-featured overflow-hidden">
            <section id="commentsy" className="container px-[15px] mx-auto mb-8">

                <ScrollAnimation animateOnce animateIn="fadeInUp">
                    <div className="homepage-section-title"><div><span className="section-kicker">01 / FEATURED</span><h2>A closer look<span>.</span></h2></div><p>Two projects, from idea to interface.</p></div>
                    <div className="flex flex-col gap-12 lg:gap-0">
                        <Commentsy />
                        <Centsibly />
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    );
}
