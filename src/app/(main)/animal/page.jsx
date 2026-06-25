'use client'
import React, { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

import Animal from '@/components/shared/feature_animal/Animal';
import { animalJson } from '@/lib/data';

const AnimalSection = () => {
    const count = 6;

    const [visibleCount, setVisibleCount] = useState(count);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await animalJson();
            setAnimals(data);
        };
        fetchData();
    }, []);

    const handleMoreAnimals = () => {
        setVisibleCount((prevCount) => prevCount + count);
    }

    return (
        <div className="container_qurban section-space pt-12 mb-12">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[36px] md:text-[48px] font-bold heading-color">Our Marketplace</h2>
                    <p className="text-body-md text-on-surface-variant">Browse our ethically sourced livestock, verified for health and quality to ensure a blessed Qurbani experience.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
                {animals.slice(0, visibleCount).map(animal => (
                    <Animal key={animal.id} animal={animal}></Animal>
                ))}
            </div>
            {visibleCount < animals.length && (
                <div className='flex justify-center mt-10'>
                    <button className='btn btn-accent bg-transparent border-2 border-primary text-primary px-7 text-[16px] shadow-none flex gap-2' onClick={handleMoreAnimals}>Load More Animals <FaChevronDown /></button>
                </div>
            )}
        </div>
    );
};

export default AnimalSection;