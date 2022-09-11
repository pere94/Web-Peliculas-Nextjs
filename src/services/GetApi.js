import axios from 'axios';

function GetApi(URL) {
    return axios
        .get(URL)
        .then((response) => response.data)
        .catch((error) => console.log(error));
}

export { GetApi };
