import React from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="bg-[#1B4332] text-white">
            {/* Main Footer Content */}
            <div className="container_qurban py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

                    {/* Column 1: Brand & Bio */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold tracking-wide text-white font-serif">
                            QurbaniHat
                        </h2>
                        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
                            Ethical livestock sourcing for a blessed season. Connect with verified farmers directly.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#fe9e72] font-inter font-semibold text-lg tracking-wide uppercase text-sm">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm font-medium text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/animals" className="text-[#fe9e72] font-bold transition-colors duration-200">
                                    All Animals
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="hover:text-white transition-colors duration-200">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Information */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#fe9e72] font-inter font-semibold text-lg tracking-wide uppercase text-sm">
                            Information
                        </h3>
                        <ul className="flex flex-col gap-2.5 text-sm font-medium text-gray-300">
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/standards" className="hover:text-white transition-colors duration-200">
                                    Health Standards
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors duration-200">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[#fe9e72] font-inter font-semibold text-lg tracking-wide uppercase text-sm">
                            Contact
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-[220px]">
                            Dhaka North Office, <br />
                            Banani, Block E, Road 12
                        </p>

                        {/* Inline Icon Rows matching your style */}
                        <div className="flex items-center gap-4 mt-2 text-gray-300">
                            <Link href="/support" className="hover:text-[#fe9e72] transition-colors" title="Support/FAQ">
                                <IoIosHelpCircleOutline className="w-5 h-5 stroke-[1.75]" />                                
                            </Link>
                            <a href="mailto:info@qurbanihat.com" className="hover:text-[#fe9e72] transition-colors" title="Email Us">
                                <FaRegEnvelope className="w-5 h-5 stroke-[1.75]" />
                            </a>
                            <a href="tel:+880123456789" className="hover:text-[#fe9e72] transition-colors" title="Call Us">
                                <IoIosCall className="w-5 h-5 stroke-[1.75]" /> 
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-white/10 py-6">
                <div className="container_qurban text-center text-xs md:text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} QurbaniHat. Ethical livestock sourcing for a blessed season.
                </div>
            </div>
        </footer>
    );
}