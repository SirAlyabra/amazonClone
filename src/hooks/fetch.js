// const API_KEY = 'api_key=27be4d179de34afb05223f9d58a82fcd';
// const baseURL = 'https://api.themoviedb.org/3/';

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    return movies;
}

export default fetchData;