export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
      {
        id: 1,
        title: "Inception",
        year: 2010,
        image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        description: "A thief enters people's dreams to steal secrets."
      },
      {
        id: 2,
        title: "Interstellar",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A journey beyond the stars to save humanity."
      },
      {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces off against the Joker in Gotham."
      }
    ]);
  
    return (
      <MovieContext.Provider value={{ movies, setMovies }}>
        {children}
      </MovieContext.Provider>
    );
  };
  