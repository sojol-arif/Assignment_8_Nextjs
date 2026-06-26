import React from 'react';
import Image from 'next/image';

const HeritageBreeds = () => {
    const breeds = [
        {
            id: 1,
            name: "Sahiwal",
            tagline: "Native Indian Origin",
            description: "Renowned for their exceptional heat tolerance and docile nature, Sahiwals are the gold standard for quality.",
            image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=500", // Replace with actual asset path
        },
        {
            id: 2,
            name: "Brahman",
            tagline: "Resilient & Majestic",
            description: "Characterized by their intelligence and resilience, these animals command presence in any sacrificial selection.",
            image: "https://images.unsplash.com/photo-1588466585717-f8041aec7875?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
, // Replace with actual asset path
        },
        {
            id: 3,
            name: "Black Bengal",
            tagline: "The Bengal Pride",
            description: "The pride of Bangladesh, known for premium meat quality and supreme adaptability to local climates.",
            image: "https://images.unsplash.com/photo-1598715685267-0f45367d8071?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual asset path
        }
    ];

    return (
        <section className="bg-[#fcfbf9] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#062419]">
                        Distinguished Heritage Breeds
                    </h2>
                </div>

                {/* Breeds Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
                    {breeds.map((breed) => (
                        <div key={breed.id} className="flex flex-col items-center text-center space-y-5">
                            
                            {/* Circular Avatar Container with Border Accent */}
                            <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-b from-[#e5e0da] to-transparent shadow-sm">
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                                    <Image
                                        src={breed.image}
                                        alt={breed.name}
                                        fill
                                        sizes="(max-width: 768px) 192px, 208px"
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-2 px-2">
                                <h3 className="text-2xl font-serif font-bold text-[#062419]">
                                    {breed.name}
                                </h3>
                                <span className="text-xs font-bold tracking-widest uppercase text-[#964B24] block">
                                    {breed.tagline}
                                </span>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto pt-1">
                                    {breed.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeritageBreeds;