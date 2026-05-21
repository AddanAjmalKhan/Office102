"use client";
import { useEffect } from "react";

export function useScrollReveal(selector = ".sec-title-wrapper, .about__content, .service__item, .counter__item, .workflow__slide, .brand__item, .testimonial__item, .hero__text-2, .hero__inner-2, .cta__content, .pricing__card, .faq__item, .contact__info, .contact__form, .footer__widget, .footer__bottom, .contact__text, .contact__item, .accordion-item, .portfolio__item") {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    const animateElements = document.querySelectorAll(selector);
    
    animateElements.forEach((el) => {
      el.classList.add('global-anim-ready');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
}
