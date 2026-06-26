import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

const HeroSection = () => {
    return (
        <section className="bg-[#fcfbf9] min-h-[70vh] flex items-center container_qurban section-space-sm">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* LEFT CONTENT BLOCK (Takes 6/12 cols on large screens) */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#964B24] block mb-3 animate__animated animate__fadeInUp">
                            Premium Livestock Marketplace
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#062419] leading-[1.15] animate__animated animate__fadeInUp">
                            Source Your Qurbani <br />
                            with <span className="text-[#964B24] italic font-normal font-serif">Trust & Care</span>
                        </h1>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed animate__animated animate__fadeInUp">
                        Ethically raised, healthy livestock delivered to your doorstep for a blessed season. 
                        We bridge the gap between traditional values and digital convenience.
                    </p>

                    {/* CTA Button Group */}
                    <div className="flex flex-wrap items-center gap-4 pt-2 animate__animated animate__fadeInUp">
                        <Link 
                            href="/animal" 
                            className="btn bg-[#062419] hover:bg-[#0b3b29] text-white border-none px-8 h-14 min-h-[3.5rem] rounded-lg text-base font-medium capitalize flex items-center gap-2 group transition-all"
                        >
                            Browse Animals 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                        
                        <Link 
                            href="/about" 
                            className="btn btn-outline border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-[#062419] px-8 h-14 min-h-[3.5rem] rounded-lg text-base font-medium capitalize transition-all"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE BLOCK (Takes 6/12 cols on large screens) */}
                <div className="lg:col-span-6 w-full flex justify-center">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-w-[640px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200 animate__animated animate__fadeInUp">
                        <Image
                            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1200" // Replace with your production asset path
                            alt="Premium Qurbani Bull Livestock"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;