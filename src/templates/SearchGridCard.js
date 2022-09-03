import React from 'react';
import {MovieCard} from '/src/components/MovieCard'
import {LoadMore} from '/src/components/LoadMore/LoadMore'
// import imgCard from '/src/img/carImg.jpg';

import {AppContext} from '/src/context/AppContext';
import {endPointsApi} from '/src/services/endPointsApi';
import {GetApi} from '/src/services/GetApi';

function SearchGridCard() {

    const {filteredFilms, setFilteredFilms, modalFilterData, setmodalFilterData} = React.useContext(AppContext);

    const {
        order,
        page,
        year,
        rating,
        actor,
        genre,
    } = modalFilterData;

    React.useEffect(() => {

        const filteredMovies = async () => {
            const movies = await GetApi(endPointsApi.filter.movies(order, page, year, rating, actor, genre));
            setFilteredFilms(filteredFilms.concat(movies.results));
        }
        filteredMovies();
    }, [page]);
    
    const handleLoadMoreClick = () => {
        setmodalFilterData({
            ...modalFilterData,
            page: page + 1,
        });
    };


    return (
        <>
            <h2 className="text-5xl mt-10 text-version1 dark:text-white mb-5">
                Search by Filters
            </h2>

            <div className=" flex justify-center items-center flex-wrap gap-3 w-full">

                {filteredFilms?.map( item => (
                    
                    !!item.poster_path && <MovieCard 
                        imgCard={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                        title={item.title}
                        date={item.release_date}
                        stars={item.vote_average}
                        votes={item.vote_count}
                        key={`searched-${item.id+item.title}`}
                    />
                ))}

            </div>
            
            <div className="w-full flex flex-col justify-center items-center py-5">
                <LoadMore handleLoadMoreClick={handleLoadMoreClick} dirLoad='Down'/>
                <div className=" h-14 w-full GridGradientY rounded-xl"></div>
            </div>
        
        </>
        
    );
}

export {SearchGridCard};