"use client";

/*
 * Header.tsx
 * Header component for the eBird app
 * Displays the eBird logo at top left corner
 * Responsible: Yunzhe Bi
 */

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col px-[3vw] py-[2.5vh] bg-white border-b-[15px] border-[#446677] text-left max-[1000px]:items-center">
            <div className="w-fit ml-[-1vw]">
                {/* Clicking on the logo will bring user back to home screen */}
                <Link href="/" passHref>
                    {/* Displays the eBird logo */}
                    <Image
                        src="/Logo_ebird.png"
                        alt="eBird Logo"
                        width={160}
                        height={60}
                        priority
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </header>
    );
}

