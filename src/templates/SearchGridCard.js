import React from 'react';
import {MovieCard} from '/src/components/MovieCard'
// import imgCard from '/src/img/carImg.jpg';
import {GetApi} from '/src/services/GetApi';
import {AppContext} from '/src/context/AppContext';
import {endPointsApi} from '/src/services/endPointsApi';

function SearchGridCard() {
    // React.useEffect(() => {
    //     GetApi(endPointsApi.trending.all);
    // }, []);
    const {trending} = React.useContext(AppContext);


    return (
        <>
            <h2 className="text-5xl mt-10 text-version1 dark:text-white mb-5">
                Search by Filters
            </h2>

            <div className=" flex justify-evenly items-center flex-wrap gap-4">

                {/* {trendingArray?.map( item => (
                    <MovieCard 
                        imgCard={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                        title={item.title}
                        date={item.release_date}
                        stars={item.vote_average}
                        votes={item.vote_count}
                        key={`searched-${item.id}`}
                    />
                ))} */}

            </div>
        
        </>
        
    );
}

export {SearchGridCard};