import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Offcanvas from "@/components/Offcanvas";

import Modals from "@/components/Modals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Office 102 LLC",
  description: "Axtra HTML5 Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/imgs/logo/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/progressbar.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/master.css" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/assets/css/pricing.css" />
      </head>
      <body suppressHydrationWarning>
        <div className="cursor1" suppressHydrationWarning></div>
        <div className="cursor2" suppressHydrationWarning></div>
        <div className="cursor" id="client_cursor" suppressHydrationWarning>Contact</div>

        <div className="preloader" suppressHydrationWarning>
            {/* Hidden — keeps bundle.js happy (it calls .loading.addEventListener) */}
            <div className="loading" style={{ display: 'none' }}></div>
            {/* Visible animated lines loader */}
            <div className="lines-loader">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="loader-line" style={{ animationDelay: `${i * 0.08}s` }}></div>
                ))}
            </div>
        </div>

        <div className="has-smooth" id="has_smooth" suppressHydrationWarning></div>
        <button id="scroll_top" className="scroll-top" suppressHydrationWarning><i className="fa-solid fa-arrow-up"></i></button>

        <Header />
        <Offcanvas />

        <div className="native-scroll-wrapper" suppressHydrationWarning>
            <div className="native-scroll-content" suppressHydrationWarning>
                <main>{children}</main>
                <Footer />

            </div>
        </div>

        <Modals />

        <Script src="/assets/js/bundle.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
