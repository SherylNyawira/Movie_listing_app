import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieDetail = () => {
  const { movies } = useContext(MovieContext);
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2 className="text-white text-center">Movie not found</h2>;

  return (
    <div className="movie-detail">
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title} ({movie.year})</h1>
      <p>{movie.description}</p>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
