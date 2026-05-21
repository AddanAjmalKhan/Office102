"use client";

import { useEffect } from "react";

export default function ourportfolio() {
  useEffect(() => {
    // Add dark class to body
    document.body.classList.add("dark");

    let timer: NodeJS.Timeout;
    let cleanupFn: (() => void) | undefined;

    const init = () => {
      const gsap = (window as any).gsap;
      const $ = (window as any).$;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !$) {
        timer = setTimeout(init, 100);
        return;
      }

      // Kill any conflicting ScrollTriggers created by main.js
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((st: any) => {
          if (st.trigger && (
            st.trigger.classList?.contains('portfolio__wrapper-6') ||
            st.trigger.classList?.contains('portfolio__area-6') ||
            st.trigger.classList?.contains('portfolio__item-6')
          )) {
            st.kill();
          }
        });
      }

      const items = gsap.utils.toArray(".portfolio__item-6");
      if (items.length === 0) return;

      const total_portfolio_item = items.length;
      if (total_portfolio_item) {
        $('.portfolio__total').html(total_portfolio_item < 10 ? '0' + total_portfolio_item : total_portfolio_item.toString());
      }

      // Initial state for slider
      gsap.set(items, { xPercent: 100, autoAlpha: 0, scale: 0.95 });
      gsap.set(items[0], { xPercent: 0, autoAlpha: 1, scale: 1 });

      let currentIndex = 0;

      function updateCounter(index: number) {
        const activeNum = index + 1;
        $('.portfolio__current').html(activeNum < 10 ? '0' + activeNum : activeNum.toString());
      }

      updateCounter(0);

      const slideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % total_portfolio_item;

        // Slide current out to the left
        gsap.to(items[currentIndex], {
          xPercent: -100,
          autoAlpha: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.inOut"
        });

        // Prepare next off-screen to the right, then slide in
        gsap.set(items[nextIndex], { xPercent: 100, autoAlpha: 1, scale: 0.95 });
        gsap.to(items[nextIndex], {
          xPercent: 0,
          scale: 1,
          duration: 1,
          ease: "power3.inOut"
        });

        currentIndex = nextIndex;
        updateCounter(currentIndex);

      }, 3000); // 2 seconds visible + 1 sec transition

      cleanupFn = () => {
        clearInterval(slideInterval);
        gsap.killTweensOf(items);
      };
    };

    init();

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("dark");
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (<>
    <style>{`
  .portfolio__area-6 {
    position: relative;
    overflow: hidden;
  }
  .portfolio__grid-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    animation: gridPulse 6s ease-in-out infinite;
  }
  @keyframes gridPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .portfolio__wrapper-6 {
    position: relative;
    width: 104%;
    left: -2%;
    overflow: hidden;
    border-radius: 20px;
    aspect-ratio: 16/10;
    max-height: 75vh;
    transition: all 0.4s ease;
  }
  .portfolio__wrapper-6:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
  .portfolio__list-6 {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .portfolio__item-6 {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    visibility: hidden; /* hidden by default, GSAP controls visibility */
  }
  .portfolio__item-6 a {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }
  .portfolio__item-6 img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    border-radius: 20px !important;
    box-shadow: 0 20px 50px rgba(0,0,0,0.4) !important;
    transition: transform 0.5s ease !important;
  }
  @media (max-width: 991px) {
    .portfolio__wrapper-6 {
      height: 300px;
    }
  }

  /* Custom CTA Button Styles */
  .custom-cta-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    position: relative;
    z-index: 10;
  }
  .custom-cta-btn {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    position: relative;
    transition: all 0.3s ease;
  }
  .custom-cta-btn:hover {
    background: rgba(255,255,255,0.05);
    color: #fff;
  }
  .custom-cta-btn i {
    margin-left: 8px;
    transform: rotate(-45deg);
  }
  .cta__sub-title-pill {
    display: inline-block;
    padding: 8px 24px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: #fff;
  }
  .cta__content {
    text-align: center;
    position: relative;
    z-index: 5;
  }
`}</style>

    {/* Portfolio area start */}
    <section className="portfolio__area-6">
      {/* Grid background overlay */}
      <div className="portfolio__grid-bg"></div>
      <div className="container line pt-100 pb-60">
        <span className="line-3"></span>
        <div className="zi-9">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
              <div className="sec-title-wrapper portfolio__title-wrap-6">
                <div className="">
                  <h2 className="sec-sub-title animation__char_come">Featured</h2>
                  <h3 className="sec-title animation__char_come_long">Work</h3>
                  <p>View the full case study of our recent featured and awesome works that we created for our
                    clients.
                  </p>
                </div>
                <div className="portfolio__pagination-6" style={{ marginTop: "-30px" }}>
                  <span className="portfolio__current">01</span> / <span className="portfolio__total"></span>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
              <div className="portfolio__wrapper-6">
                <div className="portfolio__list-6">
                  <div className="portfolio__item-6" data-portfitem="1">
                    <a href="#">
                      <img src="assets/imgs/portfolio/6/1.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="2">
                    <a href="assets/imgs/portfolio/6/2.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/2.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="3">
                    <a href="assets/imgs/portfolio/6/3.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/3.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="4">
                    <a href="assets/imgs/portfolio/6/4.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/4.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="5">
                    <a href="assets/imgs/portfolio/6/5.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/5.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="6">
                    <a href="assets/imgs/portfolio/6/6.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/6.webp" alt="Portfolio Image" />
                    </a>
                  </div>

                  <div className="portfolio__item-6" data-portfitem="7">
                    <a href="assets/imgs/portfolio/6/7.webp" data-fancybox="portfolio">
                      <img src="assets/imgs/portfolio/6/7.webp" alt="Portfolio Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Portfolio area end */}

    {/* CTA area start */}
    <section className="cta__area">
      <div className="container line pb-110 dark-p">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="cta__content">
              <p className="cta__sub-title-pill">WORK WITH US</p>
              <h2 className="cta__title title-anim" style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "600", marginTop: "10px", lineHeight: "1.2", maxWidth: "800px", margin: "10px auto 0" }}>
                We would love to hear <br/>more about your project
              </h2>
              <div className="custom-cta-wrapper">
                <a href="/contact-us" className="custom-cta-btn">
                  Let's Talk Now <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA area end */}
  </>);
}