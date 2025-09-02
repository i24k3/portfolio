"use client";

export const Experience = ({ data }) => {
  const { title: heading, desc, details: cardsData } = data;

  return (
    <section className="bg-transparent text-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {heading}
        </h1>

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

  return (
    <div className="border-l-4 border-gray-900 pl-6 relative">
      <div className="absolute -left-2 top-1 w-4 h-4 bg-gray-900 rounded-full shadow-md"></div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-2 italic">{date}</p>
      <p className="text-md text-gray-800 font-medium mb-1">{summary}</p>
      <p className="text-md text-gray-600 leading-relaxed">{details}</p>
    </div>
  );
};
/*
"use strict";
    "experience": {
    "title": "Experience && Qualification",
    "desc": "Experience, huh? I’ve always found that word a bit weird. Most of the time, it’s just a list of things people did. But for me, experience is more about the unique moments trying things different to know about the unknown. Maybe we don't collect experiences, its the experience that choose us.",
    "details": [
        {
            "title": "B.Sc in Information Technology",
            "date": "2022 – June 2025",
            "summary": "Studied theory. Learned more by doing.",
            "details": "I did my B.Sc IT from Islamia College of Science and Commerce. It covered the usual stuff — data structures, programming, OS, networking, the works. And yeah, it sure gave me a foundation to work with, but the real learning happened elsewhere. YouTube tutorials - those 8 hour long videos, and just messing around. Still, it wasn't enough as when i met a senior dev. I was able to visualise the knowledge gap."
        },

export const Experience = ({data}) => {
    const {tite:heading, desc, details:cardsData} = data; 
    return (
        <section className="bg-transparent text-gray-900 py-20">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {heading}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                    {desc}
                </p>


                {
                    cardsData.map((card) => {<ExpCard data={card}/>})
                }
            </div>
        </section>
    );
}

const ExpCard = ({data}) => {
    const  {title, date, summary, details} = data;
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p><code>{date}</code></p>

            </div>
        </>
    );
}

*/
