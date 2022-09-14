import React, { useState } from "react";
import ListMovies from "../components/ListMovies";
// import fetchData from "../hooks/fetch";
import getListGenres from "../hooks/getListGenres";

const url_genres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=27be4d179de34afb05223f9d58a82fcd';
// console.log(getListGenres(url_genres))
// console.log("promise",getListGenres(url_genres))

function ListsMoviesGenres() {
    const url_movies = 'https://api.themoviedb.org/3/discover/movie?api_key=27be4d179de34afb05223f9d58a82fcd&with_genres=';
    const [genres, setgenres] = useState([]) 

    const awaitGenres = async () => {
        const genres = await getListGenres(url_genres);
        setgenres(genres)
    }

    awaitGenres()
   
   
  
    return(
        <div>
            {genres.map(genre => 
                <ListMovies key={genre.id} categorie={genre.name} url={`${url_movies}${genre.id}`} />
            )}
            
        </div>
    )
}

export default ListsMoviesGenres;