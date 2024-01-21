import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetails from "./Components/shared/MovieDetails/MovieDetails";
import Movies from "./Components/Movies/Movies";
import RatedMovies from "./Components/RatedMovies/RatedMovies";
import Trending from "./Components/TrendingSection/TrendingTele";
import "./App.css";
import RatedTv from "./Components/TopRated/RatedTv";
import KeywordSearch from "./Components/KeywordSearch/KeywordSearch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index exact element={<HomePage />}></Route>
        <Route path="movie-app" element={<HomePage />}></Route>
        <Route path="movie-details/:id" element={<MovieDetails />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="top-movies" element={<RatedMovies />}></Route>
        <Route path="trending-tv" element={<Trending />}></Route>
        <Route path="rated-tv" element={<RatedTv />}></Route>
        <Route path="keyword-search" element={<KeywordSearch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
