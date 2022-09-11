import React from 'react';

import { GetApi } from '/src/services/GetApi';
import { endPointsApi } from '/src/services/endPointsApi';

import { HeroTv } from '/src/templates/HeroTv';

// Se estan obteniendo los datos por getServerSideProps
// const router = useRouter()
// const { id } = router.query
// console.log(id);
const Tv = ({ show }) => {
    // console.log(show);

    return (
        <>
            <HeroTv
                h1_title={show.name}
                imageBackground={show.backdrop_path}
                imagePoster={show.poster_path}
                release_date={show.first_air_date}
                vote_average={show.vote_average}
                vote_count={show.vote_count}
                overview={show.overview}
                tagline={show.tagline}
                homepage={show.homepage}
                genres={show.genres}
                production_companies={show.production_companies}
            />
        </>
    );
};

export default Tv;

// This gets called on every request
export async function getServerSideProps(context) {
    //   console.log(context);

    // Fetch data from external API
    const show = await GetApi(endPointsApi.tv.getData(context.query.id));

    // Pass data to the page via props
    return { props: { show } };
}
