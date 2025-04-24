"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[white] font-[Cinzel] text-black px-[2vw] py-[2vh] border-t-[5px] border-[#446677] text-center transition-colors duration-200 text-[clamp(12px,calc(10px+0.5vw),14px)]">
            <p>
                © {new Date().getFullYear()} All Rights Reserved by Yunzhe Bi.{" "}
                <Link
                    href="/"
                    className="text-[#36824b] hover:text-[#22b034] transition-colors underline"
                >
                    Credits
                </Link>
            </p>
        </footer>
    );
}
