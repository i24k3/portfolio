"use strict";

export const HeroSection = ({data}) => {
    const {headline, subHeadline} = data;
    return (
        <section className="bg-white text-gray-900 py-44 border-amber-600">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                    {headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    {subHeadline}
                </p>
            </div>
        </section>
    );
}
