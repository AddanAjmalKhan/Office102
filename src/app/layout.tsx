import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Offcanvas from "@/components/Offcanvas";

import Modals from "@/components/Modals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Office 101 LLC",
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
      </head>
      <body suppressHydrationWarning>
        <div className="cursor1" suppressHydrationWarning></div>
        <div className="cursor2" suppressHydrationWarning></div>
        <div className="cursor" id="client_cursor" suppressHydrationWarning>Contact</div>

        <div className="preloader" suppressHydrationWarning>
            <div className="loading">
                <svg className="loader-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="40" stroke="#ffffff" strokeWidth="8" fill="none" strokeDasharray="160" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                    </circle>
                </svg>
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
