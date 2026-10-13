import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Commentsy from '../commentsy';
import Centsibly from '../centsibly';

export default function Featured() {
    return (
        <div className="overflow-hidden">
            <section id="commentsy" className="container px-[15px] mx-auto mb-8">
                <div className="h-24" />
                <ScrollAnimation animateOnce animateIn="fadeInUp">
                    <h5 className="text-center font-bold mb-6 text-2xl">Featured project ✨</h5>
                    <div className="flex flex-col gap-12 lg:gap-0">
                        <Commentsy />
                        <Centsibly />
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    );
}
