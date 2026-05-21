export default function about() { return (<div className="about-page-custom-style">
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
.about-page-custom-style .from-text {
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  background-color: #ff4a17 !important;
  color: #121212 !important;
  padding: 15px 30px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  z-index: 10 !important;
}
.about-page-custom-style .from-text span {
  font-size: 32px !important;
  line-height: 1 !important;
  margin-top: 5px !important;
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
`}} />
{/* Hero area start */}
<section className="hero__about">
  <div className="container g-0 line">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-12">
        <div className="hero__about-content">
          <h1 className="hero-title animation__word_come">Our Tireless Efforts & Years of Experience Are All
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
            <div className="hero__about-text title-anim">
              <p>From the moment we start your project to the moment it ends, Office 101 LLC strives
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
  <div className="container g-0 line pt-140">
    <span className="line-3"></span>
    <div className="sec-title-wrapper">
      <div className="from-text">from <span>2023</span></div>

      <div className="row">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
          <h2 className="sec-sub-title title-anim">Digital Studio</h2>
          <h3 className="sec-title title-anim">Our story</h3>
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
  <div className="container g-0 line pt-150">
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
  <div className="container g-0 line pt-140 pb-140">
    <span className="line-3"></span>
    <div className="row g-0">
      <div className="col-xxl-12">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">International Brands</h2>
          <h3 className="sec-title title-anim">We are happy to work with global <br />
            largest brands</h3>
        </div>
      </div>

      <div className="brand__list">
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
<section className="testimonial__area-2">
  <div className="container g-0 line pb-140">
    <span className="line-3"></span>

    <div className="row g-0">
      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div className="testimonial__video">
          {/* <video autoplay muted loop>
                    <source src="assets/video/testimonial.mp4" type="video/mp4" />
                  </video> */}
          <img src="assets/imgs/testimonial/ceo.webp" alt="Testimonial Video" style={{ width: '100%' }} />
        </div>
      </div>

      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
        <div className="testimonial__slider-wrapper-2">
          <div className="swiper testimonial__slider">
            <div className="swiper-wrapper">

              <div className="swiper-slide testimonial__slide">
                <div className="testimonial__inner-2">
                  <h2 className="testimonial__title-2">No.1 Design Agency in the U.S</h2>
                  <p className="testimonial__text-2">Whether you want to create an impactful logo or looking to
                    build a stunning website, Office 101 LLC can help you, like no one else. Get to
                    know everything about us and let the no.1 design agency do the rest for you!</p>
                  <h3 className="testimonial__author">Muhammad Yahya</h3>
                  <h4 className="testimonial__role"> CEO, Office 101 LLC</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial__pagination">
            <div className="prev-button"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="next-button"><i className="fa-solid fa-arrow-left"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Testimonial area end */}


{/* CTA area start */}
<section className="cta__area">
  <div className="container line pb-110 dark-p">
    <div className="line-3"></div>
    <div className="row">
      <div className="col-xxl-12">
        <div className="cta__content">
          <p className="cta__sub-title">Work with us</p>
          <h2 className="cta__title title-anim">We would love to hear more about your project</h2>
          <div className="btn_wrapper">
            <a href="/contact-us" className="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk now <i
                className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CTA area end */}

</div>); }