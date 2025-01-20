const Timeline = ( {exp} ) => {
const skills = exp.skills
    return ( 
     
        <div>
                <li class="mb-10 ms-4 ">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p class="mb-1 text-sm font-normal leading-none text-gray-900 ">{exp.name}</p>
                    <h3 class="text-lg font-semibold text-gray-700">{exp.job}</h3>
                    <p class="text-base font-normal text-gray-400 ">{exp.date}</p>
                    <span class="bg-teal-600 text-blue-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{exp.class}</span>
                    <p class=" text-base font-normal text-gray-600 ">{exp.description}</p>
                    <h4 class="text-lg font-semibold text-gray-700 ">Skills:</h4>
                    {skills.map((skill, index) => (
                       <span class="bg-gray-600 text-blue-100 text-xs font-medium me-2 px-2.5 py-2 rounded">{skill}</span>
                     ))}
                </li>
                <hr class="border-8 mb-10"></hr>
         </div>
                
    )
}

export default Timeline;