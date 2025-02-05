import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";
import AddMovie from "../components/AddMovie";

const Home = () => {
  const { movies } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header className="header">Movies.A</header>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      <div className="movie-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title} ({movie.year})</h3>
            </Link>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
      <AddMovie /> {/* Add Movie Form */}
    </div>
  );
};

export default Home;
