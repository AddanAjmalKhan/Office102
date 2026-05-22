export default function Header() { return (<>{/**/}
    <header className="header__area-2">
        <div className="header__inner-2">
            <div className="header__logo-2">
                <a href="/"><img src="assets/imgs/logo.png" alt="Site Logo" /></a>
            </div>
            <div className="header__nav-2">
                <ul className="main-menu menu-anim">
                    <li className="has-megamenu"><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li className="has-megamenu"><a href="/our-services">Our Services</a></li>
                    <li><a href="/our-portfolio">Our Portfolio</a></li>
                    <li><a href="/pricing">Pricing</a></li>

                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            <div className="header__nav-icon-2">
                <button className="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png"
                        alt="Menubar Icon" /></button>
            </div>
        </div>
    </header>
    {/**/}</>); }