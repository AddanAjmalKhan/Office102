'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function pricing() {
  useScrollReveal();
  useEffect(() => {
    // Link pricing CSS
    if (!document.querySelector('link[href*="pricing.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/css/pricing.css';
      document.head.appendChild(link);
    }

    // Init all pricingSlider instances after tab shows
    const initSliders = () => {
      const sliders = document.querySelectorAll<HTMLElement>('.pricingSlider');
      sliders.forEach((el) => {
        if ((el as any)._swiperInstance) return; // already initialized
        const sw = new (window as any).Swiper(el, {
          slidesPerView: 3,
          spaceBetween: 24,
          grabCursor: true,
          freeMode: true,
          scrollbar: {
            el: el.querySelector('.swiper-scrollbar'),
            draggable: true,
          },
          breakpoints: {
            0:   { slidesPerView: 1.1, spaceBetween: 16 },
            576: { slidesPerView: 2,   spaceBetween: 20 },
            992: { slidesPerView: 3,   spaceBetween: 24 },
          },
        });
        (el as any)._swiperInstance = sw;
      });
    };

    // Bootstrap tab events
    const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    tabs.forEach((tab) => {
      tab.addEventListener('shown.bs.tab', initSliders);
    });

    // Init visible slider on mount
    const timer = setTimeout(initSliders, 300);
    return () => {
      clearTimeout(timer);
      tabs.forEach((tab) => tab.removeEventListener('shown.bs.tab', initSliders));
    };
  }, []);

  return (<>

{/* Pricing hero area start */}
<section className="career__top">
  <div className="career__top-title">
    <div className="container pt-120">
      <div className="row pb-120">
        <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9">
          <div className="sec-title-wrapper">
            <h2 className="sec-title-2 animation__char_come">Our Pricing</h2>
          </div>
        </div>
        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
          <div className="btn_wrapper">
            <a href="/contact-us" className="wc-btn-secondary btn-hover btn-item"><span></span> Explore
              <br />Office 102 LLC Now! <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Pricing Card */}
  <div className="career__thumb pricing-tabs pb-100">
    <div className="container">
      <ul className="nav nav-pills mb-3 justify-content-lg-center flex-nowrap text-nowrap overflow-hidden gap-2"
        id="pills-tab" role="tablist" style={{ '--bs-nav-link-color': 'white', '--bs-nav-pills-link-active-bg': 'transparent', overflowX: 'auto' } as React.CSSProperties}>
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-logo-tab" data-bs-toggle="pill" data-bs-target="#pills-logo"
            type="button" role="tab" aria-controls="pills-logo" aria-selected="true">Logo Design</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-web-design-tab" data-bs-toggle="pill" data-bs-target="#pills-web-design"
            type="button" role="tab" aria-controls="pills-web-design" aria-selected="false">Web Design
            Development</button>
        </li>

        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-eccommerce-tab" data-bs-toggle="pill" data-bs-target="#pills-eccommerce"
            type="button" role="tab" aria-controls="pills-eccommerce" aria-selected="false">Eccommerce</button>
        </li>

        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-branding-tab" data-bs-toggle="pill" data-bs-target="#pills-branding"
            type="button" role="tab" aria-controls="pills-branding" aria-selected="false">Branding</button>
        </li>

        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-video-animation-tab" data-bs-toggle="pill"
            data-bs-target="#pills-video-animation" type="button" role="tab" aria-controls="pills-video-animation"
            aria-selected="false">Video animation</button>
        </li>

      </ul>
      <div className="tab-content mt-3" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-logo" role="tabpanel" aria-labelledby="pills-logo-tab"
          tabIndex={0}>
          <div className="swiper pricingSlider pt-5">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$89 <del><small
                          className=" fw-light opacity-75 text-white">$106</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>4 Logo Concepts</li>
                      <li>4 Free Revisions</li>
                      <li>24 - 48 hours TAT</li>
                      <li>1 Dedicated Designer</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>
              {/* slide 2 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Pro</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$129 <del><small
                          className=" fw-light opacity-75 text-white">$170</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>8 Logo Concepts</li>
                      <li>8 Free Revisions</li>
                      <li>24 - 48 hours TAT</li>
                      <li>2 Dedicated Designers</li>
                      <li>100% Ownership</li>
                      <li>24/7 Dedicated Account Manager</li>

                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 3 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5 best-seller">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Premium</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$209 <del><small
                          className=" fw-light opacity-75 text-white">$298</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>10 Logo Concepts</li>
                      <li>Unlimited Revisions</li>
                      <li>24 - 48 hours TAT</li>
                      <li>100% Ownership</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>3 Dedicated Designers</li>
                      <li>Social Media Banner and Profile Picture (FB &amp; Instagram)</li>
                      <li>Website Favicon Icon</li>
                      <li>Custom Company Letter Head with Designed Logo</li>
                      <li>Custom Email Signature</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>



              {/* slide 4 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">The</span>
                    <span className=" d-block text-primary h2 fw-bold">Ultimate </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$359 <del><small
                          className=" fw-light opacity-75 text-white">$538</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Unlimited Logo Concepts </li>
                      <li>Unlimited Revisions</li>
                      <li>24 - 48 hours TAT</li>
                      <li>100% Ownership</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>Social Media Banner and Profile Picture</li>
                      <li>Website Favicon Icon</li>
                      <li>Custom Company Letter Head with Designed Logo</li>
                      <li>Custom Email Signature</li>
                      <li>5 Dedicated Designers</li>
                      <li>Custom Company Profile</li>
                      <li>Vector EPS &amp; Editable AI Files</li>
                      <li>Complete Stationary Design (Business Card &amp; Envelope)</li>
                      <li>Flat $100 off voucher on website order</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 5 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$309 <del><small
                          className=" fw-light opacity-75 text-white">$458</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 4 seconds</li>
                      <li>3 Logo Concepts<br /></li>
                      <li>HD Quality 1920 x 1080</li>
                      <li>72 Hour Delivery</li>
                      <li>Dedicated Motion Artist</li>
                      <li>Template Based</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 6 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5 best-seller">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Logo</span>
                    <span className=" d-block text-primary h2 fw-bold">Pro </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$409 <del><small
                          className=" fw-light opacity-75 text-white">$618</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 4 seconds</li>
                      <li>5 Logo Concepts<br /></li>
                      <li>HD Quality 1920 x 1080</li>
                      <li>72 Hour Delivery</li>
                      <li>Dedicated Motion Artist</li>
                      <li>Custom Design</li>
                      <li>&gt;100% Ownership</li>
                      <li>&gt;24/7 Dedicated Account Manager</li>
                      <div><br /></div>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 7 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">The</span>
                    <span className=" d-block text-primary h2 fw-bold">Ultimate </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$509 <del><small
                          className=" fw-light opacity-75 text-white">$778</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 8 seconds</li>
                      <li>7 Logo Concepts<br /></li>
                      <li>HD Quality 1920 x 1080</li>
                      <li>Dedicated Motion Artist &amp; Designer</li>
                      <li>Custom Design</li>
                      <li>100% Ownership</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>Tagline Voice Over</li>
                      <li>Royalty free BG &amp; SFX</li>
                      <li>48 Hours Delivery</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 8 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">

                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Business</span>
                    <span className=" d-block text-primary h2 fw-bold">Plus </span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$609 <del><small
                          className=" fw-light opacity-75 text-white">$938</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 16 seconds</li>
                      <li>10 Logo Concepts</li>
                      <li>Dedicated Motion Artist &amp; Designer</li>
                      <li>Custom Design</li>
                      <li>100% Ownership</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>Tagline Voice Over</li>
                      <li>Royalty free BG &amp; SFX</li>
                      <li>48 Hours Delivery</li>
                      <li>Animation with 3D Effect</li>
                      <li>All File Formats and Source File</li>
                      <li>HD Quality 2K</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>



            </div>
            <div className="swiper-scrollbar"></div>
          </div>

        </div>
        <div className="tab-pane fade" id="pills-web-design" role="tabpanel" aria-labelledby="pills-web-design-tab"
          tabIndex={0}>
          <div className="swiper pricingSlider pt-5">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Beginner</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$350 <del><small
                          className=" fw-light opacity-75 text-white">$370</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>3 Pages WP Template Website</li>
                      <li>Static Slider Banner</li>
                      <li>2 Revisions</li>
                      <li>24/7 Dedicated Account Manager</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 2 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$525 <del><small
                          className=" fw-light opacity-75 text-white">$764</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>4 Pages Static Website</li>
                      <li>UI / UX Custom Design Concepts</li>
                      <li>Jquery Slider Banner</li>
                      <li>Dedicated Designer and Developer</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>Unlimited Revisions</li>
                      <li><b>Custom Certified HTML Built</b></li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 3 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Best</span>
                    <span className=" d-block text-primary h2 fw-bold">Seller</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$825 <del><small
                          className=" fw-light opacity-75 text-white">$1244</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>6 Pages Dynamic Website</li>
                      <li>Custom Certified HTML Built</li>
                      <li>UI / UX Custom Design Concepts</li>
                      <li>Jquery Slider Banner</li>
                      <li>Dedicated Designer and Developer</li>
                      <li>Unlimited Revisions</li>
                      <li>3 Banner Design</li>
                      <li>5 Stock Photos</li>
                      <li>Website Favicon Design</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>100% Ownership</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 5 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Pro</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$1325 <del><small
                          className=" fw-light opacity-75 text-white">$2044</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>9 Pages Dynamic Website</li>
                      <li>Custom Certified HTML Built</li>
                      <li>UI / UX Custom Design Concepts</li>
                      <li>Jquery Slider Banner</li>
                      <li>Dedicated Designer and Developer</li>
                      <li>Unlimited Revisions</li>
                      <li>6 Banner Design</li>
                      <li>10 Stock Photos</li>
                      <li>Website Favicon Design</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>100 % Ownership</li>
                      <li>Complete Source Files and Code</li>
                      <li>SEO Friendly Design</li>
                      <li>SEO Friendly Sitemap</li>
                      <li>SEO Guidance for Content</li>
                      <li>Complete Mobile and Device Responsive</li>
                      <li>Social Media Integration</li>
                      <li>Basic Contact / Query Form</li>
                      <li>CMS Panel</li>

                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 6 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">The</span>
                    <span className=" d-block text-primary h2 fw-bold">Ultimate</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$1725 <del><small
                          className=" fw-light opacity-75 text-white">$2684</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>12 Pages Dynamic Website</li>
                      <li>Custom Certified HTML Built</li>
                      <li>UI / UX Custom Design Concepts</li>
                      <li>Jquery Slider Banner</li>
                      <li>Dedicated Designer and Developer</li>
                      <li>Unlimited Revisions</li>
                      <li>8 Banner Design</li>
                      <li>15 Stock Photos</li>
                      <li>Website Favicon Design</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>100% Ownership</li>
                      <li>Complete Source Files and Code</li>
                      <li>SEO Friendly Design</li>
                      <li>SEO Friendly Sitemap</li>
                      <li>SEO Guidance for Content</li>
                      <li>Complete Mobile and Device Responsive</li>
                      <li>Social Media Integration</li>
                      <li>Custom Dynamic Contact / Query Form</li>
                      <li>CMS Panel</li>
                      <li>Signup Form for updates and news</li>
                      <li>Online Payment Integration</li>
                      <li>Web Search Functionality</li>
                      <li>Multi Language Functionality</li>
                      <li>Website Interaction Tracker</li>

                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>






            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-eccommerce" role="tabpanel" aria-labelledby="pills-eccommerce-tab"
          tabIndex={0}>
          <div className="swiper pricingSlider pt-5">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">E-Com</span>
                    <span className=" d-block text-primary h2 fw-bold">Starter</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$699 <del><small
                          className=" fw-light opacity-75 text-white">$1199</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 30 Products &amp; Categories</li>
                      <li>Custom Design and Development</li>
                      <li>General Product Search</li>
                      <li>Shopping Cart Integration</li>
                      <li>Lead / Order Inquiry Form</li>
                      <li>Website Favicon Design</li>
                      <li>Mobile Responsive Layout</li>
                      <li>Social Media Integrations</li>
                      <li>1 Payment Mode Integration</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 2 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">E-Com</span>
                    <span className=" d-block text-primary h2 fw-bold">Pro</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$1149 <del><small
                          className=" fw-light opacity-75 text-white">$1838</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Upto 50 Products &amp; Categories</li>
                      <li>Custom Design and Development</li>
                      <li>Advance Product Search</li>
                      <li>Shopping Cart Integration</li>
                      <li>Lead / Order Inquiry Form</li>
                      <li>Website Favicon Design</li>
                      <li>Mobile Responsive Layout</li>
                      <li>Social Media Integrations</li>
                      <li>2 Payment Mode Integration</li>
                      <li>5 Web Page Banners Design</li>
                      <li>5 Royalty Free Stock Images</li>
                      <li>24/7 Dedicated Account Manager</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 3 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">E-Com</span>
                    <span className=" d-block text-primary h2 fw-bold">Premium</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$2499 <del><small
                          className=" fw-light opacity-75 text-white">$3998</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Unlimited Products &amp; Categories</li>
                      <li>Custom Design and Development</li>
                      <li>Advance Product Search</li>
                      <li>Shopping Cart Integration</li>
                      <li>Lead / Order Inquiry Form</li>
                      <li>Website Favicon Design</li>
                      <li>Mobile Responsive Layout</li>
                      <li>Social Media Integrations</li>
                      <li>10 Web Page Banners Design</li>
                      <li>10 Royalty Free Stock Images</li>
                      <li>24/7 Dedicated Account Manager</li>
                      <li>Sales &amp; Inventory Management System</li>
                      <li>Unlimited Payment Mode Integration</li>
                      <li>Product Reviews and Rating</li>
                      <li>CMS Admin Panel (Website Control)</li>
                      <li>User Signup &amp; Login</li>
                      <li>Personalized User Dashboard</li>
                      <li>Wishlist and Favorite Functionality</li>
                      <li>Promo Code/Coupon Feature</li>
                      <li>Newsletter Subscription</li>
                      <li>Website Blog Section</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>









            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-branding" role="tabpanel" aria-labelledby="pills-branding-tab"
          tabIndex={0}>
          <div className="swiper pricingSlider pt-5">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$79 <del><small
                          className=" fw-light opacity-75 text-white">$129</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>Logo Watermark included</li>
                      <li>Business Card Design</li>
                      <li>Letter head Design</li>
                      <li>Envelope Design</li>
                      <li>MS Word Letterhead</li>
                      <li>Email Signature Design</li>
                      <li>Invoice Design</li>
                      <li>Facebook Banner Design</li>
                      <li>YouTube Banner Design</li>
                      <li>Twitter Banner Design</li>
                      <li>LinkedIn Banner Design</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 2 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Best</span>
                    <span className=" d-block text-primary h2 fw-bold">Seller</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$129 <del><small
                          className=" fw-light opacity-75 text-white">$206</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>All Starter Pack Features Plus</li>
                      <li>Favicon Design</li>
                      <li>Polo/T-Shirt Design</li>
                      <li>Cap/Hat Design</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 3 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Pro</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$199 <del><small
                          className=" fw-light opacity-75 text-white">$318</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>All Best Seller Features Plus</li>
                      <li>Bag Design</li>
                      <li>Signage Design</li>
                      <li>Flyer Design</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 4 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">The </span>
                    <span className=" d-block text-primary h2 fw-bold">Ultimate</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$269 <del><small
                          className=" fw-light opacity-75 text-white">$430</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>All Pro Pack Features Plus</li>
                      <li>Car Wrap/Vinyl Design</li>
                      <li>PPT Design</li>
                      <li>Magnet Design</li>
                      <li>Door Sign Design</li>
                      <li>Menu Design</li>
                      <li>Mug/Cup Design</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-video-animation" role="tabpanel"
          aria-labelledby="pills-video-animation-tab" tabIndex={0}>
          <div className="swiper pricingSlider pt-5">
            <div className="swiper-wrapper">

              {/* slide 1 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$249 <del><small
                          className=" fw-light opacity-75 text-white">$398</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>30 Seconds</li>
                      <li>2D Custom Animation</li>
                      <li>Script Writing</li>
                      <li>Storyboarding</li>
                      <li>Professional Voice Over</li>
                      <li>4 weeks TAT</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 2 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Starter</span>
                    <span className=" d-block text-primary h2 fw-bold">Pro</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$399 <del><small
                          className=" fw-light opacity-75 text-white">$638</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>60+ Seconds</li>
                      <li>2D Custom Animation</li>
                      <li>Script Writing</li>
                      <li>Storyboarding</li>
                      <li>Professional Voice Over</li>
                      <li>4 weeks TAT</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>

              {/* slide 3 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Best</span>
                    <span className=" d-block text-primary h2 fw-bold">Seller</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$449 <del><small
                          className=" fw-light opacity-75 text-white">$718</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>30 Seconds</li>
                      <li>3D Custom Animation</li>
                      <li>Script Writing</li>
                      <li>Storyboarding</li>
                      <li>Professional Voice Over</li>
                      <li>4 weeks TAT</li>
                      <li>720p HD Quality</li>
                      <li>Royalty free BG &amp; SFX</li>
                      <li>2 Revisions</li>
                      <li>100% Ownership</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 4 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">Pro</span>
                    <span className=" d-block text-primary h2 fw-bold">Pack</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$799 <del><small
                          className=" fw-light opacity-75 text-white">$1278</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>60+ Seconds Duration (upto 100 sec)</li>
                      <li>3D Custom Animation</li>
                      <li>Premium Script Writing</li>
                      <li>Storyboarding</li>
                      <li>Professional Voice Over</li>
                      <li>4 weeks deadline</li>
                      <li>Royalty free BG &amp; SFX</li>
                      <li>3 Revisions</li>
                      <li>100% Ownership</li>
                      <li>Detail Illustrations</li>
                      <li>24/7 Dedicated Project Manager</li>
                      <li>Source File</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


              {/* slide 5 */}
              <div className="swiper-slide">
                <div className="bg-dark rounded-3 p-3 py-4 p-md-4 py-md-5">
                  <div className=" text-center">
                    <span className=" d-block text-primary h2 mb-0 fw-bold">The</span>
                    <span className=" d-block text-primary h2 fw-bold">Ultimate</span>
                    <h2 className=" text-white" style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}>$1099 <del><small
                          className=" fw-light opacity-75 text-white">$1758</small></del></h2>
                  </div>
                  <div className="list-items-content">
                    <ul className="listscroll">
                      <li>60-100 Seconds</li>
                      <li>3D Custom Animation</li>
                      <li>Premium Script Writing</li>
                      <li>2 Storyboarding Concepts</li>
                      <li>Professional Voice Over</li>
                      <li>4 weeks TAT</li>
                      <li>100% Ownership</li>
                      <li>Detailed Illustrations</li>
                      <li>24/7 Dedicated Project Manager</li>
                      <li>Source File</li>
                      <li>2 Custom Characters Illustrations</li>
                      <li>Custom Background Music and SFX</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a href="#." className="btn btn-primary">Get Started</a>
                  </div>
                </div>
              </div>


            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </div>

      </div>
    </div>
  </div>

</section>




</>); }