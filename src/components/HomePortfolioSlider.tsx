"use client";

import { useEffect } from "react";

export default function HomePortfolioSlider() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let cleanupFn: (() => void) | undefined;
    
    const init = () => {
      const gsap = (window as any).gsap;
      if (!gsap) {
        timer = setTimeout(init, 100);
        return;
      }

      const items = gsap.utils.toArray(".home-portfolio-slide");
      if (items.length === 0) return;

      // Initial state
      gsap.set(items, { xPercent: 100, autoAlpha: 0, scale: 0.95 });
      gsap.set(items[0], { xPercent: 0, autoAlpha: 1, scale: 1 });

      let currentIndex = 0;
      const total = items.length;

      const slideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % total;
        
        gsap.to(items[currentIndex], { 
          xPercent: -100, 
          autoAlpha: 0, 
          scale: 0.95,
          duration: 1.2, 
          ease: "power3.inOut" 
        });
        
        gsap.set(items[nextIndex], { xPercent: 100, autoAlpha: 1, scale: 0.95 });
        gsap.to(items[nextIndex], { 
          xPercent: 0, 
          scale: 1,
          duration: 1.2, 
          ease: "power3.inOut" 
        });
        
        currentIndex = nextIndex;
      }, 3000);

      cleanupFn = () => {
        clearInterval(slideInterval);
        gsap.killTweensOf(items);
      };
    };

    init();

    return () => {
      clearTimeout(timer);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <section className="custom-portfolio__area pb-60 position-relative" suppressHydrationWarning>
      <style dangerouslySetInnerHTML={{ __html: `
        .home-portfolio-slider-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          max-height: 70vh;
          overflow: hidden;
          border-radius: 20px;
          margin-top: 40px;
        }
        .home-portfolio-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
        }
        .home-portfolio-slide a {
          display: block;
          width: 100%;
          height: 100%;
        }
        .home-portfolio-slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .custom-portfolio__text-bg {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          opacity: 0.15;
          color: #e74c0a;
          font-size: 20vw;
          text-transform: uppercase;
          pointer-events: none;
          font-weight: 900;
          white-space: nowrap;
        }
        .portfolio__btn-center {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
      `}} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }} suppressHydrationWarning>
        <h2 className="custom-portfolio__text-bg">WORK</h2>
        <div className="row top_row position-relative">
          
          <div className="col-12">
            <div className="home-portfolio-slider-wrap">
              <div className="home-portfolio-slide">
                <a href="/our-portfolio"><img src="assets/imgs/portfolio/6/7.webp" alt="Portfolio" /></a>
              </div>
              <div className="home-portfolio-slide">
                <a href="/our-portfolio"><img src="assets/imgs/portfolio/6/6.webp" alt="Portfolio" /></a>
              </div>
              <div className="home-portfolio-slide">
                <a href="/our-portfolio"><img src="assets/imgs/portfolio/6/1.webp" alt="Portfolio" /></a>
              </div>
              <div className="home-portfolio-slide">
                <a href="/our-portfolio"><img src="assets/imgs/portfolio/1/03.webp" alt="Portfolio" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row row_bottom">
          <div className="col-xxl-12">
            <div className="portfolio__btn-center btn_wrapper">
              <a className="wc-btn-secondary btn-hover btn-item" href="/our-portfolio">
                <span></span>View <br />all projects <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
