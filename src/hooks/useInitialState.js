import React from "react";


// const initialState = {
//         trendingMode: 'MOVIE',
//         trendingPage: 1,
//         trendingMovies: [],
//         trendingTvShows: [],
//         trendingActors: [],
//     };


function useInitialState() {
    const [darkMode, setDarkMode] = React.useState(false);
    // const [trending, setTrending] = React.useState([]);
    const [trendingMovies, setTrendingMovies] = React.useState([]);
    const [trendingTvShows, setTrendingTvShows] = React.useState([]);
    const [trendingActors, setTrendingActors] = React.useState([]);


    const [filteredFilms, setFilteredFilms] = React.useState([]);
    const [modalFilterData, setmodalFilterData] = React.useState({
        order: 'popularity.desc',
        page: 1,
        year: '',
        rating: '',
        actor: '',
        genre: '',
    });
    


    return {
        darkMode,
        trendingMovies,
        trendingTvShows,
        trendingActors,
        filteredFilms,
        modalFilterData,
        setDarkMode,
        setFilteredFilms,
        setmodalFilterData,
        setTrendingMovies,
        setTrendingTvShows,
        setTrendingActors,
    };

}

export {useInitialState};