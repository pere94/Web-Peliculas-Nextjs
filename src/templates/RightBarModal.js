import React from 'react';
import { AiFillFilter } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

import {Tab} from '/src/components/Tab';
import {TabMovieContent} from '/src/components/TabMovieContent';

function RightBarModal() {
    const [showModal, setShowModal] = React.useState(false);
    const [tabNameActive, setTabNameActive] = React.useState('Movies');

    const handleClickShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className="relative z-[90]">
                <div className="w-full ">
                    <button onClick={handleClickShowModal} className={`primaryButton px-2 py-2 rounded-l-none 
                        fixed !z-100 top-20 ${showModal ? 'left-64' : 'left-0'} duration-300 m-0`} type="button">
                        {' '}
                        {!showModal ? <AiFillFilter className="text-white text-2xl" /> : <RiCloseFill className="text-white text-2xl font-bold" />}
                    </button>
                </div>

                <div
                    id="drawer-form"
                    className={`fixed z-[90] top-0 h-screen p-4 bg-white overflow-y-scroll
                        w-64 dark:bg-gray-800 ${showModal ? 'left-0' : '-left-80'} transition-[left] duration-300 `}>

                    <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                        <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Filter by interest
                    </h5>


                    <div className="mb-6">
                        <Tab 
                            setTabNameActive={setTabNameActive}
                            tabNameActive={tabNameActive}
                            tabsNames={[
                                'Movies',
                                'Tv Shows',
                                'Actors',
                            ]}
                        />
                    </div>

                    {tabNameActive == 'Movies' && 
                        <TabMovieContent handleClickShowModal={handleClickShowModal}/>
                    }

                    {tabNameActive == 'Tv Shows' && 
                        <p>Tv Shows</p>
                    }

                    {tabNameActive == 'Actors' && 
                        <p>Actors</p>
                    }

                </div>
            </div>
        </>
    );
}

export { RightBarModal };
