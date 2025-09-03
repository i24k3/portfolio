import { useState } from "react";

export default function Projects({ data }) {
    const { title, desc, details } = data;

    return (
        <section className="bg-transparent text-gray-900 py-33 ">
            <div className="max-w-3xl mx-auto px-6 text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 underline">
                    {title}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                    {desc}
                </p>

                <div className="space-y-12">
                    {details.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ProjectCard = ({ data }) => {
  const { title, date, summary, details, github, websiteUrl } = data;
  const [expanded, setExpanded] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  const handleToggle = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className={`border border-gray-400 rounded-lg p-6 shadow-sm transition-shadow duration-300 cursor-pointer group 
        ${expanded ? "shadow-md" : "hover:shadow-md"}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-800 italic underline">{date}</p>
        </div>

        <p className="text-md text-gray-800 font-medium mt-2">{summary}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
            expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-md italic text-gray-600 leading-relaxed">{details}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-blue-600 underline">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
                onClick={(e) => e.stopPropagation()} // prevent card toggle on link click
              >
                GitHub
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
                onClick={(e) => e.stopPropagation()}
              >
                Live Site
              </a>
            )}
          </div>

          <span className="text-sm text-emerald-500 ">
            {cardHovered && expanded ? "↑ " : cardHovered ? "↓ " : "" }
            {/* {expanded ? "↑" : "↓"} */}
            {expanded ? "Read less" : "Read more"}
          </span>
        </div>
      </div>
    </div>
  );
};

