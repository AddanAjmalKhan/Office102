export default function Footer() { return (<>{/**/}
<footer className="footer__area">
    <div className="footer__top">
        <div className="container footer-line"></div>
        <img src="assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.75" />
    </div>

    <div className="footer__btm">
        <div className="container">
            <div className="row footer__row">
                <div className="col-xxl-12">
                    <div className="footer__inner">
                        <div className="footer__widget">
                            <img className="footer__logo" src="assets/imgs/logo.webp" alt="Footer Logo" />
                            <p>When do they work well, and when do they on us and finally, when do we actually need how
                                can we
                                avoid
                                them.</p>
                        </div>

                        <div className="footer__widget-2">
                            <h2 className="footer__widget-title">Information</h2>
                            <ul className="footer__link">
                                <li><a href="/about">About Company</a></li>
                                <li><a href="/our-portfolio">Case Study</a></li>

                                <li><a href="/faqs">FAQs</a></li>
                                <li><a href="/contact-us">Contact</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions">Terms And Condition</a></li>
                            </ul>
                        </div>

                        <div className="footer__widget-3">
                            <h2 className="footer__widget-title">Contact Us</h2>
                            <ul className="footer__contact">
                                <li><a href="mailto:info@office102LLC.com">info@office102LLC.com</a></li>
                            </ul>
                            <h2 className="footer__widget-title">Address</h2>
                            <ul className="footer__contact">
                                <li>1600 VILLAGE DR APT 1227 EULESS, TX 76039</li>
                            </ul>
                            <h2 className="footer__widget-title">Phone</h2>
                            <ul className="footer__contact">

                                <li><a href="tel:+1(571)516-6723">+1(571)516-6723</a></li>
                            </ul>
                        </div>

                        <div className="footer__widget-4">
                            <h2 className="project-title">Have a project in your mind?</h2>
                            <div className="btn_wrapper">
                                <a href="/contact-us" className="wc-btn-pink btn-hover btn-item"><span></span>
                                    contact us <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                            <h4 className="contact-day">Saturday - Thursday</h4>
                        </div>



                        <div className="footer__copyright">
                            <p>©2022 - 2025 | All Rights Reserved
                            </p>
                        </div>

                        <div className="footer__subscribe">
                            <form action="mail.php" method="POST">
                                <input type="email" name="email" placeholder="Enter your email" />
                                <button type="submit" className="subs-btn"><i className="fa-solid fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
{/**/}</>); }