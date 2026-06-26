import React from 'react';
import { FaShieldHeart, FaHandHoldingHeart } from 'react-icons/fa6';
import { GiKitchenKnives } from 'react-icons/gi';

const TraditionInsights = () => {
    const insightCards = [
        {
            id: 1,
            title: "Selecting Healthy Livestock",
            description: "Look for clear eyes, moist muzzles, and active movement. Ensure the animal has no visible physical defects.",
            icon: <FaShieldHeart className="text-xl text-[#065f46]" />,
            iconBg: "bg-[#d1fae5]", // Mint green
        },
        {
            id: 2,
            title: "Preparation for Sacrifice",
            description: "Ensure the animal is well-fed and rested. Prepare sharp tools and a clean space to respect the animal's life.",
            icon: <GiKitchenKnives className="text-xl text-[#714b23]" />,
            iconBg: "bg-[#fce8e6]", // Soft terracotta/peach
        },
        {
            id: 3,
            title: "Sunnah of Distribution",
            description: "Divide the meat into three equal parts: for yourself, for friends and relatives, and for the needy.",
            icon: <FaHandHoldingHeart className="text-xl text-[#855117]" />,
            iconBg: "bg-[#fef3c7]", // Soft amber/yellow
        }
    ];

    return (
        <section className="bg-[#f3f3f3] container_qurban section-space">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#062419]">
                        Guided by Tradition
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        Educational insights to help you perform your sacrifice with the highest standards of Sunnah and care.
                    </p>
                </div>

                {/* Cards Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {insightCards.map((card) => (
                        <div 
                            key={card.id} 
                            className="bg-white border border-[#e5e5e5] p-6 sm:p-8 rounded-2xl shadow-[0px_4px_20px_rgba(27,67,50,0.03)] flex flex-col justify-start text-left space-y-4 hover:shadow-md transition-shadow"
                        >
                            {/* Icon Container */}
                            <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                                {card.icon}
                            </div>

                            {/* Card Content */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-serif font-bold text-[#062419]">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TraditionInsights;