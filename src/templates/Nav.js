import React from 'react';
import { AppContext } from '../context/AppContext';
import { RiMovie2Line } from 'react-icons/ri';

import SwitchDarkMode from '../components/SwitchDarkMode';
import { Logo } from '../components/Logo';

function Nav({ navLinks }) {
    const [toggle, setToggle] = React.useState(true);
    const { darkMode, setDarkMode } = React.useContext(AppContext);

    const handleDarkModeSwitch = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav
            id="Nav"
            className="bg-white/0 min-w-[320px] border-gray-200 px-4 py-0 h-14
                dark:bg-darkModeColor/0 absolute top-0 left-0 z-30 w-full
                sm:px-2"
        >
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl h-full">
                <Logo icon={<RiMovie2Line className="w-full h-full" />} brand={'MovieApp'} />

                <div
                    className={`fixed z-20 top-14 right-5 p-2 bg-white dark:bg-darkModeColor 
                        items-center justify-between ${toggle ? 'hidden' : ''} 
                        w-52 flex order-1 rounded-2xl shadow-simpleSh+++ dark:shadow-version3 
                        shadow-primary-500`}
                >
                    <ul className="flex flex-col font-medium space-x-8 mt-0 w-full">
                        {navLinks.map((nameLink) => (
                            <li className="navBarLink" key={nameLink}>
                                <a
                                    href={`#${nameLink.toLowerCase().replace(' ', '-')}`}
                                    className={`block mx-1 px-3 py-2 rounded hover:bg-version1 
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
                    <SwitchDarkMode handleDarkModeSwitch={handleDarkModeSwitch} />

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
                        {toggle ? (
                            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        ) : (
                            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export { Nav };
