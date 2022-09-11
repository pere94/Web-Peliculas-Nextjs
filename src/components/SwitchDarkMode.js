import { BsFillSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';
import React from 'react';

export default function SwitchDarkMode({ handleDarkModeSwitch }) {
    const [toggleMode, setToggleMode] = React.useState(false);

    const handletoggleMode = () => {
        setToggleMode(!toggleMode);
        handleDarkModeSwitch();
    };

    return (
        <button onClick={handletoggleMode} className="flex items-center justify-center">
            {toggleMode ? (
                <BsFillSunFill
                    className="rounded-lg p-1 h-9 w-9 text-sun bg-gray-100 shadow-sun 
                        shadow-simpleSh+++ flex justify-center items-center"
                />
            ) : (
                <IoMdMoon
                    className="rounded-lg p-1 h-9 w-9  text-blue-300 bg-gray-700 
                        shadow-blue-300 shadow-simpleSh+++ flex justify-center items-center"
                />
            )}
        </button>
    );
}
