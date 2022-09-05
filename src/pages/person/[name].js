import React from 'react';

import {GetApi} from '/src/services/GetApi';
import {endPointsApi} from '/src/services/endPointsApi';

import {HeroPerson} from '/src/templates/HeroPerson';


// Se estan obteniendo los datos por getServerSideProps
// const router = useRouter()
// const { id } = router.query
// console.log(id); 
const Person = ({person}) => {

  return (
    <>
      <HeroPerson 
        h1_title={person.name}
        imageBackground={person.profile_path}
        imagePoster={person.profile_path}
        birthday={person.birthday}
        vote_average={person.popularity}
        known_for_department={person.known_for_department}
        biography={person.biography}
        place_of_birth={person.place_of_birth}
        also_known_as={person.also_known_as}
      />
    </>
  );
}

export default Person

// This gets called on every request
export async function getServerSideProps(context) {

  // console.log(context);

  // Fetch data from external API
  const person = await GetApi(endPointsApi.actors.person(context.query.id));

  // Pass data to the page via props
  return { props:  {person}  }
}

