/*
 * layout.tsx
 * Layout component for the eBird app
 * Wraps all pages with header and footer, applying global styles
 * Responsible: Yunzhe Bi
 */

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}

