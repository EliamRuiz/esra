import { useEffect, useState } from "react";
import Timeline from "./components/Timeline";
import Summary from "./components/Summary";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(expRaw);
  // }, []);

  useEffect(() => {
    fetch("/experiences.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-slate-300 min-h-screen">
      <Summary />
      <hr className="w-24 md:w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 my-8" />
      <div className="px-4 md:px-10 py-10 md:py-20">
        <h2 className="mb-6 md:mb-10 text-2xl md:text-3xl font-bold text-gray-700 flex justify-center">
          Career Timeline
        </h2>
        <ol className="relative">
          {data.map((exp, index) => (
            <Timeline exp={exp} key={index} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
