import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DevStackLogoLight from "../assets/LogoLight.png";
import DevStackLogoBlue from "../assets/LogoDark.png";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineAppstoreAdd,
  AiOutlineMenu,
} from "react-icons/ai";



export default function Nav({ toggleMode }) {

    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const toggleTheme = () => {
      toggleMode();
    };

    const toggleNav = () => {
      setShowNav(!showNav);
    };
    
    const navAndToggle = (url) => {
      navigate(url)
      toggleNav()

    }

    const currentPage = (path) => {
      return location.pathname === path
    };

    return (
      <div className="h-20 w-full absolute z-50">
        <div className="dark:invisible fixed flex w-full h-auto justify-center bg-secondary lg:bg-[transparent] lg:absolute lg:right-0 lg:h-auto lg:w-60">
          <img
            src={DevStackLogoBlue}
            alt="DevStack Logo"
            className="mt-4 w-52 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="invisible dark:visible fixed flex w-full h-auto justify-center dark:bg-gradient-to-r from-primary to-dark dark:lg:bg-none  lg:absolute lg:right-0 lg:h-auto lg:w-60">
          <img
            src={DevStackLogoLight}
            alt="DevStack Logo"
            className="mt-4 w-52 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden lg:flex flex-col fixed top-[20%] gap-12 ml-1 sm:ml-4">
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdHome
              onClick={() => navigate("/")}
              className={`peer text-primary hover:bg-secondary dark:text-blue dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
                currentPage("/") && "bg-secondary"} dark:${currentPage("/") && "bg-dark"}`}
              size={40}
            />
            <p
              className="invisible text-primary dark:text-blue font-semibold peer-hover:visible"
              onClick={() => toggleNav()}
            >
              Home
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdAccountCircle
              onClick={() => navigate("/about")}
              className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
                currentPage("/about") && "bg-secondary"}  dark:${currentPage("/about") && "bg-dark"}`}
              size={40}
            />
            <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
              About
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <AiOutlineAppstore
              onClick={() => navigate("/projects")}
              className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark p-[8px] rounded-full cursor-pointer ${
                currentPage("/projects") && "bg-secondary"}  dark:${
                currentPage("/projects") && "bg-dark"
              }`}
              size={40}
            />
            <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
              Portfolio
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <AiOutlineAppstoreAdd
              onClick={() => navigate("projects/new")}
              className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
                currentPage("/projects/new") && "bg-secondary"
              }  dark:${
                currentPage("/projects/new") && "bg-dark"
              }`}
              size={40}
            />
            <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
              Add Project
            </p>
          </div>
          <div className="flex items-center lg:gap-4 md:gap-1">
            <MdEmail
              onClick={() => navigate("/contact")}
              className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
                currentPage("/contact") && "bg-secondary"
              }  dark:${currentPage("/contact") && "bg-dark"}`}
              size={40}
            />
            <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
              Contact
            </p>
          </div>

          <div className="relative">
              <div className="absolute invisible dark:visible flex items-center lg:gap-4 md:gap-1">
                <MdOutlineDarkMode
                  onClick={toggleTheme}
                  className="peer text-blue hover:bg-dark rounded-full p-2 cursor-pointer"
                  size={40}
                />
                <p className="invisible text-blue font-semibold peer-hover:invisible dark:peer-hover:visible">
                  Dark
                </p>
              </div>
              <div className="absolute dark:invisible flex items-center lg:gap-4 md:gap-1">
                <MdOutlineLightMode
                  onClick={toggleTheme}
                  className="peer text-primary hover:bg-secondary rounded-full p-2 cursor-pointer"
                  size={40}
                />
                <p className="invisible text-primary font-semibold peer-hover:visible dark:peer-hover:invisible">
                  Light
                </p>
              </div>
          </div>
        </div>

        <div className="h-10 w-10 flex justify-center fixed top-6 left-4">
          <div className="z-10 lg:hidden">
            <AiOutlineMenu
              onClick={toggleNav}
              className="text-primary dark:text-secondary transition-colors duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              size={20}
            />
          </div>
          {showNav && (
            <div className="fixed top-9 ml-20 w-fit pr-1 z-40 h-fit bg-primary transition-transform duration-1000 ease-in-out transform translate-y-4 lg:hidden">
              <div
                className={`flex items-center gap-1 group cursor-pointer ${
                  currentPage("/") ? "text-dark" : "text-secondary"
                }`}
                onClick={() => navAndToggle("/")}
              >
                <MdHome
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                  Home
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group cursor-pointer ${
                  currentPage("/about") ? "text-dark" : "text-secondary"
                }`}
                onClick={() => navAndToggle("/about")}
              >
                <MdAccountCircle
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                  About
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group cursor-pointer ${
                  currentPage("/projects") ? "text-dark" : "text-secondary"
                }`}
                onClick={() => navAndToggle("/projects")}
              >
                <AiOutlineAppstore
                  className="group-hover:text-dark p-[8px] rounded-full"
                  size={30}
                />
                <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                  Portfolio
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group w-max cursor-pointer ${
                  currentPage("/projects/new") ? "text-dark" : "text-secondary"
                }`}
                onClick={() => navAndToggle("projects/new")}
              >
                <AiOutlineAppstoreAdd
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                  Add Project
                </p>
              </div>
              <div
                className={`flex items-center gap-1 group cursor-pointer ${
                  currentPage("/contact") ? "text-dark" : "text-secondary"
                }`}
                onClick={() => navAndToggle("/contact")}
              >
                <MdEmail
                  className="group-hover:text-dark rounded-full p-2"
                  size={30}
                />
                <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                  Contact
                </p>
              </div>
              <div className="relative">
                <div
                  className={`invisible dark:visible flex items-center gap-1 group hover:text-dark cursor-pointer absolute`}
                >
                  <MdOutlineDarkMode
                    onClick={toggleTheme}
                    className="rounded-full p-2 group-hover:scale-110"
                    size={30}
                  />
                  <p
                    className="text-sm font-semibold hover:scale-110 group-hover:scale-110"
                    onClick={toggleTheme}
                  >
                    Dark
                  </p>
                </div>
                <div
                  className={`dark:invisible flex items-center gap-1 group cursor-pointer hover:text-dark text-secondary`}
                >
                  <MdOutlineLightMode
                    onClick={toggleTheme}
                    className="rounded-full p-2 group-hover:scale-110"
                    size={30}
                  />
                  <p
                    className="text-sm font-semibold hover:scale-110 group-hover: group-hover:scale-110"
                    onClick={toggleTheme}
                  >
                    Light
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
