import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <h1>Movie Listings</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title} ({movie.year})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
