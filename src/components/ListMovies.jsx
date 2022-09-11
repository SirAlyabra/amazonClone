// import React from "react";
import MovieCard from "./MovieCard";
import '../styles/ListMovie.css'
import ButtonScroll from "./ButtonSroll";
function ListMovies({categorie, movies}) {
	// console.log(movies)
	return(
		<div className="movieList-container" >
			<h2>{categorie}</h2>
			<div className="movieList">	
				<ButtonScroll direccion={'preview'}/>
				{movies.map( movie =>
					<MovieCard key={movie.id} urlImg={'https://image.tmdb.org/t/p/w300/'+ movie.backdrop_path} />
				)}
				<ButtonScroll direccion={'next'}/>
			</div>
		</div>
	)
}
export default ListMovies;