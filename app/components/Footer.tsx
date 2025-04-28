"use client";

/*
 * Footer.tsx
 * Footer component for the eBird app
 * Displays current year, copyright notice, and a dummy link to credit page.
 * Responsible: Yunzhe Bi
 */

import Link from "next/link";

export default function Footer() {
    return (
        // Using tailwind because hydration error with styled-components
        <footer className="bg-[white] font-[Cinzel] text-black px-[2vw] py-[2vh] border-t-[5px] border-[#446677] text-center transition-colors duration-500 text-[clamp(12px,calc(10px+0.5vw),14px)]"> {/* clamp(min, preferred, max) */}
            <p>
                {/* Footer that includes the current year by creating a new date obj and pulling the current year */}
                © {new Date().getFullYear()} All Rights Reserved by Yunzhe Bi.{" "}
                <Link
                    // Dummy link
                    href="/"
                    className="text-[#36824b] hover:text-[#22b034] transition-colors underline"
                >
                    Credits
                </Link>
            </p>
        </footer>
    );
}
