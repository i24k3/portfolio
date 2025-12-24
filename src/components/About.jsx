"use strict";

import { useState } from "react";

export default function About({ data }) {
    const { title: heading, desc_1, desc_2 } = data;
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <section className="bg-transparent text-gray-900 py-33 cursor-pointer" 
                    onClick={toggleExpand}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
        >
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 underline">
                    {heading}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                    {desc_1}
                </p>

                <div 
                    className="cursor-pointer select-none" >
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expanded ? "max-h-[1000px] opacity-100 mt-1" : "max-h-0 opacity-0"
                    }`}>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed italic">
                            {desc_2}
                        </p>
                    </div>

                    <div className="mt-2 text-sm font-medium text-emerald-500">
                        {expanded ? "Read less" : "Read more"}
                        {hovered && (expanded ? " ↑" : " ↓")}
                    </div>
                </div>
            </div>
        </section>
    );
}

