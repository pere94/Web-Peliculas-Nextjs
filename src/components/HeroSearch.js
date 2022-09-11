import React from 'react';

import { GetApi } from '/src/services/GetApi';
import { endPointsApi } from '/src/services/endPointsApi';

import { CardSearchResult } from '/src/components/CardSearchResult';

function HeroSearch({ placeholder }) {
    const [inputChangeValue, setInputChangeValue] = React.useState([]);
    const [showModalResult, setShowModalResult] = React.useState(false);

    const handleChangeinputValue = async (event) => {
        event.target.value != '' ? setShowModalResult(true) : setShowModalResult(false);
        if (event.target.value != '') {
            const searchResult = await GetApi(endPointsApi.search.all(event.target.value));
            setInputChangeValue(searchResult.results);
        }
        // setTimeout(() => {
        // }, 500);
    };

    let idRenderedArray = [];

    return (
        <div className="">
            <div className="flex justify-center items-center h-10 mt-10 w-full relative">
                <input
                    onChange={handleChangeinputValue}
                    type="search"
                    className="w-full min-w-[260px] h-11 border-2 border-version3 rounded-3xl text-xl bg-black/80 
                        text-version3 indent-2"
                    placeholder={placeholder}
                />

                <svg
                    id="svg_search"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-[60] h-[68px] min-h[68px] w-[68px] min-w-[68px]
                        text-version3 rounded-full border-2 border-gray-500 relative -left-8 bg-version2 hover:cursor-pointer
                        hover:shadow-simpleSh+++ hover:shadow-version3 active:scale-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path
                        className="svg-redond"
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {showModalResult && (
                <div
                    className="flex flex-col p-1 relative top-1 -left-4 z-50 bg-white dark:bg-gray-800 dark:border-gray-700 gap-2
                    rounded-lg h-60 overflow-y-scroll"
                >
                    {inputChangeValue.map((item) => {
                        // Evidatndo key duplicadas en el renderizado, solo actores y solo render con imagenes
                        if (!idRenderedArray.includes(item.id) && (item.profile_path != null || item.poster_path != null)) {
                            idRenderedArray.push(item.id);
                            return (
                                <CardSearchResult
                                    key={`carSearck-${item.id}`}
                                    id={item.id}
                                    img_path={item.profile_path ? item.profile_path : item.poster_path}
                                    title={item.title ? item.title : item.name}
                                    media_type={item.known_for_department ? item.known_for_department : item.media_type.toUpperCase()}
                                    first_air_date={item.first_air_date ? item.first_air_date : item.release_date}
                                    popularity={item.vote_average ? item.vote_average : item.popularity}
                                    vote_count={item.vote_count ? item.vote_count + ' ' + 'Reviews' : null}
                                />
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
}

export { HeroSearch };
