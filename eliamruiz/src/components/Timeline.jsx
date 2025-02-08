import { useIsVisible } from "../useIsVisible";
import { useRef } from "react";

const Timeline = ({ exp }) => {
  const skills = exp.skills;
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} flex justify-center mb-10 px-4 md:px-0`}>
      <li className="mb-10 shadow-lg rounded-xl w-full sm:w-6/12 md:w-8/12 lg:w-10/12 content-center p-5 md:p-7 bg-white">
            <p className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-900">{exp.name}</p>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">{exp.job}</h3>
            <p className="text-sm sm:text-base font-normal text-gray-400">{exp.date}</p>
            <span className="bg-teal-600 text-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{exp.class}</span>
            <p className="text-sm sm:text-base font-normal text-gray-600 text-justify">{exp.description}</p>
            <h4 className="text-base sm:text-lg font-semibold text-gray-700">Skills:</h4>
            <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="bg-gray-600 text-blue-100 text-xs font-medium px-3 py-1 rounded" >{skill}</span>
            ))}
            </div>
      </li>
    </div>
  );
};

export default Timeline;
