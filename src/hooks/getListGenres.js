async function getListGenres(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
}

export default getListGenres;