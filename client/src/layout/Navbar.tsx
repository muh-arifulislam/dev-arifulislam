import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { NavLink } from "react-router";
import { MenuButton } from "../components/button/MenuButton";

import logo from "../assets/icons/logo.svg";
import logoDark from "../assets/icons/logo-dark.svg";
import ThemeToggleButton from "../components/button/ThemeToggleButton";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  return (
    <nav className="w-full h-full">
      <div className="container mx-auto max-w-7xl h-full flex items-center border-b border-slate-200 dark:border-slate-200/30  backdrop-blur-sm px-2">
        <div className="flex items-center justify-between flex-1 relative">
          <div className="flex items-center gap-2">
            <img
              className="w-6"
              src={theme === "light" ? logo : logoDark}
              alt=""
            />
            <a
              href="/"
              className="text-lg font-semibold leading-none border-b-2 border-transparent hover:border-slate-900 text-slate-900 dark:text-gray-50"
            >
              arif.dev
            </a>
          </div>
          {/* Toggle Button  */}
          <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] block md:hidden">
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                isOpen ? "bg-slate-200" : ""
              }`}
            >
              <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </button>
          </div>
          {/* Desktop  */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-4">
              <li>
                <NavLink
                  to={"/projects"}
                  className="font-semibold px-3 text-slate-900 dark:text-gray-50 py-2 hover:bg-slate-200 rounded-md"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className="font-semibold text-slate-900 dark:text-gray-50 px-3 py-2 hover:bg-slate-200 rounded-md"
                >
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/me"}
                  className="font-semibold text-slate-900 dark:text-gray-50 px-3 py-2 hover:bg-slate-200 rounded-md"
                >
                  About Me
                </NavLink>
              </li>
            </ul>
            <div className="flex gap-[1px]">
              <ThemeToggleButton />
              <a href="#" className="p-2">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="p-2">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div
            className={`block md:hidden fixed top-14 left-0 w-full h-screen bg-white flex items-center justify-center transition ease duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="">
              <ul className="text-center space-y-4">
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    to={"/projects"}
                    className="font-semibold text-slate-700 px-3 py-2"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    to={"/blogs"}
                    className="font-semibold text-slate-700 px-3 py-2"
                  >
                    Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    to={"/me"}
                    className="font-semibold text-slate-700 px-3 py-2"
                  >
                    About Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
