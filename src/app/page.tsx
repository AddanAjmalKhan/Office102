"use client";
import HomeWorkSection from "@/components/HomeWorkSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() { 
  useScrollReveal();

  return (<>
<style>{`
  .hero__area-2 {
    position: relative;
    overflow: hidden;
  }
  .hero__grid-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    -webkit-mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%);
    mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 30%, transparent 100%);
    animation: heroGridPulse 7s ease-in-out infinite;
  }
  @keyframes heroGridPulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
`}</style>
{/***/}
<section className="hero__area-2">
  {/* Grid background overlay */}
  <div className="hero__grid-bg"></div>
  <div className="hero__inner-2">
    <div className="sec-title-wrapper">
      <h2 className="sec-title-3 bg-shape">We Design <br />Unique</h2>
      <h2 className="sec-title-3">Digital <br />Experience</h2>
    </div>
    <div className="hero__text-2">
      <p>We have a squad of connoisseurs who come up with the most-effective digital tactics for your digital
        business to drive the highest ROI.</p>
      <div className="hero__button btn_wrapper">
        <a href="/our-services" className="wc-btn-pink btn-hover btn-item"><span></span>
          Explore <br />our services <i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div className="hero2-shape">
    <img src="assets/imgs/bg/arrow-long.png" alt="BG Shape" />
  </div>
</section>
{/**/}

{/**/}
<section className="roll__area">
  <div className="swiper roll__slider">
    <div className="swiper-wrapper roll__wrapper">
      <div className="swiper-slide roll__slide">
        <h2>WEB DEVELOPMENT</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>BUSINESS</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>BRANDING</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>LOGO DESIGN</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>WEBSITE DESIGN</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>MOBILE APPS</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>DIGITAL SOLUTION</h2>
      </div>
      {/* Duplicate for seamless marquee */}
      <div className="swiper-slide roll__slide">
        <h2>WEB DEVELOPMENT</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>BUSINESS</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>BRANDING</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>LOGO DESIGN</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>WEBSITE DESIGN</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>MOBILE APPS</h2>
      </div>
      <div className="swiper-slide roll__slide">
        <h2>DIGITAL SOLUTION</h2>
      </div>
    </div>
  </div>
</section>
{/**/}


{/**/}
<section className="about__area">
  <div className="container line g-0 pt-140 pb-130">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-12">
        <div className="about__title-wrapper">
          <h3 className="sec-title title-anim">We unlock the potential of your business
            with creative design</h3>
        </div>

        <div className="about__content-wrapper">
          <div className="about__img">
            <div className="img-anim">
              <img src="assets/imgs/about/1/1.jpg" alt="About Image" data-speed="0.3" />
            </div>

            <div className="about__img-right">
              <img src="assets/imgs/about/1/2.jpg" alt="About Image Right" data-speed="0.5" />
              <div className="shape">
                <div className="secondary" data-speed="0.9"></div>
                <div className="primary"></div>
              </div>
            </div>
          </div>

          <div className="about__content text-anim">
            <p>From traditional PR and thought leadership campaigns to
              storytelling and creative social media
              management we’ve got you covered. Something is not your average order-taking vendor. We are
              proud to
              be the go-to partner for some of the world’s biggest agencies and brands because they trust our
              expertise</p>

            <div className="cursor-btn btn_wrapper">
              <a className="btn-item wc-btn-primary btn-hover" href="/about"><span></span> Explore Us <i
                  className="fa-solid fa-arrow-right"></i></a>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
{/**/}


{/**/}
<section className="service__area pt-110 pb-150">
  <div className="container">
    <div className="row">
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
        <div className="sec-title-wrapper wrap">
          <h2 className="sec-sub-title title-anim">service</h2>
          <h3 className="sec-title title-anim">Solution we <br />provide</h3>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
        <div className="service__top-text text-anim">
          <p>With every single one of our clients we bring forth a deep passion
            for <span>creative problem solving
              innovations</span> forward thinking
            brands boundaries</p>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
        <div className="service__top-btn">
          <div className="btn_wrapper">
            <a href="/our-services" className="btn-item wc-btn-secondary btn-hover"><span></span> View <br />all
              services <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div className="service__list-wrapper">
      <div className="row">
        <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
          <div className="service__img-wrapper">
            <img src="assets/imgs/service/1/1.jpg" alt="Service Image" className="service__img img-1 active" />
            <img src="assets/imgs/service/1/2.png" alt="Service Image" className="service__img img-2" />
            <img src="assets/imgs/service/1/3.png" alt="Service Image" className="service__img img-3" />
            <img src="assets/imgs/service/1/4.png" alt="Service Image" className="service__img img-4" />

            <span className="shape-box-1 current"></span>
            <span className="shape-box-2"></span>
            <span className="shape-box-3"></span>
            <span className="shape-box-4"></span>
          </div>
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
          <div className="service__list">
            <a href="/our-services">
              <div className="service__item animation_home1_service" data-service="1">
                <div className="service__number"><span>01</span></div>
                <div className="service__title-wrapper">
                  <h4 className="service__title">Web & Mobile
                    Development</h4>
                </div>
                <div className="service__text">
                  <p>Our UI/UX experts thoroughly understand your specific requirements and deliver a purposeful
                    website.</p>
                </div>
                <div className="service__link">
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </a>

            <a href="/our-services">
              <div className="service__item  animation_home1_service" data-service="2">
                <div className="service__number"><span>02</span></div>
                <div className="service__title-wrapper">
                  <h4 className="service__title">Mobile <br />Applications</h4>
                </div>
                <div className="service__text">
                  <p>At Office 102 LLC, We Design and Develop Mobile Applications that Deliver Great
                    Value To The End Users.</p>
                </div>
                <div className="service__link">
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </a>

            <a href="/our-services">
              <div className="service__item  animation_home1_service" data-service="3">
                <div className="service__number"><span>03</span></div>
                <div className="service__title-wrapper">
                  <h4 className="service__title">Digital <br />Maketing</h4>
                </div>
                <div className="service__text">
                  <p>We can help you compete better and outrun your rivals with a strong brand reputation &
                    custom strategy.</p>
                </div>
                <div className="service__link">
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </a>

            <a href="/our-services">
              <div className="service__item  animation_home1_service" data-service="4">
                <div className="service__number"><span>04</span></div>
                <div className="service__title-wrapper">
                  <h4 className="service__title">Branding and Strategy</h4>
                </div>
                <div className="service__text">
                  <p>Our creative designers can help you stand out with a powerful branding and an impression
                    that lasts longer.</p>
                </div>
                <div className="service__link">
                  <p><i className="fa-solid fa-arrow-right"></i></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/**/}


{/**/}
<section className="counter__area" style={{background: '#fff'}}>
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
{/**/}


{/**/}
<section className="workflow__area" style={{background: '#fff'}}>
  <div className="container g-0 line pt-140 pb-140">
    <div className="line-3"></div>
    <div className="row">
      <div className="col-xxl-12">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Workflow</h2>
          <h3 className="sec-title title-anim">How we work</h3>
        </div>
      </div>

      <div className="col-xxl-12">
        <div className="swiper workflow__slider ">
          <div className="swiper-wrapper">
            <div className="swiper-slide workflow__slide global-anim-ready">
              <h4 className="workflow__step">step 01</h4>
              <h5 className="workflow__number">01</h5>
              <h6 className="workflow__title">Build A Design Brief</h6>
              <p>Fill out the creative design brief and tell us everything that you need and allow us to
                kick-start your project.</p>
            </div>

            <div className="swiper-slide workflow__slide global-anim-ready">
              <h4 className="workflow__step">step 02</h4>
              <h5 className="workflow__number">02</h5>
              <h6 className="workflow__title">Receive your designs</h6>
              <p>Our creative designers will work according to your needs and provide you with multiple design
                concepts.</p>
            </div>

            <div className="swiper-slide workflow__slide global-anim-ready">
              <h4 className="workflow__step">step 03</h4>
              <h5 className="workflow__number">03</h5>
              <h6 className="workflow__title">Give feedback</h6>
              <p>Review the provided design concepts and let us know if we need any additions or revisions in
                your design.</p>
            </div>

            <div className="swiper-slide workflow__slide global-anim-ready">
              <h4 className="workflow__step">step 04</h4>
              <h5 className="workflow__number">04</h5>
              <h6 className="workflow__title">Pick your favorite</h6>
              <p>Pick what satisfies your business needs the best and get final designs with complete ownership
                rights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/**/}


{/**/}
<HomeWorkSection />
{/**/}


{/**/}
<section className="brand__area" style={{background: '#fff'}}>
  <div className="container g-0 line pt-140 pb-130">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-12">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">International Brands</h2>
          <h3 className="sec-title title-anim">We are happy to work with global <br />
            largest brands</h3>
        </div>
      </div>

      <div className="col-xxl-12">
        <div className="brand__list">
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/01.png" alt="Brand Logo" />
          </div>
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/02.png" alt="Brand Logo" />
          </div>
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/03.png" alt="Brand Logo" />
          </div>
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/04.png" alt="Brand Logo" />
          </div>
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/05.png" alt="Brand Logo" />
          </div>
          <div className="brand__item fade_bottom">
            <img src="assets/imgs/brand/06.png" alt="Brand Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/**/}


{/**/}
<section className="testimonial__area" style={{background: '#fff'}}>
  <div className="container g-0 line">
    <span className="line-3"></span>
    <div className="row">
      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
        <div className="testimonial__wrapper">
          <div className="testimonial__item item-1">
            <div className="button modal-trigger">
              <div className="testimonial__img b-right">
                <img src="assets/imgs/testimonial/1/1.png" alt="Testimonial Image" />
              </div>

              <h2 className="testimonial__title">Jessica Sherlock</h2>
              <h3 className="testimonial__role">Marketing Manager, Ukiata</h3>
            </div>
          </div>
          <div className="sec-title-wrapper text-anim">
            <h4 className="sec-sub-title">Testimonials</h4>
            <h5 className="sec-title title-anim">Clients <br />feedback</h5>
            <p>Our happy customers give us impactfull and positive feedback on our services, customer supports
              &
              etc.</p>
          </div>
        </div>

        <div className="testimonial__item item-2">
          <div className="button modal-trigger-2">
            <div className="testimonial__img b-left">
              <img src="assets/imgs/testimonial/1/3.png" alt="Testimonial Image" />
            </div>

            <h2 className="testimonial__title">Brett Chase</h2>
            <h3 className="testimonial__role">CEO, Ohana Digital</h3>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
        <div className="testimonial__item item-3 img-">
          <div className="button modal-trigger-3">
            <div className="testimonial__img b-left">
              <img src="assets/imgs/testimonial/1/2.png" alt="Testimonial Image" />
            </div>

            <h2 className="testimonial__title">Adam Smith</h2>
            <h3 className="testimonial__role">Founder, Lynk Stories</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/**/}





{/**/}
<section className="cta__area" style={{background: '#fff'}}>
  <div className="container line pb-110">
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
{/**/}

</>); }