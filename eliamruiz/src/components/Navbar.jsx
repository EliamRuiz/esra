import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility
  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-800 px-3 py-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <div className="flex items-center">
            <img
              src="/logoE.jpeg"
              alt="E Icon"
              className="h-6 w-6 object-cover rounded-full"
            />
            <h1 className="text-white text-center px-3 py-2 rounded-md hover:text-teal-600">
              Eliam Ruiz Agosto
            </h1>
          </div>
        </Link>

        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <button
          className="text-white sm:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} {/* Changes icon based on isOpen state */}
        </button>

        {/* Desktop Menu (Visible on Large Screens) */}
        <div className="hidden sm:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-teal-600 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-teal-600 px-3 py-2 rounded-md"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Shows Only When isOpen is True) */}
      {isOpen && (
        <div className="sm:hidden mt-2 space-y-2">
          <Link
            to="/"
            className="block text-white text-center bg-gray-700 px-3 py-2 rounded-md"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/cv"
            className="block text-white text-center bg-gray-700 px-3 py-2 rounded-md"
            onClick={closeMenu}
          >
            CV
          </Link>
          <Link
            to="/contact"
            className="block text-white text-center bg-gray-700 px-3 py-2 rounded-md"
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
