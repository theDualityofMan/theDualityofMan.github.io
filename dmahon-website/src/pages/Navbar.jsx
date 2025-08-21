import { Link } from "react-router-dom";
import logo from '../assets/logo.png';



export default function Navbar() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/coops", label: "Coops" },
    { href: "/projects", label: "Projects" }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-sm shadow-md w-full">
      <div className="flex items-center h-20 justify-between px-8">
        
        {/* Left - Logo */}
        <div className="flex items-center">
            <Link to="/">
                <img src={logo} alt="Logo" className="w-40 cursor-pointer" />
            </Link>
        </div>

        {/* Center - Links */}
        <div className="flex gap-20 text-white text-xl font-semibold">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="group flex items-center space-x-1">
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

        {/* Right - Empty (for symmetry) */}
        <div className="w-40"></div>
      </div>
    </div>
  );
}
