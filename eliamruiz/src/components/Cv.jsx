const Cv = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-between bg-gray-100 p-6">
      {/* Left side - Button */}
      <div className="flex flex-col items-center w-1/2">
        <a
          href="./CV_SWE.pdf"
          download="EliamRuiz_CV.pdf"
          className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
        >
          📄 Download CV
        </a>
      </div>

      {/* Right side - Text */}
      <div className="flex flex-col items-center w-1/2">
        <p className="text-lg font-semibold text-gray-700">Game Loading</p>
      </div>
    </div>
  );
};

export default Cv;
