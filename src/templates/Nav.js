import React from "react";
import { AppContext } from "../context/AppContext";
import { RiMovie2Line } from "react-icons/ri";

import SwitchDarkMode from '../components/SwitchDarkMode';
import {Logo} from '../components/Logo';


function Nav({navLinks}) {
  const [toggle, setToggle] = React.useState(true);
  const {darkMode, setDarkMode} = React.useContext(AppContext);
  
  const [locationPlace, setLocationPlace] = React.useState(true);
  const [staysPlace, setStaysPlace] = React.useState(false);
  const [faqsPlace, setFaqsPlace] = React.useState(false);
  const [aboutUs, setAboutUs] = React.useState(false);

  const handleDarkModeSwitch = () => {
    setDarkMode(!darkMode);
  };

  // React.useEffect(() => {
  //   window.onscroll = () => {
  //     const maxHeightScroll = document.documentElement.scrollHeight;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const currenHeightScroll = document.documentElement.scrollTop;
  //     const staysDespl = document.getElementById('stays').offsetTop; 
  //     const faqsDespl = document.getElementById('faqs').offsetTop; 


  //     if (currenHeightScroll > staysDespl && currenHeightScroll < faqsDespl) {
  //       setStaysPlace(true);
  //       setLocationPlace(false);
  //       setFaqsPlace(false);
  //       setAboutUs(false);
  //     } else if (currenHeightScroll > faqsDespl && !(currenHeightScroll + clientHeight + 20 > maxHeightScroll) ) {
  //       setFaqsPlace(true);
  //       setStaysPlace(false);
  //       setLocationPlace(false);
  //       setAboutUs(false);
  //     } else if (currenHeightScroll + clientHeight + 20 > maxHeightScroll) {
  //       setAboutUs(true);
  //       setFaqsPlace(false);
  //       setStaysPlace(false);
  //       setLocationPlace(false);
  //     } 
  //     else if (currenHeightScroll > 0 && currenHeightScroll < staysDespl) {
  //       setLocationPlace(true);
  //       setAboutUs(false);
  //       setFaqsPlace(false);
  //       setStaysPlace(false);
  //     }

  //   };
  // }, []);


  return (
    <nav id="Nav" className="bg-white/0 min-w-[320px] border-gray-200 px-4 py-0 h-14
      dark:bg-darkModeColor/0 absolute top-0 left-0 z-30 w-full
      sm:px-2">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl h-full">
        <Logo 
          icon={
            <RiMovie2Line className="w-full h-full" />

          }
          brand={'MovieApp'}
        />
        
        <div
          className={`fixed z-20 top-14 right-5 p-2 bg-white dark:bg-darkModeColor 
             items-center justify-between ${toggle ? "hidden" : ""} 
            w-52 flex order-1 rounded-2xl shadow-simpleSh+++ dark:shadow-version3 
            shadow-primary-500`}

        >
          <ul className="flex flex-col font-medium space-x-8 mt-0 w-full">

            {navLinks.map(nameLink => (
              <li className="navBarLink" key={nameLink}>
                <a
                  href={`#${nameLink.toLowerCase().replace(' ', '-')}`}
                  className={`block mx-1 px-3 py-2 text-version3 rounded hover:bg-version1 
                  ${locationPlace && nameLink == navLinks[0] ? 'navBarElementActive' : ""}
                  ${staysPlace && nameLink == navLinks[1] ? 'navBarElementActive' : ""}
                  ${faqsPlace && nameLink == navLinks[2] ? 'navBarElementActive' : ""}
                  ${aboutUs && nameLink == navLinks[3] ? 'navBarElementActive' : ""}
                  bg-transparent text-primary-700 hover:text-white`}
                  aria-current="page"
                >
                  {nameLink}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
        
        <div className="flex items-center lg:order-2">

          <button onClick={handleDarkModeSwitch}>
              <SwitchDarkMode />
          </button>
          
          <button
            onClick={() => setToggle(!toggle)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-1 ml-2 text-xl text-version3 
              rounded-lg hover:bg-version1 focus:outline-none
              focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-9 h-9"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}

export {Nav};