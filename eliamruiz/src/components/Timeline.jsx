import {useIsVisible} from "../useIsVisible"
import { useRef } from 'react'

const Timeline = ( {exp} ) => {
const skills = exp.skills
const ref1 = useRef();
const isVisible1 = useIsVisible(ref1);
    return ( 
     
        <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} flex justify-center mb-10`}>
                <li className="mb-10 ms-4 shadow-lg rounded-xl w-10/12 content-center p-7 bg-white">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="mb-1 text-sm font-normal leading-none text-gray-900 ">{exp.name}</p>
                    <h3 className="text-lg font-semibold text-gray-700">{exp.job}</h3>
                    <p className="text-base font-normal text-gray-400 ">{exp.date}</p>
                    <span className="bg-teal-600 text-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{exp.class}</span>
                    <p className=" text-base font-normal text-gray-600 ">{exp.description}</p>
                    <h4 className="text-lg font-semibold text-gray-700 ">Skills:</h4>
                    {skills.map((skill, index) => (
                       <span key={index} className="bg-gray-600 text-blue-100 text-xs font-medium me-2 px-2.5 py-2 rounded">{skill}</span>
                     ))}
                </li>
         </div>
    )
}
export default Timeline;