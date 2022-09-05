import React from 'react';
import { useRouter } from 'next/router'

import {GetApi} from '/src/services/GetApi';
import {endPointsApi} from '/src/services/endPointsApi';

import {HeroMovie} from '/src/templates/HeroMovie';


// Se estan obteniendo los datos por getServerSideProps
// const router = useRouter()
// const { id } = router.query
// console.log(id); 
const Movie = ({movie}) => {

  return (
    <>
      <HeroMovie 
        h1_title={movie.title}
        imageBackground={movie.backdrop_path}
        imagePoster={movie.poster_path}
        release_date={movie.release_date}
        runtime={movie.runtime}
        vote_average={movie.vote_average}
        vote_count={movie.vote_count}
        overview={movie.overview}
        tagline={movie.tagline}
        homepage={movie.homepage}
        genres={movie.genres}
        production_companies={movie.production_companies}
      />
    </>
  );
}

export default Movie

// This gets called on every request
export async function getServerSideProps(context) {

  // console.log(context.query.id);

  // Fetch data from external API
  const movie = await GetApi(endPointsApi.movie.getData(context.query.id));

  // Pass data to the page via props
  return { props:  {movie}  }
}

