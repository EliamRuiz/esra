import { useEffect, useState } from 'react'
import Hello from './components/Hello'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Timeline from "./components/Timeline"
import expRaw from "../src/experiences.json"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(expRaw)
    console.log(data)
  }, [])

  return (

    <div className='bg-slate-300'>
      <Navbar />

      <div className='flex justify-center items-center my-8'>
        <div className="flex bg-white p-6 shadow-lg rounded-xl w-10/12 content-center ">
            <div>
              <img class="h-auto max-w-xl shadow-xl rounded-xl " src="./fakeEliam.jpeg" alt="Eliam's picture"/>
            </div>
            <div className="flex-col overflow-hidden m-20 p-8">
                <h1 class="mb-2 text-2xl font-bold text-gray-600">Eliam Ruiz Agosto</h1>
                <p class="font-normal text-gray-700 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam molestias qui tempore non maiores atque. Est commodi beatae voluptate nam voluptatem veniam necessitatibus cum repudiandae expedita earum, sint eaque.
                Ea adipisci rerum libero, rem mollitia a quo qui voluptate odit magni, laboriosam quibusdam fugit illum sunt quas sapiente maiores corrupti nihil dolore dicta, repudiandae possimus. Eum voluptatum doloribus nihil.
                Eligendi molestiae nulla commodi sapiente voluptatem, quibusdam cupiditate. Distinctio excepturi, dolor cumque voluptas eum inventore optio et harum velit odit consectetur error, reprehenderit quae unde incidunt cupiditate nesciunt corrupti porro.
                Culpa doloribus ipsum suscipit nam perspiciatis praesentium numquam! Ipsa laudantium velit exercitationem nam, aspernatur assumenda quis ex, minus, repellendus aut commodi eos! Architecto veniam exercitationem atque adipisci officiis earum inventore?</p>
            </div>
          </div>
        </div>

        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700"/>

        <div className="px-10 py-20">
          <h2 className="mb-10 text-3xl font-bold text-gray-700">Carrer Timeline</h2>
            <ol class="relative border-s border-gray-200 dark:border-gray-700">  
                {data.map((exp, index) => (
                  <Timeline exp={exp}/>
                ))}
            </ol>
         </div>

      <Footer />
    </div>

  );
}

export default App
