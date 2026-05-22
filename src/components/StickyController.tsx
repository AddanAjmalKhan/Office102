"use client";
import { useEffect } from "react";
import styles from "../app/our-services/scroll.module.css";

export default function StickyController() {
  useEffect(() => {
    const area = document.querySelector('.service__area-6');
    if (!area) return;


    const contentWrapper = area.querySelector('.content-wrapper');
    const mid = area.querySelector('.mid-content');
    const right = area.querySelector('.right-content');
    const images = mid ? Array.from(mid.querySelectorAll('.service__image')) : [];
    const items = right ? Array.from(right.querySelectorAll('.service__item-6')) : [];

    // Apply layout classes to the content wrapper so left/mid/right align properly
    if (contentWrapper) contentWrapper.classList.add(styles.stickySection);
    if (mid) mid.classList.add(styles.stickyImage);
    if (right) right.classList.add(styles.scrollContent);

    // Initialize image visibility
    images.forEach((imgDiv, idx) => {
      const img = imgDiv.querySelector('img') as HTMLImageElement | null;
      if (!img) return;
      img.style.transition = 'opacity 0.6s ease-in-out';
      img.style.opacity = idx === 0 ? '1' : '0';
      if (idx === 0) img.classList.add('active');
    });

    // Observe which content block is active and swap images.
    // Use the right column as the scroll root so intersections are calculated within it.
    const observerRoot = right instanceof HTMLElement ? right : null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const idx = items.indexOf(target);
          if (idx < 0) return;

          images.forEach((imgDiv, i) => {
            const img = imgDiv.querySelector('img') as HTMLImageElement | null;
            if (!img) return;
            if (i === idx) {
              img.classList.add('active');
              img.style.opacity = '1';
            } else {
              img.classList.remove('active');
              img.style.opacity = '0';
            }
          });
        });
      },
      { root: observerRoot, rootMargin: '-20% 0px -60% 0px', threshold: 0.5 }
    );

    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, []);

  return null;
}
