import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Timeline from "./components/Timeline"
import expRaw from "../src/experiences.json"
import { NavLink, Link } from "react-router";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(expRaw)
  }, [])

  return (

    <div className='bg-slate-300'>

      <div className='flex h-lvh justify-center items-center'>
        <div className="flex bg-white p-6 shadow-lg rounded-xl w-10/12 content-center">
            <div>
              <img className="h-auto max-w-xl shadow-xl rounded-xl " src="./fakeEliam.jpeg" alt="Eliam's picture"/>
            </div>
            <div className="flex-col overflow-hidden m-20 p-8">
                <h1 className="mb-2 text-2xl font-bold text-gray-600">Eliam Ruiz Agosto</h1>
                <p className="font-normal text-gray-700 dark:text-gray-600">I am a Software Engineer with experience in PHP, Laravel, JavaScript, Python, and automated testing. I have worked in full-stack development, API integrations, 
                                                                            and QA automation, I have designed, tested, and maintained software systems while leveraging Jest, Puppeteer, Docker, and CI/CD pipelines for efficient development cycles. Passionate about problem-solving, software optimization, and delivering high-quality solutions. Bilingual in English and Spanish.</p>
            </div>
          </div>
        </div>

        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700"/>

        <div className="px-10 py-20">
          <h2 className="mb-10 text-3xl font-bold text-gray-700 flex justify-center">Carrer Timeline</h2>
              <ol className="relative border-s border-gray-200 dark:border-gray-700 ">  
                  {data.map((exp, index) => (
                    <Timeline exp={exp} key={index} />
                  ))}
              </ol>
         </div>
    </div>

  );
}

export default App
