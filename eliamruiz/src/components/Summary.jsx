import React from "react";
import { useEffect, useState } from "react";

export default function Summary() {
  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((res) => res.json())
      .then((data) => setLanguages(data.languages));
  }, []);

  useEffect(() => {
    fetch("/frameworks.json")
      .then((res) => res.json())
      .then((data) => setFrameworks(data.frameworks));
  }, []);

  return (
    <div>
      <div className="flex min-h-screen justify-center items-center p-6 pt-20">
        <div className="relative z-10 flex flex-col md:flex-col lg:flex-row bg-white p-6 shadow-lg rounded-xl sm:w-6/12 md:w-10/12 lg:max-w-[2000px] content-center">
          <div className="flex justify-center">
            <img
              className="h-40 w-40 md:h-60 md:w-60 lg:h-auto lg:w-auto object-cover shadow-xl rounded-xl"
              src="./eliamSuitSelfie.jpeg"
              alt="Eliam's picture"
            />
          </div>
          <div className="overflow-hidden m-5 text-center lg:text-left">
            <h1 className="mb-2 text-xl md:text-2xl font-bold text-gray-600">
              Eliam Ruiz Agosto
            </h1>
            <p className="text-sm font-normal text-gray-700 pb-5 border-b-4 border-teal-600 border-opacity-20 text-justify">
              I am a Software Engineer with experience in PHP, Laravel,
              JavaScript, Python, and automated testing. I have worked in
              full-stack development, API integrations, and QA automation. I
              have designed, tested, and maintained software systems while
              leveraging Jest, Puppeteer, Docker, and CI/CD pipelines for
              efficient development cycles. Passionate about problem-solving,
              software optimization, and delivering high-quality solutions.
              Bilingual in English and Spanish.
            </p>
            <h2 className="mt-5 text-xl md:text-2xl font-bold text-gray-600 pb-3">
              Progrmaming Laguanges I've used
            </h2>
            <div className="border-b-4 border-teal-600 border-opacity-20 pb-5">
              {languages.map((laguage, index) => (
                <span className="inline-flex items-center justify-center w-15 h-15 me-2 rounded-lg m-3">
                  <img
                    src={"/" + laguage}
                    alt="Icon"
                    className="w-12 h-12 rounded-lg"
                  />
                </span>
              ))}
            </div>
            <h3 className="mt-5 text-xl md:text-2xl font-bold text-gray-600">
              Framewoks & Tools I've used
            </h3>
            <div className="border-b-4 border-teal-600 border-opacity-20 pb-5">
              {frameworks.map((framework, index) => (
                <span className="inline-flex items-center justify-center w-15 h-15 me-2 rounded-lg m-3">
                  <img
                    src={"/" + framework}
                    alt="Icon"
                    className="w-12 h-12 rounded-lg"
                  />
                </span>
              ))}
            </div>
            <div className="flex mt-6 justify-center md:justify-center lg:justify-start">
              <a
                href="./CV_SWE.pdf"
                download="EliamRuiz_CV.pdf"
                className="px-4 py-2 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
