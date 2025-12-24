"use strict";

import { useState } from "react";

export const Experience = ({ data }) => {
    const { title: heading, desc, details: cardsData } = data;

    return (
        <section className="bg-transparent text-gray-900 py-33">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 underline">
                    {heading}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                    {desc}
                </p>

                <div className="space-y-12">
                    {cardsData.map((card, index) => (
                        <ExpCard key={index} data={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};



const ExpCard = ({ data }) => {
    const { title, date, summary, details } = data;
    const [expanded, setExpanded] = useState(false);
    const [cardHovered, setCardHovered] = useState(false);

    const toggleDetails = (e) => {
        e.stopPropagation(); 
        setExpanded((prev) => !prev);
    };

    return (
        <div 
            className={`border border-gray-400 rounded-lg p-6 shadow-sm transition-shadow duration-300 cursor-pointer group ${expanded ? "shadow-md" : "hover:shadow-md"}`}

            onClick={toggleDetails} 
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >


            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mb-2 italic">{date}</p>

            <p className="text-md text-gray-800 font-medium mb-1">{summary}</p>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
expanded ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0" }`} >

                <p className="text-md italic text-gray-600 leading-relaxed">{details}</p>
            </div>

            {/* Toggle Button */}
            <div className="mt-2 text-sm font-medium text-emerald-500 focus:outline-none " > 
                {expanded ? "Read less " : "Read more "}
                {cardHovered && expanded ? "↑" : cardHovered ? "↓" : "" }

            </div>
        </div>
    );
};

