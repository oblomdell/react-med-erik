"use client"

import { useState, useRef } from 'react';
import Movie from "./movie"
import Button from "./button"

export default function Home() {

  const [movies, setMovies] = useState([])
  const inputMovie = useRef();
  const inputRating = useRef();
  const clearForm = useRef();

  //Skapar nya filmer i filmlistan
  const createMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: inputMovie.current.value,
      rating: parseInt(inputRating.current.value)
    };
    //Kollar så att både titel och betyg är valt
    inputMovie.current.value !== "" && inputRating.current.value !== "0" ? (
      setMovies([...movies, newMovie]), clearForm.current.reset()
    ) : (
      alert("Du måste ange både titel och betyg!")
    );
  };

  const deleteMovie = (moviePosition) => { {
      const newMovie = [...movies];
      newMovie.splice(moviePosition, 1);
      setMovies(newMovie);
    }
  };

  //Sorterar filmer i listan alfabetiskt
  const sortMoviesAlphabetical = () => {
    setMovies(prevMovies => [...prevMovies].sort((a, b) => a.title.localeCompare(b.title)));
  }
  
  //Sortera filmer i listan efter betyg
  const sortMoviesGrade = () => {
    setMovies(prevMovies => [...prevMovies].sort((a, b) => b.rating - a.rating));
  }

  return (
    <div>
      <h1>Min filmlista</h1>
      <form ref={clearForm}>
        <fieldset>
          <legend>Lägg till en film</legend>

          <label>Titel:</label>
          <input ref={inputMovie} />

          <label>Betyg:</label>
          <select ref={inputRating}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={createMovie}>Spara film</button>
          <Button onClick={sortMoviesAlphabetical}>Sortera alfabetiskt</Button>
          <Button onClick={sortMoviesGrade}>Sortera efter betyg</Button>
        </fieldset>
      </form>

      <hr />

      <ul id="movies">
        {movies.map((movie, i) => {
          return <Movie title={movie.title} index={i} rating={movie.rating} deleteMovie={deleteMovie} />
        })}
      </ul>

    </div>
  );
};