import React from 'react';
import Image from 'next/image';
import { CiCalendar } from "react-icons/ci";
import { LuWeight } from "react-icons/lu";
import Link from 'next/link';

const Animal = ({ animal }) => {
    const { id, name, price, breed, type, age, category, weight, location, image } = animal;

    return (
        <Link className="card w-full max-w-sm bg-base-100 shadow-[0px_4px_20px_rgba(27,67,50,0.06)] rounded-[12px] overflow-hidden border border-[#e5e5e5] hover:translate-y-[-5px] hover:shadow-[0_5px_25px_rgba(27,67,50,0.15)] transition transition-transform ease-in-out" href={`/animal/${id}`}>
            {/* Image Container with Badges */}
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                />

                {/* Verified Badge (Top Left) */}
                <div className="absolute top-4 left-4 bg-[#063a24] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                    Verified
                </div>

                {/* Price Badge (Bottom Right) */}
                <div className="absolute bottom-4 right-4 bg-[#93441a] text-white font-bold text-[18px] px-4 py-2 rounded-2xl flex items-center gap-1 shadow-md">
                    <span>৳</span>
                    <span>{price}</span>
                </div>
            </div>

            {/* Card Content Body */}
            <div className="card-body p-6 bg-white">
                {/* Title */}
                <h2 className="text-[20px] font-serif font-semibold text-[#023020] mb-2">
                    {name}
                </h2>

                {/* Specifications (Weight and Age) */}
                <div className="flex items-center gap-6 text-gray-600 font-medium">
                    {/* Weight */}
                    <div className="flex items-center gap-1.5">
                        <CiCalendar/>
                        <span>{weight}kg</span>
                    </div>

                    {/* Age (Displaying as Years or converting to Months depending on data preference) */}
                    <div className="flex items-center gap-1.5">
                        <LuWeight/>
                        <span>{age * 12} Mo ({age} Yrs)</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Animal;