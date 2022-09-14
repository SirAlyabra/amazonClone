import './App.css';
import ListMovies from './components/ListMovies';
import Navar from './components/Navar';
import ListsMoviesGenres from './containers/ListsMoviesGenres';

function App() {

  return (
    <div className="App">
      <Navar />
      {/* <ListMovies categorie={'Treading week'} url={'https://api.themoviedb.org/3/trending/movie/week?api_key=27be4d179de34afb05223f9d58a82fcd'}/>
      <ListsMoviesGenres /> */}
    </div>
  );
}

export default App;
