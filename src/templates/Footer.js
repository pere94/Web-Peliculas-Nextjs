import Link from 'next/link';
import { Logo } from '/src/components/Logo';
import { RiMovie2Line } from 'react-icons/ri';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
    return (
        <footer
            className="absolute z-40 p-4 w-full bg-white dark:bg-gray-800
            sm:p-1"
        >
            <div className="mx-auto max-w-screen-xl">
                <div
                    className="flex  justify-between
                    sm:flex-col sm:justify-evenly"
                >
                    <div className="mb-6 md:mb-0">
                        <Logo icon={<RiMovie2Line className="w-full h-full" />} brand={'MovieApp'} />
                    </div>
                    <div
                        className="flex gap-10
                        sm:gap-5 sm:mt-5 sm:justify-center"
                    >
                        <div className="sm:flex sm:flex-col justify-start items-start">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://flowbite.com" className="hover:underline">
                                        Flowbite
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        Tailwind CSS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/#">
                                        <span className="hover:underline">Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <span className="hover:underline">Terms &amp; Conditions</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div
                    className="flex items-center justify-between
                    sm:flex-col sm:gap-2"
                >
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2022{' '}
                        <Link href="/#">
                            <span className="hover:underline">MovieApp</span>
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a target="_blank" href="/#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebookSquare className="w-[22px] h-[22px]" />
                        </a>
                        <a target="_blank" href="/#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaInstagramSquare className="w-[22px] h-[22px]" />
                        </a>
                        <a target="_blank" href="/#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaTwitterSquare className="w-[22px] h-[22px]" />
                        </a>
                        <a target="_blank" href="https://github.com/pere94" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noreferrer">
                            <FaGithub className="w-[22px] h-[22px]" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/alejandro-perez-692934172/"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex justify-center items-center"
                            rel="noreferrer"
                        >
                            <ImLinkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
