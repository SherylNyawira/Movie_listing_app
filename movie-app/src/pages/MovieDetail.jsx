import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieDetail = () => {
  const { movies } = useContext(MovieContext);
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h1>{movie.title} ({movie.year})</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
