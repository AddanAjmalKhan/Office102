"use client";

import { useEffect } from "react";

export default function HomeWorkSection() {
  useEffect(() => {
    // ── "WORK" title: scale small → big on scroll ──
    const workTitle = document.querySelector(".hp-work-title") as HTMLElement;
    const titleSection = document.querySelector(".hp-work-section") as HTMLElement;

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              workTitle?.setAttribute("data-visible", "true");
            }, 60);
            titleObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (titleSection) titleObserver.observe(titleSection);

    // ── Images: reveal one by one ──
    const items = document.querySelectorAll(".hp-reveal");
    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => {
              el.setAttribute("data-visible", "true");
            }, delay);
            imgObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => imgObserver.observe(item));

    return () => {
      titleObserver.disconnect();
      imgObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════
           HOME PAGE WORK SECTION
        ══════════════════════════════════════════ */
        .hp-work-section {
          position: relative;
          padding-bottom: 140px;
          overflow: hidden;
        }
        .hp-work-section .container {
          position: relative;
        }

        /* ── Giant "work" title that scales in ── */
        .hp-work-title-wrap {
          position: relative;
          text-align: center;
          padding: 80px 0 30px;
          overflow: visible;
        }

        .hp-work-title {
          display: block;
          font-size: clamp(80px, 20vw, 260px);
          font-weight: 900;
          line-height: 0.88;
          letter-spacing: -4px;
          text-transform: uppercase;
          margin: 0;
          transform-origin: center center;
          transform: scale(0.06) !important;
          opacity: 0 !important;
          transition:
            transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0s,
            opacity 0.55s ease 0s !important;
          /* Solid white text */
          color: #fff;
          pointer-events: none;
          user-select: none;
        }
        .hp-work-title[data-visible="true"] {
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        /* ── Images grid ── */
        .hp-work-grid {
          margin-top: -60px;
          position: relative;
          z-index: 2;
        }

        /* 2-column grid layout */
        .hp-work-grid-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* Stagger odd items down */
        .hp-work-grid-inner .hp-work-item:nth-child(even) {
          margin-top: 80px;
        }

        /* Individual image card */
        .hp-work-item {
          position: relative;
        }

        /* Reveal animation — data-attr based to bypass global .dark overrides */
        .hp-reveal {
          opacity: 0 !important;
          will-change: opacity, transform;
          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .hp-reveal[data-dir="up"]    { transform: translateY(60px) scale(0.95) !important; }
        .hp-reveal[data-dir="left"]  { transform: translateX(-60px) scale(0.95) !important; }
        .hp-reveal[data-dir="right"] { transform: translateX(60px) scale(0.95) !important; }
        .hp-reveal[data-visible="true"] {
          opacity: 1 !important;
          transform: translate(0,0) scale(1) !important;
        }

        /* Image card styling */
        .hp-img-card {
          display: block;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .hp-img-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
          transition: transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hp-img-card:hover img {
          transform: scale(1.05) translateY(-6px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.2);
        }

        /* ── Bottom CTA row ── */
        .hp-work-cta-row {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .hp-work-grid-inner {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .hp-work-grid-inner .hp-work-item:nth-child(even) {
            margin-top: 0;
          }
          .hp-work-title {
            letter-spacing: -1px;
          }
        }
      `}</style>

      <section className="hp-work-section">
        <div className="container">

          {/* "work" title — scales from tiny to full size */}
          <div className="hp-work-title-wrap">
            <span className="hp-work-title">work</span>
          </div>

          {/* Images — reveal one by one */}
          <div className="hp-work-grid">
            <div className="hp-work-grid-inner">

              <div className="hp-work-item hp-reveal" data-dir="left" data-delay="0">
                <a href="assets/imgs/portfolio/6/7.webp" data-fancybox="portfolio" className="hp-img-card">
                  <img src="assets/imgs/portfolio/6/7.webp" alt="Portfolio Image" />
                </a>
              </div>

              <div className="hp-work-item hp-reveal" data-dir="right" data-delay="180">
                <a href="assets/imgs/portfolio/6/6.webp" data-fancybox="portfolio" className="hp-img-card">
                  <img src="assets/imgs/portfolio/6/6.webp" alt="Portfolio Image" />
                </a>
              </div>

              <div className="hp-work-item hp-reveal" data-dir="left" data-delay="0">
                <a href="assets/imgs/portfolio/6/1.webp" data-fancybox="portfolio" className="hp-img-card">
                  <img src="assets/imgs/portfolio/6/1.webp" alt="Portfolio Image" />
                </a>
              </div>

              <div className="hp-work-item hp-reveal" data-dir="right" data-delay="180">
                <a href="assets/imgs/portfolio/1/03.webp" data-fancybox="portfolio" className="hp-img-card">
                  <img src="assets/imgs/portfolio/1/03.webp" alt="Portfolio Image" />
                </a>
              </div>

            </div>
          </div>

          {/* View all projects button */}
          <div className="row row_bottom" style={{ marginTop: "-20px", position: "relative", zIndex: 10 }}>
            <div className="col-xxl-12">
              <div className="portfolio__btn btn_wrapper" data-speed="1" data-lag="0.2">
                <a className="wc-btn-secondary btn-hover btn-item" href="/our-portfolio">
                  <span></span>View <br />all projects <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
