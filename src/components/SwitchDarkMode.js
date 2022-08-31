import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import React from "react";

export default function SwitchDarkMode() {
  const [toggleMode, setToggleMode] = React.useState(false);

  const handletoggleMode = () => {
    setToggleMode(!toggleMode);
  };

  return (
    <div
      onClick={handletoggleMode}
      className="flex items-center justify-center"
    >
      {toggleMode ? (
        <BsFillSunFill className="rounded-lg p-1 h-7 w-7 text-sun bg-gray-100 shadow-sun shadow-simpleSh+++" />
      ) : (
        <IoMdMoon className="rounded-lg p-1 h-7 w-7  text-blue-300 bg-gray-700 shadow-blue-300 shadow-simpleSh+++" />
      )}
    </div>
  );
}