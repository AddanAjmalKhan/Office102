export default function faqs() { return (<>
{/* FAQ area start */}
<section className="faq__area-6 dark">
  <div className="container g-0 line pt-130 pb-140">
    <div className="line-3"></div>

    <div className="row">
      <div className="col-xxl-12">
        <div className="sec-title-wrapper">
          <h2 className="sec-title-2">FAQ</h2>
          <p className="">Frequently asked question (FAQ) <br /> pages to find answers.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xxl-12">
        <div className="faq__list-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Design should enrich our day
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>People know what an FAQ is, so make that your page title. Don’t overcomplicate things by
                    calling it “Good to Know” or “More Info”. Sometimes people put the frequently asked
                    questions section on their Contact page, but you can create your own page and put it right
                    in your website navigation menu or website footer so it’s easy to find. Getting a straight,
                    quick answer to your question is a relief. So keep answers to a short paragraph if you can,
                    less than 100 words. Answer the entire question in the FAQ without linking away to another
                    page</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Bring their individual experience and creative
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>This is the second item's accordion body. It is hidden by default, until the
                    collapse plugin adds the appropriate classes that we use to style each element. These
                    classes
                    control the overall appearance, as well as the showing and hiding via CSS transitions. You
                    can
                    modify any of this with custom CSS or overriding our default variables.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Human centred design to challenges
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Our design services starts and ends with a best-in-class experience strategy that builds
                    brands. Through a process of iteration and prototyping design interfaces that bring joy to
                    people</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Design should enrich our day
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Our design services starts and ends with a best-in-class experience strategy that builds
                    brands. Through a process of iteration and prototyping design interfaces that bring joy to
                    people</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Developing core web applications
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Our design services starts and ends with a best-in-class experience strategy that builds
                    brands. Through a process of iteration and prototyping design interfaces that bring joy to
                    people</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* FAQ area end */}


    {/* CTA area start */}
    <section className="cta__area dark">
      <div className="container line pb-110 dark-p">
        <div className="line-3"></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="cta__content" style={{ textAlign: "center", position: "relative", zIndex: 5 }}>
              <p className="cta__sub-title-pill" style={{ display: "inline-block", padding: "8px 24px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "30px", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px", marginBottom: "20px", color: "#fff" }}>WORK WITH US</p>
              <h2 className="cta__title title-anim" style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "600", marginTop: "10px", lineHeight: "1.2", maxWidth: "800px", margin: "10px auto 0" }}>We would love to hear <br/>more about your project</h2>
              <div className="custom-cta-wrapper" style={{ display: "flex", justifyContent: "center", marginTop: "60px", position: "relative", zIndex: 10 }}>
                <a href="/contact-us" className="custom-cta-btn" style={{ width: "220px", height: "220px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "#fff", fontSize: "16px", transition: "all 0.3s ease" }}>
                  Let's Talk Now <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px", transform: "rotate(-45deg)" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA area end */}

</>); }