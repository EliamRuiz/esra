import React from 'react';

export default function Summary() {
  return (
    <div>
      <div className="flex h-auto md:h-lvh justify-center items-center p-6">
        <div className="flex flex-col md:flex-col lg:flex-row bg-white p-6 shadow-lg rounded-xl w-full sm:6/12 md:w-8/12 lg:w-10/12 content-center">
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
            <p className="text-sm font-normal text-gray-700">
              I am a Software Engineer with experience in PHP, Laravel,
              JavaScript, Python, and automated testing. I have worked in
              full-stack development, API integrations, and QA automation. I
              have designed, tested, and maintained software systems while
              leveraging Jest, Puppeteer, Docker, and CI/CD pipelines for
              efficient development cycles. Passionate about problem-solving,
              software optimization, and delivering high-quality solutions.
              Bilingual in English and Spanish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


