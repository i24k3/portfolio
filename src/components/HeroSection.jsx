"use strict";

export const HeroSection = ({data}) => {
    const {headline, subHeadline, subHeadline1} = data;
    return (
        <section className="bg-transparent text-gray-900 py-66">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                    <span className="underline">
                    {headline}
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                {/* <p className="text-xl md:text-xl text-gray-600 leading-relaxed"> */}
                    {subHeadline}
                </p>

                <p className="text-lg md:text-xl text-gray-500 leading-relaxed italic">
                {/* <p className="mt-7 text-xl  md:text-xl text-gray-500 font-bold px-1 box-decoration-clone"> */}
                    {subHeadline1}
                </p>
            </div>
            <div></div>
        </section>
    );
}
