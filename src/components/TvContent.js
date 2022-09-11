import React from 'react';
import { endPointsApi } from '/src/services/endPointsApi';
import { GetApi } from '/src/services/GetApi';
import { useRouter } from 'next/router';

import { AiFillFilter } from 'react-icons/ai';

import { LabelSelect } from '/src/components/LabelSelect';
import { InputWithSearch } from '/src/components/InputWithSearch';
import { AppContext } from 'context/AppContext';

function TvContent({ handleClickShowModal }) {
    const { setFilteredFilms, setmodalFilterData } = React.useContext(AppContext);
    const [genresList, setGenresList] = React.useState([]);
    const router = useRouter();

    const orderRef = React.useRef(null);
    const genreRef = React.useRef(null);
    const yearRef = React.useRef(null);
    const ratingRef = React.useRef(null);
    const actorRef = React.useRef(null);

    React.useEffect(() => {
        const getGenres = async () => {
            const genres = await GetApi(endPointsApi.genres.all);
            setGenresList(genres.genres);
        };
        getGenres();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const order = orderRef.current.value;
        const year = yearRef.current.value;
        const rating = ratingRef.current.value;
        const actor = actorRef.current.value;
        const genre = genreRef.current.value;

        setmodalFilterData({
            order: order,
            page: 1,
            year: year,
            rating: rating,
            actor: actor,
            genre: genre,
        });

        const filteredMovies = async () => {
            let movies = new Array();
            setFilteredFilms(movies);
            movies = await GetApi(endPointsApi.filter.movies(order, 1, year, rating, actor, genre));
            setFilteredFilms(movies.results);
        };
        filteredMovies();
        handleClickShowModal();
        router.push('/#SearchGridCard');
    };

    return (
        <form className="mb-6 flex flex-col items-center">
            <div className="mb-6 w-full">
                <LabelSelect
                    label="Order by"
                    selected={{ value: '', text: 'No order' }}
                    options={[
                        { value: 'popularity.asc', name: 'Popularidad Asc' },
                        { value: 'popularity.desc', name: 'Popularidad Desc' },
                        { value: 'primary_release_date.asc', name: 'Fecha Asc' },
                        { value: 'primary_release_date.desc', name: 'Fecha Desc' },
                        { value: 'original_title.asc', name: 'Titulo Asc' },
                        { value: 'original_title.desc', name: 'Titulo Desc' },
                        { value: 'vote_count.desc', name: 'Cant. Votos Desc' },
                        { value: 'vote_count.asc', name: 'Cant. Votos Asc' },
                    ]}
                    selectRef={orderRef}
                />
            </div>

            <div className="mb-6 w-full">
                <LabelSelect label="By Gender" selected={{ value: '', text: 'No gender' }} options={genresList} selectRef={genreRef} />
            </div>

            <div className="mb-6 w-full">
                <LabelSelect
                    label="By Year"
                    selected={{ value: '', text: 'No year' }}
                    options={[
                        { value: '2022', name: '2022' },
                        { value: '2021', name: '2021' },
                        { value: '2020', name: '2020' },
                        { value: '2019', name: '2019' },
                        { value: '2018', name: '2018' },
                        { value: '2017', name: '2017' },
                        { value: '2016', name: '2016' },
                        { value: '2015', name: '2015' },
                        { value: '2014', name: '2014' },
                        { value: '2013', name: '2013' },
                        { value: '2012', name: '2012' },
                        { value: '2011', name: '2011' },
                        { value: '2010', name: '2010' },
                        { value: '2009', name: '2009' },
                        { value: '2008', name: '2008' },
                        { value: '2007', name: '2007' },
                        { value: '2006', name: '2006' },
                        { value: '2005', name: '2005' },
                        { value: '2004', name: '2004' },
                        { value: '2003', name: '2003' },
                        { value: '2002', name: '2002' },
                        { value: '2001', name: '2001' },
                        { value: '2000', name: '2000' },
                        { value: '1999', name: '1999' },
                        { value: '1998', name: '1998' },
                        { value: '1997', name: '1997' },
                        { value: '1996', name: '1996' },
                        { value: '1995', name: '1995' },
                        { value: '1994', name: '1994' },
                        { value: '1993', name: '1993' },
                        { value: '1992', name: '1992' },
                        { value: '1991', name: '1991' },
                        { value: '1990', name: '1990' },
                        { value: '1989', name: '1989' },
                        { value: '1988', name: '1988' },
                        { value: '1987', name: '1987' },
                        { value: '1986', name: '1986' },
                        { value: '1985', name: '1985' },
                        { value: '1984', name: '1984' },
                        { value: '1983', name: '1983' },
                        { value: '1982', name: '1982' },
                        { value: '1981', name: '1981' },
                        { value: '1980', name: '1980' },
                        { value: '1979', name: '1979' },
                        { value: '1978', name: '1978' },
                        { value: '1977', name: '1977' },
                        { value: '1976', name: '1976' },
                        { value: '1975', name: '1975' },
                        { value: '1974', name: '1974' },
                        { value: '1973', name: '1973' },
                        { value: '1972', name: '1972' },
                        { value: '1971', name: '1971' },
                        { value: '1970', name: '1970' },
                    ]}
                    selectRef={yearRef}
                />
            </div>

            <div className="mb-6 w-full">
                <LabelSelect
                    label="By Rating"
                    selected={{ value: '', text: 'No Rating' }}
                    options={[
                        { value: '10', name: '10' },
                        { value: '9', name: '9' },
                        { value: '8', name: '8' },
                        { value: '7', name: '7' },
                        { value: '6', name: '6' },
                        { value: '5', name: '5' },
                        { value: '4', name: '4' },
                        { value: '3', name: '3' },
                        { value: '2', name: '2' },
                        { value: '1', name: '1' },
                    ]}
                    selectRef={ratingRef}
                />
            </div>

            <div className="mb-6 w-full">
                <InputWithSearch label="By Actor" inputRef={actorRef} />
            </div>

            <button onClick={handleFormSubmit} type="submit" className="primaryButton w-4/5 flex justify-center items-center py-2">
                <AiFillFilter className="text-white text-lg mr-2" />
                Save Filters
            </button>
        </form>
    );
}

export { TvContent };
