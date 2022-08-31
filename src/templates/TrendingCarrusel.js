import React from 'react';
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
    const {trending, setTrending} = React.useContext(AppContext);
    const [trendingMode, setTrendingMode] = React.useState('MOVIE');
    const [trendingPage, setTrendingPage] = React.useState(1);

    React.useEffect(() => {
        const getTrending = async () => {
            if (trendingPage == 1 ) {
                const newArray = new Array();
                setTrending(newArray);
            }
            
            if (trendingMode === 'TV') {
                const trendingItems = await GetApi(endPointsApi.trending.tv , trendingPage);
                setTrending(trendingPage == 1  
                    ? trendingItems 
                    : trending.concat(trendingItems));
            } else if (trendingMode === 'PERSON') {
                const trendingItems = await GetApi(endPointsApi.trending.person , trendingPage);
                setTrending(trendingPage == 1  
                    ? trendingItems 
                    : trending.concat(trendingItems));
            } else {
                const trendingItems = await GetApi(endPointsApi.trending.movie , trendingPage);
            setTrending(trendingPage == 1  
                ? trendingItems 
                : trending.concat(trendingItems));
            }
        }   
        getTrending();
    }, [trendingMode, trendingPage]);

    const handleLoadMoreClick = () => {
        setTrendingPage(trendingPage + 1);
    };

    return (
        <div className="  ">
            <div className="flex justify-start items-center mb-5">
                <h2 className="text-5xl mr-5 text-version1 dark:text-white">Trending</h2>
                <div className="flex gap-3">

                    <TrendingButton 
                        text="Movies"
                        changeTrendingMode={() => setTrendingMode('MOVIE')}
                        resetTrendingPage={() => setTrendingPage(1)}
                        mode='MOVIE'
                        trendingMode={trendingMode}
                    />
                    <TrendingButton 
                        text="TV Shows"
                        changeTrendingMode={() => setTrendingMode('TV')}
                        resetTrendingPage={() => setTrendingPage(1)}
                        mode='TV'
                        trendingMode={trendingMode}
                    />
                    <TrendingButton 
                        text="Actors"
                        changeTrendingMode={() => setTrendingMode('PERSON')}
                        resetTrendingPage={() => setTrendingPage(1)}
                        mode='PERSON'
                        trendingMode={trendingMode}
                    />
                </div>
            </div>

            <div className="relative flex flex-nowrap gap-3 overflowXScroll z-50 h-[370px]">

                <Loading trendingMode={trendingMode}/>

                {(trendingMode === 'MOVIE') && trending.map( item => (
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
                        />
                ))}

                {(trendingMode === 'TV') && trending.map( item => (
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
                    />
                ))}

                {(trendingMode === 'PERSON') && trending.map( item => (

                    item.known_for_department == 'Acting' && item.profile_path != null &&
                        <PersonCard 
                            imgCard={item.profile_path ?
                                `https://www.themoviedb.org/t/p/w470_and_h470_face/${item.profile_path}`
                                :
                                userDontImg
                            }
                            name={item.name}
                            role={item.known_for_department}
                            popularity={item.popularity}
                            key={`person-${item.name}-${item.id}`}
                        />
                ))}

                <LoadMore handleLoadMoreClick={handleLoadMoreClick}/>
                
            </div>

        </div>
    );
}

export {TrendingCarrusel};