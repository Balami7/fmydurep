import Link from "next/link"; // Fixed: Link must come from next/link
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Header = () => {
    return (
        // Fixed: Changed <Header> to lowercase <header> to prevent infinite recursion/crashing
        <header className="w-full">
            {/* Top Green Bar */}
            <div className="flex bg-[#277B12] w-full h-12 justify-between items-center px-4 sm:px-10">
                {/* Fixed: Replaced button with Link to avoid needing useRouter or 'use client' */}
                <Link 
                    href="/" 
                    className="text-white text-xs sm:text-sm font-medium border border-white px-3 py-1 rounded hover:bg-white hover:text-[#277B12] transition-colors"
                >
                    Back to FMYD
                </Link>
                
                <div className="flex flex-row items-center gap-6">
                    {/* Fixed: Removed mt-4 so icons center vertically in the 48px bar */}
                    <Link href="#"><FaFacebook size={18} color="white" /></Link>
                    <Link href="#"><FaInstagram size={18} color="white" /></Link>
                    <Link href="#"><FaTelegram size={18} color="white" /></Link>
                </div>
            </div>

            {/* Main White Header */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-6 bg-white shadow-sm gap-4" border-b-[1px] border-green-500>
                <div className="flex items-center">
                    <Image 
                        className="mr-2" 
                        src="/fmyd_logo.png" 
                        alt="logo" 
                        width={80} 
                        height={80} 
                        priority 
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <h1 className="text-black text-xl sm:text-2xl font-bold">Yopi Tracker</h1>
                    <p className="text-black text-xs sm:text-sm italic font-medium">a one stop shop for youth activities.</p>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
                    <Link className="text-black text-sm sm:text-base hover:text-[#277B12] font-medium" href="/">Home</Link>
                    <Link className="text-black text-sm sm:text-base hover:text-[#277B12] font-medium" href="/about">About</Link>
                    <Link className="text-black text-sm sm:text-base hover:text-[#277B12] font-medium" href="https://urep-ng.vercel.app/urep">UREP</Link>
                    <Link className="text-black text-sm sm:text-base hover:text-[#277B12] font-medium" href="/endorser">Endorser</Link>
                    <Link className="text-black text-sm sm:text-base hover:text-[#277B12] font-medium" href="https://urep-ng.vercel.app/databank">Youth Databank</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
