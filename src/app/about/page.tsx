"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function about() { 
  const [testKey, setTestKey] = useState(0);
  useScrollReveal(".hero-title, .hero__about-text, .hero__about-video, .story__text, .story__img-wrapper, .counter__item, .brand__item, .testimonial__inner-2, .cta__content");
  return (<div className="about-page-custom-style">
<style dangerouslySetInnerHTML={{__html: `
.about-page-custom-style .hero__about-info {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-top: 60px !important;
  gap: 30px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding-top: 40px !important;
}
.about-page-custom-style .hero__about-btn .wc-btn-primary {
  width: 160px !important;
  height: 160px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  background: transparent !important;
  color: #fff !important;
  font-size: 14px !important;
  transition: all 0.3s ease !important;
  padding: 0 !important;
}
.about-page-custom-style .hero__about-btn .wc-btn-primary:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  transform: scale(1.05) !important;
}
.about-page-custom-style .hero__about-text {
  max-width: 500px !important;
  margin: 0 !important;
}
.about-page-custom-style .hero__about-text p {
  color: #a0a0a0 !important;
  line-height: 1.6 !important;
  margin: 0 !important;
  font-size: 16px !important;
}

.about-page-custom-style .sec-title-wrapper {
  position: relative !important;
}
.about-page-custom-style .from-text-simple {
  color: #ff4a17 !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  margin-top: 10px !important;
}
.about-page-custom-style .hero__about-award {
  flex-shrink: 0 !important;
}
.about-page-custom-style .hero__about-award img {
  width: 120px !important;
  height: auto !important;
  filter: brightness(0) invert(1) !important;
  opacity: 0.85 !important;
}

.about-page-custom-style .story__img-wrapper {
  border-radius: 8px !important;
  overflow: hidden !important;
  margin-bottom: 20px !important;
}
.about-page-custom-style .story__img-wrapper img {
  border-radius: 8px !important;
  width: 100% !important;
  object-fit: cover !important;
  transition: transform 0.4s ease, filter 0.4s ease !important;
}
.about-page-custom-style .story__img-wrapper:hover img {
  transform: scale(1.03) !important;
  filter: brightness(1.1) !important;
}

.about-page-custom-style .sec-sub-title,
.about-page-custom-style .sec-title,
.about-page-custom-style .story__text p {
  color: #fff !important;
}

.about-page-custom-style .line-3 {
  display: none !important;
}
.about-page-custom-style .line::before,
.about-page-custom-style .line::after {
  display: none !important;
}



/* Counter Area */
.about-page-custom-style .counter__wrapper {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  border: none !important;
  padding: 0 !important;
}
.about-page-custom-style .counter__item {
  width: 280px !important;
  height: 280px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  background: transparent !important;
  position: relative !important;
}
.about-page-custom-style .counter__border {
  display: none !important;
}
.about-page-custom-style .counter__number {
  font-size: 90px !important;
  font-weight: 500 !important;
  color: #fff !important;
  line-height: 1 !important;
  margin-bottom: 10px !important;
}
.about-page-custom-style .counter__item p {
  color: #a0a0a0 !important;
  font-size: 16px !important;
  text-align: center !important;
  text-transform: capitalize !important;
  margin: 0 !important;
}

/* Testimonial Area */
.about-page-custom-style .testimonial__area-2 {
  background: #121212 !important;
  padding: 100px 0 !important;
}
.about-page-custom-style .testimonial__title-2 {
  font-size: 48px !important;
  color: #fff !important;
  font-weight: 600 !important;
  font-style: italic !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
}
.about-page-custom-style .testimonial__text-2 {
  color: #a0a0a0 !important;
  font-size: 18px !important;
  margin-bottom: 30px !important;
  line-height: 1.6 !important;
}
.about-page-custom-style .testimonial__author {
  color: #fff !important;
  font-size: 20px !important;
  font-weight: 600 !important;
  margin-bottom: 5px !important;
}
.about-page-custom-style .testimonial__role {
  color: #a0a0a0 !important;
  font-size: 14px !important;
}
.about-page-custom-style .testimonial__inner-2 {
  position: relative !important;
  padding: 50px !important;
  background: #181818 !important;
  border-radius: 12px !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}
.about-page-custom-style .testimonial__slider-wrapper-2,
.about-page-custom-style .testimonial__slider,
.about-page-custom-style .testimonial__slide {
  background: transparent !important;
}
.about-page-custom-style .testimonial__inner-2::before {
  content: '“' !important;
  display: block !important;
  font-size: 120px !important;
  color: #90ff00 !important;
  font-family: serif !important;
  line-height: 0.8 !important;
  margin-bottom: 10px !important;
  font-weight: 700 !important;
}
.about-page-custom-style .testimonial__pagination {
  position: absolute !important;
  right: 20px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
  z-index: 10 !important;
}
.about-page-custom-style .testimonial__pagination .prev-button,
.about-page-custom-style .testimonial__pagination .next-button {
  width: 60px !important;
  height: 60px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color: #fff !important;
  cursor: pointer !important;
  background: transparent !important;
  transition: all 0.3s ease !important;
}
.about-page-custom-style .testimonial__pagination .prev-button:hover,
.about-page-custom-style .testimonial__pagination .next-button:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}

/* CTA Area */
.about-page-custom-style .cta__content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}
.about-page-custom-style .cta__sub-title {
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  padding: 8px 24px !important;
  border-radius: 30px !important;
  text-transform: uppercase !important;
  font-size: 12px !important;
  letter-spacing: 1px !important;
  margin-bottom: 30px !important;
  color: #fff !important;
}
.about-page-custom-style .cta__title {
  font-size: 60px !important;
  font-weight: 600 !important;
  color: #fff !important;
  line-height: 1.1 !important;
  max-width: 800px !important;
  margin: 0 auto 60px !important;
}
.about-page-custom-style .cta__btn {
  width: 180px !important;
  height: 180px !important;
  border-radius: 50% !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color: #fff !important;
  background: transparent !important;
  font-size: 16px !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
}
.about-page-custom-style .cta__btn:hover {
  background: rgba(255, 255, 255, 0.05) !important;
  transform: scale(1.05) !important;
}
.about-page-custom-style .cta__content .wc-btn-primary {
  color: #fff !important;
}

@keyframes testFadeIn {
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
}
.test-anim-wrapper {
  animation: testFadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@media (max-width: 991px) {
  .about-page-custom-style .hero__about-info {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 30px !important;
  }
  .about-page-custom-style .hero-title {
    font-size: clamp(36px, 6vw, 60px) !important;
  }
  .about-page-custom-style .counter__wrapper {
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 30px !important;
  }
  .about-page-custom-style .counter__item {
    width: calc(50% - 15px) !important;
    height: auto !important;
    aspect-ratio: 1/1 !important;
  }
  .about-page-custom-style .counter__number {
    font-size: 60px !important;
  }
  .about-page-custom-style .testimonial__inner-2 {
    padding: 30px !important;
  }
  .about-page-custom-style .testimonial__inner-2::before {
    font-size: 80px !important;
    margin-bottom: 0 !important;
  }
  .about-page-custom-style .testimonial__title-2 {
    font-size: 32px !important;
  }
  .about-page-custom-style .cta__title {
    font-size: 40px !important;
  }
}

@media (max-width: 767px) {
  .about-page-custom-style .counter__item {
    width: 100% !important;
    max-width: 280px !important;
  }
  .about-page-custom-style .testimonial__inner-2 {
    padding: 20px !important;
  }
  .about-page-custom-style .testimonial__title-2 {
    font-size: 24px !important;
  }
  .about-page-custom-style .cta__title {
    font-size: 32px !important;
  }
  .about-page-custom-style .cta__btn {
    width: 140px !important;
    height: 140px !important;
    font-size: 14px !important;
  }
}
`}} />
{/* Hero area start */}
<section className="hero__about">
  <div className="container g-0 line">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-12">
        <div className="hero__about-content">
          <h1 className="hero-title" style={{ fontFamily: "serif", fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 90px)', lineHeight: 1.1, color: '#fff', marginBottom: '30px', letterSpacing: '-1px' }}>Our Tireless Efforts & Years of Experience Are All
            Dedicated To Your Success</h1>
          <div className="hero__about-info">
            <div className="hero__about-btn">
              <div className="btn_wrapper">
                <a href="/our-services" className="wc-btn-primary btn-hover btn-item"><span></span> Trends &
                  <br />
                  technology
                  <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="hero__about-text">
              <p>From the moment we start your project to the moment it ends, Office 102 LLC strives
                to go above and beyond your expectations. Our creative design experts have earned decades of
                experience in delivering exceptional services to small, medium, and large scale businesses from
                diverse industries.</p>
            </div>
            <div className="hero__about-award">
              <img src="assets/imgs/about/award.png" alt="Best Studio Award" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row hero__about-row">
      <div className="col-xxl-12">
        <div className="hero__about-video">
          <video loop muted autoPlay playsInline>
            <source src="assets/video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Hero area end */}


{/* Story area start */}
<section className="story__area">
  <div className="container g-0 line pt-60">
    <span className="line-3"></span>
    <div className="sec-title-wrapper">
      <div className="row">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
          <h2 className="sec-sub-title title-anim">Digital Studio</h2>
          <h3 className="sec-title title-anim">Our story</h3>
          <p className="from-text-simple">From 2023</p>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
          <div className="story__text">
            <p>Your brand is the most important asset in your company let our team of professionals help you
              with a good strategy took the runway next with an edgy collection featuring dyed denim pieces. The
              collection included patchwork denim, a trend that has recently exploded in younger generations.
              Playing on aspects of sustainability, the pieces appeared to be upcycled to establish dimension
              and flair. This take on grunge and streetwear took sustainable fashion to an entirely new level.
            </p>
            <p>Our specialized team of researchers, strategists, designers, developers, and project managers
              work
              with streamlined processes to break through organizational roadblocks. We translate research into
              solutions, crafting thoughtful and unified brands.</p>
          </div>
        </div>

      </div>
    </div>
    <div className="row">
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
        <div className="story__img-wrapper">
          <img src="assets/imgs/story/1.jpg" alt="Story Thumbnail" className="w-100" />
        </div>
      </div>
      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div className="story__img-wrapper img-anim">
          <img src="assets/imgs/story/2.jpg" alt="Story Thumbnail" data-speed="auto" />
        </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
        <div className="story__img-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img src="assets/imgs/story/3.jpg" alt="Story Thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="assets/imgs/story/4.jpg" alt="Story Thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  </div>
</section>
{/* Story area end */}


{/* Counter area start */}
<section className="counter__area">
  <div className="container g-0 line pt-60">
    <span className="line-3"></span>

    <div className="row">
      <div className="col-xxl-12">
        <div className="counter__wrapper counter_animation">
          <div className="counter__item counter__anim">
            <h2 className="counter__number">2k+</h2>
            <p>Project <br />completed</p>
            <span className="counter__border"></span>
          </div>
          <div className="counter__item counter__anim">
            <h2 className="counter__number">1.8k+</h2>
            <p>Happy <br />customers</p>
            <span className="counter__border"></span>
          </div>
          <div className="counter__item counter__anim">
            <h2 className="counter__number">1k+</h2>
            <p>Projects in <br />Process</p>
            <span className="counter__border"></span>
          </div>
          <div className="counter__item counter__anim">
            <h2 className="counter__number">4</h2>
            <p>Awards <br />achievement</p>
            <span className="counter__border"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Counter area end */}


{/* Brand area start */}
<section className="brand__area">
  <div className="container g-0 line pt-60 pb-60">
    <span className="line-3"></span>
    <div className="row g-0">
      <div className="col-xxl-12">
        <div className="sec-title-wrapper" style={{ paddingLeft: '20px' }}>
          <h2 className="sec-sub-title title-anim" style={{ color: '#fff' }}>International Brands</h2>
          <h3 className="sec-title title-anim" style={{ color: '#fff' }}>We are happy to work with global <br />
            largest brands</h3>
        </div>
      </div>

      <div className="brand__list custom-brand-grid">
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/1.png" alt="Brand Logo" />
        </div>
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/2.png" alt="Brand Logo" />
        </div>
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/3.png" alt="Brand Logo" />
        </div>
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/4.png" alt="Brand Logo" />
        </div>
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/5.png" alt="Brand Logo" />
        </div>
        <div className="brand__item fade_bottom">
          <img src="assets/imgs/brand/bg/6.png" alt="Brand Logo" />
        </div>
      </div>
    </div>
  </div>
</section>
{/* Brand area end */}


{/* Testimonial area start */}
<section className="testimonial__area-2" style={{ position: 'relative' }}>
  <div className="container g-0 line pb-60">
    <span className="line-3"></span>

    <div className="row g-0 align-items-center">
      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div className="testimonial__video">
          <img src="assets/imgs/testimonial/ceo.webp" alt="Testimonial Video" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
        <div className="testimonial__slider-wrapper-2" style={{ position: 'relative', paddingLeft: '60px' }}>
          <div className="swiper testimonial__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide testimonial__slide">
                <div key={testKey} className="testimonial__inner-2 test-anim-wrapper">
                  <h2 className="testimonial__title-2">No.1 Design Agency in the U.S</h2>
                  <p className="testimonial__text-2">Whether you want to create an impactful logo or looking to
                    build a stunning website, Office 102 LLC can help you, like no one else. Get to
                    know everything about us and let the no.1 design agency do the rest for you!</p>
                  <h3 className="testimonial__author">Muhammad Yahya</h3>
                  <h4 className="testimonial__role">CEO, Office 102 LLC</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial__pagination">
            <div className="next-button" onClick={() => setTestKey(prev => prev + 1)}><i className="fa-solid fa-arrow-right"></i></div>
            <div className="prev-button" onClick={() => setTestKey(prev => prev + 1)}><i className="fa-solid fa-arrow-left"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Testimonial area end */}


{/* CTA area start */}
<section className="cta__area" style={{ padding: '100px 0' }}>
  <div className="container line pb-60 dark-p">
    <div className="line-3"></div>
    <div className="row">
      <div className="col-xxl-12">
        <div className="cta__content">
          <p className="cta__sub-title">Work with us</p>
          <h2 className="cta__title title-anim">We would love to hear more about your project</h2>
          <div className="btn_wrapper">
            <a href="/contact" className="wc-btn-primary btn-hover btn-item">
              <span></span> Let’s Talk <br /> Now
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CTA area end */}

</div>); }