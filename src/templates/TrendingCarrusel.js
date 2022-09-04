import React from 'react';
import Link from 'next/link';
import {MovieCard} from '/src/components/MovieCard'
import {PersonCard} from '/src/components/PersonCard'
import {Loading} from '/src/components/Loading/Loading'
import {LoadMore} from '/src/components/LoadMore/LoadMore'
import {TrendingButton} from '/src/components/TrendingButton/TrendingButton'
import userDontImg from '/src/img/imgDontExist.png';
import {GetApi} from '/src/services/GetApi';
import {AppContext} from '/src/context/AppContext';
import {endPointsApi} from '/src/services/endPointsApi';

function TrendingCarrusel() {
    const {
        trendingMovies, 
        setTrendingMovies, 
        trendingTvShows, 
        setTrendingTvShows,
        trendingActors, 
        setTrendingActors,
    } = React.useContext(AppContext);

    const [trendingMode, setTrendingMode] = React.useState('MOVIE');
    const [trendingMoviesPage, setTrendingMoviesPage] = React.useState(1);
    const [trendingTvShowsPage, setTrendingTvShowsPage] = React.useState(1);
    const [trendingActorsPage, setTrendingActorsPage] = React.useState(1);

    React.useEffect(() => {
        const getTrending = async () => {
            
            if (trendingMode === 'TV') {
                const trendingItems = await GetApi(endPointsApi.trending.tv(trendingTvShowsPage));
                setTrendingTvShows(trendingTvShowsPage == 1  
                    ? trendingItems.results
                    : trendingTvShows.concat(trendingItems.results)
                );
            } else if (trendingMode === 'PERSON') {
                const trendingItems = await GetApi(endPointsApi.trending.person(trendingActorsPage));
                setTrendingActors(trendingActorsPage == 1  
                    ? trendingItems.results
                    : trendingActors.concat(trendingItems.results)
                );
            } else {
                const trendingItems = await GetApi(endPointsApi.trending.movie(trendingMoviesPage));
                setTrendingMovies(trendingMoviesPage == 1  
                    ? trendingItems.results
                    : trendingMovies.concat(trendingItems.results)
                );
            }
        }   
        getTrending();
    }, [trendingMode, trendingMoviesPage, trendingTvShowsPage, trendingActorsPage, ]);

    const handleLoadMoreClick = () => {
        trendingMode == 'MOVIE' && setTrendingMoviesPage(trendingMoviesPage + 1);
        trendingMode == 'TV' && setTrendingTvShowsPage(trendingTvShowsPage + 1);
        trendingMode == 'PERSON' && setTrendingActorsPage(trendingActorsPage + 1);
    };
    
    let idRenderedArray = [];

    return (
        <div className="  ">
            <div className="flex justify-start items-center mb-5
                sm:flex-col">
                <h2 className="text-5xl mr-5 text-version1 dark:text-white">Trending</h2>
                <div className="flex gap-3">

                    <TrendingButton 
                        text="Movies"
                        changeTrendingMode={() => setTrendingMode('MOVIE')}
                        mode='MOVIE'
                        trendingMode={trendingMode}
                    />
                    <TrendingButton 
                        text="TV Shows"
                        changeTrendingMode={() => setTrendingMode('TV')}
                        mode='TV'
                        trendingMode={trendingMode}
                    />
                    <TrendingButton 
                        text="Actors"
                        changeTrendingMode={() => setTrendingMode('PERSON')}
                        mode='PERSON'
                        trendingMode={trendingMode}
                    />
                </div>
            </div>

            <div className="relative flex flex-nowrap gap-3 overflowXScroll z-50 h-[370px]">

                <Loading activeLoading={trendingMode}/>

                {(trendingMode === 'MOVIE') && trendingMovies.map( item => {
                    // Evidatndo key duplicadas en el renderizado
                    if(!idRenderedArray.includes(item.id)){
                        idRenderedArray.push(item.id);
                        return (
                                <MovieCard 
                                    imgCard={item.poster_path ? 
                                        `https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}` 
                                        :
                                        userDontImg
                                    }
                                    title={item.title}
                                    date={item.release_date}
                                    stars={item.vote_average}
                                    votes={item.vote_count}
                                    key={`movie-${item.title}-${item.release_date}-${item.id}`}
                                    id={item.id}
                                    trendingMode={trendingMode}
                                />
                        );
                    }
                })}

                    
                    
                {(trendingMode === 'TV') && trendingTvShows.map( item => {
                    // Evidatndo key duplicadas en el renderizado
                    if(!idRenderedArray.includes(item.id)){
                        idRenderedArray.push(item.id);
                        return (
                                <MovieCard 
                                    imgCard={item.poster_path ? 
                                        `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}` 
                                        :
                                        userDontImg
                                    }
                                    title={item.name}
                                    date={item.first_air_date}
                                    stars={item.vote_average}
                                    votes={item.vote_count}
                                    key={`tv-${item.name}-${item.id}`}
                                    id={item.id}
                                    trendingMode={trendingMode}
                                />
                        );}
                })}

                {(trendingMode === 'PERSON') && trendingActors.map( item => {
                    // Evidatndo key duplicadas en el renderizado, solo actores y solo render con imagenes
                    if(!idRenderedArray.includes(item.id) && item.known_for_department == 'Acting' && item.profile_path != null){
                        idRenderedArray.push(item.id);
                        return (<PersonCard 
                            imgCard={item.profile_path ?
                                `https://www.themoviedb.org/t/p/w470_and_h470_face/${item.profile_path}`
                                :
                                userDontImg
                            }
                            name={item.name}
                            role={item.known_for_department}
                            popularity={item.popularity}
                            key={`person-${item.name}-${item.id}`}
                        />);
                    }   
                })}

                <div className="flex justify-center items-center pr-5 h-4/5">
                    <LoadMore handleLoadMoreClick={handleLoadMoreClick} dirLoad='Right'/>
                    <div className=" h-full w-14 GridGradientX rounded-xl"></div>
                </div>
                
            </div>

        </div>
    );
}

export {TrendingCarrusel};