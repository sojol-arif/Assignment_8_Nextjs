import React from 'react';
import { FaTag, FaWeightHanging, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { animalSingleJsonDetails } from '@/lib/data';
import AnimalDetailsForm from '@/components/AnimalDetailsForm';

export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params

    // fetch data
    const animal = await animalSingleJsonDetails(id);

    return {
        title: animal.title,
        descripiton: animal.details
    }
}

const AnimalDetailSPage = async ({ params }) => {
    const { id } = await params;
    const animal = await animalSingleJsonDetails(id);
    console.log(animal);
    const formattedPrice = new Intl.NumberFormat('en-IN').format(animal.price);

    return (
        <div className="container_qurban section-space">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-base-100">

                {/* LEFT SIDE: Image Section (Takes 7/12 columns on large screens) */}
                <div className="relative lg:col-span-7 w-full h-[350px] sm:h-[450px] lg:h-[550px] shadow-[0px_4px_20px_rgba(27,67,50,0.06)] rounded-xl border border-[#e5e5e5]">
                    {/* Fallback image if postimg fails or isn't configured in next.config.js */}
                    <img
                        src={animal.image || "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1000"}
                        alt={animal.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-xl"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="badge bg-[#f3d9b4] text-[#714b23] border-none font-semibold px-3 py-3 gap-1  text-xs">
                            ★ Verified
                        </span>
                        <span className="badge bg-[#d1fae5] text-[#065f46] border-none font-semibold px-3 py-3  text-xs">
                            In-Stock
                        </span>
                    </div>

                    {/* Floating Price Box */}
                    <div className="absolute bottom-4 right-4 lg:right-8 bg-[#8b4f30] text-white p-4 px-8 rounded-xl shadow-lg min-w-[200px]">
                        <span className="text-xs tracking-wider uppercase opacity-80 block mb-1">Asking Price</span>
                        <span className="text-2xl md:text-3xl font-bold flex items-center gap-1">
                            ৳ {formattedPrice}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-6 lg:col-span-5'>
                    {/* RIGHT SIDE: Details Section (Takes 5/12 columns on large screens) */}
                    <div className="p-6 md:p-8 flex flex-col justify-between shadow-[0px_4px_20px_rgba(27,67,50,0.06)] rounded-xl border border-[#e5e5e5]">
                        <div>
                            {/* Title and ID */}
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-4xl font-bold heading-font">
                                    {animal.name}
                                </h1>
                                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                                    Listing ID: QH-2026-AN{animal.id}
                                </p>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {/* Breed */}
                                <div className="flex items-center gap-3 p-3 rounded-xl ">
                                    <div className="p-3 bg-[#eeeeee] rounded-xl text-[#8b4f30] ">
                                        <FaTag className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs  block">Breed</span>
                                        <span className="font-semibold text-sm">{animal.breed}</span>
                                    </div>
                                </div>

                                {/* Live Weight */}
                                <div className="flex items-center gap-3 p-3 rounded-xl ">
                                    <div className="p-3 bg-[#eeeeee] rounded-xl text-[#8b4f30] ">
                                        <FaWeightHanging className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs  block">Live Weight</span>
                                        <span className="font-semibold text-sm">{animal.weight} KG</span>
                                    </div>
                                </div>

                                {/* Age */}
                                <div className="flex items-center gap-3  p-3 rounded-xl ">
                                    <div className="p-3 bg-[#eeeeee] rounded-xl text-[#8b4f30] ">
                                        <FaCalendarAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs  block">Age</span>
                                        <span className="font-semibold text-sm">{animal.age} Years</span>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-3  p-3 rounded-xl ">
                                    <div className="p-3 bg-[#eeeeee] rounded-xl text-[#8b4f30] ">
                                        <FaMapMarkerAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs  block">Location</span>
                                        <span className="font-semibold text-sm">{animal.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="divider opacity-60"></div>

                            {/* Description */}
                            <div className="mt-6">
                                <span className="text-xs font-bold tracking-wider uppercase  block mb-3">
                                    Description
                                </span>
                                <p className="leading-relaxed">
                                    {animal.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-primary text-primary-content p-8 rounded-xl shadow-xl'>
                        <h2 className='font-bold text-[30px] mb-2'>Book This Animal</h2>
                        <AnimalDetailsForm></AnimalDetailsForm>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnimalDetailSPage;