import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <header className="header">Movie.A</header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title} ({movie.year})</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
