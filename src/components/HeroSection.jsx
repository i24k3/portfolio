"use strict";

export const HeroSection = ({data}) => {
    const {headline, subHeadline, subHeadline1} = data;
    return (
        <section className="bg-transparent text-gray-900 py-66">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                    {headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    {subHeadline}
                </p>
                <p className="mt-5 text-xl md:text-xl text-gray-500 font-bold px-1 box-decoration-clone">
                    {subHeadline1}
                </p>
            </div>
            <div></div>
        </section>
    );
}
