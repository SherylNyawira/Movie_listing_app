import { createContext, useState } from "react";
import React from "react";

//Create and export MovieContext
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "coco",
      year: 2017,
      image: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
      description: "Reminder that despite death, family history can transcend the years and continue to shape our families for generations to come."
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
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  
  return (
    <MovieContext.Provider value={{ movies, setMovies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
