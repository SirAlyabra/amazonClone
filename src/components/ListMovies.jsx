// import React from "react";
import MovieCard from "./MovieCard";
import { useRef, useState } from "react";
import '../styles/ListMovie.css'
import ButtonScroll from "./ButtonSroll";
import handleScroll from "../hooks/handleScroll";
import fetchData from "../hooks/fetch";

function ListMovies({categorie, url}) {
	const scrollRef = useRef(null);
	const [movies, setMovies ] = useState([])

	const fetchMovies = async () => {
	  const InfoMovies = await fetchData(url);
	  setMovies(InfoMovies)
	}
	fetchMovies();



	return(
		<div className="movieList-container" >
			<h2>{categorie}</h2>
			<div className="movieList" ref={scrollRef}>	
				<ButtonScroll direccion={'preview'} handleScroll={() => handleScroll(-1, scrollRef.current)} />
				{movies.map( movie =>
					<MovieCard key={movie.id} urlImg={'https://image.tmdb.org/t/p/w300/'+ movie.backdrop_path} />
				)}
				<ButtonScroll direccion={'next'} handleScroll={() => handleScroll(1, scrollRef.current)}/>
			</div>
		</div>
	)
}
export default ListMovies;