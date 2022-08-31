import React from "react";


// const initialState = {

// };


function useInitialState() {
    const [darkMode, setDarkMode] = React.useState(false);
    const [trending, setTrending] = React.useState([]);
    


    return {
        darkMode,
        trending,
        setDarkMode,
        setTrending,
    };

}

export {useInitialState};