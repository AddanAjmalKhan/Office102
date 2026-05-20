export default function ourportfolio() { return (<>
{/* Portfolio area start */}
<section className="portfolio__area-6">
  <div className="container line pt-100 pb-140">
    <span className="line-3"></span>
    <div className="zi-9">
      <div className="row">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
          <div className="sec-title-wrapper portfolio__title-wrap-6">
            <div className="">
              <h2 className="sec-sub-title animation__char_come">Featured</h2>
              <h3 className="sec-title animation__char_come_long">Work</h3>
              <p>View the full case study of our recent featured and awesome works that we created for our
                clients.
              </p>
            </div>
            <div className="portfolio__pagination-6">
              <span className="portfolio__current">01</span> / 0<span className="portfolio__total"></span>
            </div>
          </div>
        </div>

        <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
          <div className="portfolio__wrapper-6">
            <div className="portfolio__list-6">
              <div className="portfolio__item-6" data-portfitem="1">
                <a href="#">
                  <img src="assets/imgs/portfolio/6/1.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="2">
                <a href="assets/imgs/portfolio/6/2.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/2.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="3">
                <a href="assets/imgs/portfolio/6/3.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/3.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="4">
                <a href="assets/imgs/portfolio/6/4.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/4.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="5">
                <a href="assets/imgs/portfolio/6/5.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/5.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="6">
                <a href="assets/imgs/portfolio/6/6.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/6.webp" alt="Portfolio Image" data-speed="0.4" />
                </a>
              </div>

              <div className="portfolio__item-6" data-portfitem="7">
                <a href="assets/imgs/portfolio/6/7.webp" data-fancybox="portfolio">
                  <img src="assets/imgs/portfolio/6/7.webp" alt="Portfolio Image" data-speed="0.4" />
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

</>); }