"use client";

export const Experience = ({ data }) => {
  const { title: heading, desc, details: cardsData } = data;

  return (
    <section className="bg-transparent text-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 underline">
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
      <div className="absolute -left-2.25 top-1 w-4 h-4 bg-gray-900 rounded-full shadow-md"></div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-2 italic">{date}</p>
      <p className="text-md text-gray-800 font-medium mb-1">{summary}</p>
      <p className="mt-3 text-md italic text-gray-600 leading-relaxed ">{details}</p>
    </div>
  );
};

