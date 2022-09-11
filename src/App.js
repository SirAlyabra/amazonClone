import { useEffect, useState } from 'react';
import './App.css';
import ListMovies from './components/ListMovies';
import fetchData from './hooks/fetch';


function App() {
  const [movies, setMovies ] = useState([])
  const fetchMovies = async () => {
    const InfoMovies = await fetchData('https://api.themoviedb.org/3/trending/movie/week?api_key=27be4d179de34afb05223f9d58a82fcd');
    setMovies(InfoMovies)
    // console.log('moviess', movies)
  }
  
  useEffect(() => {fetchMovies()}
  ,[]);

  return (
    <div className="App">
      <ListMovies categorie={'Terror'} movies={movies}/>
    </div>
  );
}

export default App;
