import { Code, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoFolderOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { FaToolbox } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0F172A] fixed top-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Code size={18} className="text-white" />
          </div>

          <h1 className="text-white font-semibold text-base sm:text-lg hover:text-blue-400 transition">
            Dharmendra Mahilange
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">
            <a
              href="#home"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
              <div className="flex items-center gap-1">
                <FiHome size={18} />
                <span>Home</span>
              </div>
            </a>

            <a
              href="#about"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
              <div className="flex items-center gap-1">
                <IoPersonOutline size={18} />
                <span>About</span>
              </div>
            </a>

            <a
              href="#experience"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
              <div className="flex items-center gap-1">
                <MdWorkOutline size={18} />
                <span>Experience</span>
              </div>
            </a>

            <a
              href="#skills"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
             <div className="flex items-center gap-1">
                <FaLaptopCode size={18} />
                <span>Skills</span>
              </div>
            </a>

            <a
              href="#projects"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
              <div className="flex items-center gap-1">
                <IoFolderOutline size={18} />
                <span>Projects</span>
              </div>
            </a>

            <a
              href="#education"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
             <div className="flex items-center gap-1">
                <GiGraduateCap size={18} />
                <span>Education</span>
              </div>
            </a>

            <a
              href="#contact"
              className="relative hover:text-white transition
after:content-[''] after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-500
after:transition-all after:duration-300
hover:after:w-full"
            >
              <div className="flex items-center gap-1">
                <MdOutlineEmail size={18} />
                <span>Contact</span>
              </div>
            </a>
          </div>

          {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg transition shadow-md shadow-blue-600/40"
          >
            Hire Me
          </motion.a> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111C2E] px-5 pb-6 pt-4 text-gray-300 
               flex flex-col items-center gap-4"
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            About
          </a>

          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Experience
          </a>

          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#education"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Education
          </a>

          <a
            href="#resume"
            onClick={() => setIsOpen(false)}
            className="relative inline-block hover:text-white transition
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-blue-500
      after:transition-all after:duration-300
      hover:after:w-full"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
