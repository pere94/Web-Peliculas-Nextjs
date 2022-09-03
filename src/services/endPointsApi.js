const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const KEY = process.env.NEXT_PUBLIC_API_KEY;

const endPointsApi = {
    trending: {
        movie: (page = 1) => `${API}/${VERSION}/trending/movie/day?api_key=${KEY}&page=${page}`,
        tv: (page = 1) => `${API}/${VERSION}/trending/tv/day?api_key=${KEY}&page=${page}`,
        person: (page = 1) => `${API}/${VERSION}/trending/person/day?api_key=${KEY}&page=${page}`,
    },
    genres: {
        all: `${API}/${VERSION}/genre/movie/list?api_key=${KEY}`,
    },
    actors: {
        all: (page = 1, query = '') => `${API}/${VERSION}/search/person?api_key=${KEY}&&language=en-US&page=${page}&query=${query}`,
    },
    filter: {
        movies: (order = 'popularity.asc', page= 1, year = '', rating = '', actor = '', genre = '') => `${API}/${VERSION}/discover/movie?api_key=${KEY}&language=en-US&sort_by=${order}&page=${page}&primary_release_year=${year}&vote_average.gte=${rating}&with_people=${actor}&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    },
    // categories: {
    //     getCategoriesList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    //     addCategory: () => `${API}/api/${VERSION}/categories`,
    //     getCategoryItems: (id, limit, offset) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,
    //     updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    // },
};

export  {endPointsApi};