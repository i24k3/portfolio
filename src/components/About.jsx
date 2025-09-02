"use strict"

export default function About({ data }) {
    const { title: heading, desc_1, desc_2 } = data;

    return (
        <section className="bg-transparent text-gray-900 py-33">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 underline">
                    {heading}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                    {desc_1}
                </p>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed italic">
                    {desc_2}
                </p>
            </div>
        </section>
    );
}

