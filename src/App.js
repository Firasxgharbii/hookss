import logo from "./logo.svg";
import "./App.css";
import { moviesData } from "./Data";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";



function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("")
  const [rating, setRating] = useState(1)

const handleRating = (x) => setRating(x)
const handleChange = (e) => setText(e.target.value)
const handleAdd = (newMovie) => setMovies([...movies,newMovie])

  return <div className="App">
    <Filter text={text} handleChange={handleChange} rating={rating} handleRating={handleRating} />
    <MovieList  movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())
      && el.rating >= rating
      )}  />
    <AddMovie add={handleAdd} />
  </div>;
}

export default App;
