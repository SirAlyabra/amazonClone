import '../styles/MovieCard.css'
function MovieCard({urlImg}) {
    // console.log('urlimg', urlImg)
    return(
        <div className="movieCard-container">
            <img className="moviePoster" src={urlImg} alt="Movie Poster" />
        </div>
    );
}
export default MovieCard;