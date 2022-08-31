import axios from "axios";

function GetApi(URL,page) {

    const config = {
        params: {
            'api_key': '6b3aca2c2b68dc2a015ad5ccff3223f9',
            'page': page,
        }
    };

    return axios.get(URL, config)
        .then((response) => response.data.results)
        .catch((error) => console.log(error))
}

export {GetApi};