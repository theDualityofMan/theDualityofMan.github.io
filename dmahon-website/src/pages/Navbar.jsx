import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/coops", label: "Coops" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <div className="bg-black/30 backdrop-blur-sm shadow-md w-full">
      <div className="flex items-center h-20 justify-between px-6">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 sm:w-40 cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 text-white text-lg font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex items-center space-x-1"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-2">
                &lt;
              </span>
              <span className="transition-transform duration-200 group-hover:scale-110">
                {link.label}
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-2">
                &gt;
              </span>
            </Link>
          ))}
        </div>

        <div> 
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col justify-between h-6">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/70 backdrop-blur-md text-white py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-lg font-medium hover:scale-105 transition-transform"
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
