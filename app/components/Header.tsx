"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col px-[3vw] py-[2.5vh] bg-white border-b-[15px] border-[#446677] text-left max-[1000px]:items-center">
            <div className="w-fit ml-[-1vw]">
                <Link href="/" passHref>
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

