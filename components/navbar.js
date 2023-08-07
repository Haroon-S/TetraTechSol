import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { useRouter } from "next/dist/client/router";
// import logo from "../public/img/logo 1.png";

export default function Navbar() {
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
    "inline-block py-1 mt-2 text-lg font-medium  no-underline rounded-md after:content-[''] after:bg-gradient-to-r after:from-[#FF4BCE] after:to-[#860EFF] after:h-1 after:rounded-xl after:mt-1 after:origin-left after:transition-all after:duration-500 after:block active:outline-none focus:outline-none outline-none ";
  const activeLinkStyle = " text-[#FF4BCE] after:scale-x-100 ";
  const inActiveLinkStyle =
    " focus:outline-none text-gray-800 dark:text-white after:scale-x-0 hover:text-[#FF4BCE] transition-all duration-200 hover:after:scale-x-100 ";

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
                  <Link className=" " href="/">
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
        <div className=" flex-1 text-right items-center flex justify-end">
          <div>
            <div className="hidden space-x-3 lg:flex nav__item md:col-span-1">
              <div className="flex mt-5 space-x-5 text-white">
                <a
                  href="https://twitter.com/web3templates"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#00acee] transition-all duration-300 scale-95 hover:scale-110"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </a>
                <a
                  href="https://facebook.com/web3templates"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#3b5998] transition-all duration-300 scale-95 hover:scale-110"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
                <a
                  href="https://instagram.com/web3templates"
                  target="_blank"
                  rel="noopener"
                  className=" hover:text-[#d62976] transition-all duration-300 scale-95 hover:scale-110"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener"
                  className=" hover:text-[#0A66C2] transition-all duration-300 scale-95 hover:scale-110"
                >
                  <span className="sr-only">Linkedin</span>
                  <Linkedin />
                </a>
              </div>
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
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
          <div className=" ml-7 mt-10 w-[350px] text-start">
            <nav className=" text-base font-semibold w-full text-white dark:text-white">
              <ul>
                <li className=" py-5 w-full">
                  <Link href="/">
                    <a
                      className={
                        "py-5 w-full after:transition-all after:duration-500 " +
                        (router.pathname == "/" && " text-[#0B0B27]")
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
                      className={
                        "focus:outline-none text-white " +
                        (serviceLinks.includes(router.pathname) &&
                          " text-[#0B0B27]")
                      }
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
                        "py-5 w-full after:transition-all after:duration-500 " +
                        (router.pathname == "/about" && " text-[#0B0B27]")
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
                        "py-5 w-full after:transition-all after:duration-500 " +
                        (router.pathname == "/contact" && " text-[#0B0B27]")
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

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
