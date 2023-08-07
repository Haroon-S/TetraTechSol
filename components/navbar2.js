import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { useRouter } from "next/dist/client/router";
// import logo from "../public/img/logo 1.png";

export default function Navbar2() {
  const navigation1 = [
    { text: "Home", link: "/" },
    { text: "Services", list: ["Web Development"], link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Contact us", link: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const scrollPosition = useScrollPosition();
  const [section, setSection] = useState("");
  const [accordion, setAccordion] = useState(false);
  function handleSection(event) {
    setSection(event.target.id);
  }
  function handleSetActive(to) {
    // console.log(to);
  }

  function toggleMenu() {
    setOpenMenu((prevState) => !prevState);
  }
  function handleAccordion() {
    setAccordion((prevState) => !prevState);
  }

  const services = [
    { name: "Web Development", link: "/webDevelopment" },
    { name: "App Development", link: "/appDevelopment" },
    { name: "Animation", link: "/animation" },
    { name: "Digital Marketing", link: "/digitalMarketing" },
  ];

  const serviceLinks = [
    "/webDevelopment",
    "/appDevelopment",
    "/animation",
    "/digitalMarketing",
  ];

  const router = useRouter();

  const linkStyle =
    "inline-block py-1 mt-2 text-lg font-medium  no-underline rounded-md after:content-[''] after:bg-gradient-to-r after:from-[#FF4BCE] after:to-[#860EFF] after:h-1 after:rounded-xl after:mt-1 after:origin-left after:transition-all after:duration-500 after:block focus:outline-none outline-none ";
  const activeLinkStyle = " text-[#FF4BCE] after:scale-x-100 ";
  const inActiveLinkStyle =
    " text-gray-800 dark:text-white after:scale-x-0 hover:text-[#FF4BCE] transition-all duration-200 hover:after:scale-x-100 ";

  return (
    <div
      className={
        " w-full transition-all duration-500 ease-out text-black " +
        (scrollPosition && " shadow-lg bg-[#f5f5ff] dark:bg-[#0B0B27] ")
      }
    >
      <div className=" container w-full pr-8 pl-4 md:pr-0 md:pl-0 flex items-center justify-between md:mx-auto md:max-w-7xl h-24 overflow-x-hidden">
        {/* <HomeBtn /> */}
        <div className=" flex-1">
          <Link href="/">
            <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <img
                  src="/img/logo1.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-24"
                />
              </span>
              <span className=" hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4BCE] to-[#860EFF] text-3xl font-stock font-extrabold">
                TetraTechSol
              </span>
            </a>
          </Link>
        </div>
        <div className=" flex-1 flex items-center md:justify-center w-full">
          <div className="hidden md:flex font-semibold md:gap-12 ">
            <nav>
              <ul className=" flex justify-evenly flex-wrap items-center gap-9">
                <li>
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? ` ${linkStyle} ${activeLinkStyle} `
                          : ` ${linkStyle} ${inActiveLinkStyle} `
                      }
                    >
                      <span className=" hover:shadow-2xl">Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <div class="group inline-block text-white">
                    <button
                      class={
                        serviceLinks.includes(router.pathname)
                          ? "outline-none py-2 text-lg font-medium text-[#FF4BCE]  focus:outline-none flex gap-1 items-center min-w-32 "
                          : " outline-none py-2 text-lg font-medium  focus:outline-none flex gap-1 items-center min-w-32 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#FF4BCE] focus:text-indigo-500"
                      }
                    >
                      Services
                      <span>
                        <svg
                          class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul class=" bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] mt-0 py-2 rounded-xl transform scale-0 group-hover:scale-100 absolute z-10 transition duration-150 ease-in-out origin-top min-w-32">
                      {services.map((service) => (
                        <li className=" py-2 last:border-0 border-b border-b-[#0B0B27]">
                          <Link href={service.link}>
                            <a
                              className={
                                "py-1 transition-all px-8 w-full font-medium text-base hover:text-[#0B0B27] dark:hover:text-[#0B0B27] rounded-3xl text-center"
                              }
                            >
                              {service.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about"
                          ? ` ${linkStyle} ${activeLinkStyle} `
                          : ` ${linkStyle} ${inActiveLinkStyle} `
                      }
                    >
                      <span className=" hover:shadow-2xl">About</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname == "/contact"
                          ? ` ${linkStyle} ${activeLinkStyle} `
                          : ` ${linkStyle} ${inActiveLinkStyle} `
                      }
                    >
                      <span className=" hover:shadow-2xl">Contact us</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className=" flex-1 text-right flex justify-end">
          <div>
            <div className="hidden space-x-3 lg:flex nav__item md:col-span-1">
              <ThemeChanger />
            </div>
          </div>
          <h1 onClick={toggleMenu} className=" block md:hidden">
            {!openMenu && (
              <svg
                className="w-8 h-8 bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] rounded-md"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            )}
          </h1>
        </div>
        <div
          className={
            openMenu
              ? " z-50 fixed flex flex-col md:hidden h-full ease-in duration-500 bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] overflow-y-scroll overflow-x-hidden w-[85%] top-0 right-0 "
              : " z-50 fixed flex flex-col md:hidden h-full top-0 right-0 w-[85%] bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] ease-in-out duration-700 translate-x-full"
          }
        >
          <div className=" mt-8 px-6 self-end w-full flex justify-between items-center">
            <h1 onClick={toggleMenu} className={!openMenu && " animate-spin"}>
              <svg
                className="w-8 h-8 bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] rounded-md shadow-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>
            </h1>
            <ThemeChanger />
          </div>
          <div className=" ml-7 mt-10 w-[350px] text-start">
            <nav className=" text-base font-semibold w-full text-white dark:text-white">
              <ul>
                <li className=" py-5 w-full">
                  <Link href="/">
                    <a
                      className={
                        "py-5 w-full after:transition-all after:duration-500 " + (router.pathname == "/" && " text-[#0B0B27]")
                      }
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className=" py-5 w-full">
                  <Disclosure>
                    <Disclosure.Button
                      style={{ webkitTapHighlightColor: "transparent" }}
                      className={"focus:outline-none text-white " + (serviceLinks.includes(router.pathname) && " text-[#0B0B27]")}
                    >
                      <span className=" flex gap-1 font-semibold items-center">
                        Services
                        <svg
                          class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-150 ease-out"
                      enterFrom="transform scale-80 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-150 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-80 opacity-0"
                    >
                      <Disclosure.Panel>
                        <div class=" px-5 py-0 font-light bg-transparent ">
                          <ul className=" text-base font-semibold w-full ">
                            {services.map((service) => (
                              <li className=" py-5 w-full border-b border-b-[#0B0B27]">
                                <Link
                                  href={service.link}
                                  className={
                                    " text-left w-full after:content-[''] after:bg-amber-400 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left "
                                  }
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </li>
                {/* <li className=" py-5 w-full">
                  <div
                    id="accordion-arrow-icon"
                    className=" text-base font-semibold w-full transition-all duration-300"
                    data-accordion="open"
                  >
                    <h2
                      onClick={handleAccordion}
                      className={
                        accordion &&
                        "text-left text-amber-500 font-bold transition-all duration-150 ease-out"
                      }
                      id="accordion-arrow-icon-heading-1"
                    >
                      <span className=" flex gap-1 items-center">
                        Services
                        <svg
                          class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </h2>
                    <div
                      className={!accordion && "hidden"}
                      id="accordion-arrow-icon-body-1"
                      aria-labelledby="accordion-arrow-icon-heading-1"
                    >
                      <div class=" px-5 py-0 font-light bg-transparent ">
                        <ul className=" text-base font-semibold w-full ">
                          {services.map((service) => (
                            <li className=" py-5 w-full border-b border-b-[#0B0B27]">
                              <a
                                className={
                                  " text-left w-full after:content-[''] after:bg-amber-400 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:border-t-[3px] after:transition-all after:duration-500 after:origin-left "
                                }
                                activeClass=" after:block after:w-56 after:border-t-amber-400 after:transition-all after:duration-500 text-amber-400"
                                to="mahaDasha"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={handleSetActive}
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li> */}
                <li className=" py-5 w-full">
                <Link href="/about">
                    <a
                      className={
                        "py-5 w-full after:transition-all after:duration-500 " + (router.pathname == "/about" && " text-[#0B0B27]")
                      }
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className=" py-5 w-full">
                <Link href="/contact">
                    <a
                      className={
                        "py-5 w-full after:transition-all after:duration-500 " + (router.pathname == "/contact" && " text-[#0B0B27]")
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
