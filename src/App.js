import logo from "./logo.svg";
import "./App.css";
import { moviesData } from "./Data";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description  from "./components/Description";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("")
  const [rating, setRating] = useState(1)

const handleRating = (x) => setRating(x)
const handleChange = (e) => setText(e.target.value)
const handleAdd = (newMovie) => setMovies([...movies,newMovie])

  return <div className="App">
    {/* <BrowserRouter>
    <Routes >
    <Route path ='/' element={<Filter text={text} handleRating={handleRating} rating={rating}}
    <Route path ='/' element={<MovieList movies={movies.filter(el=>el.name.toLowerCase().includes)}}

    <AddMovie add={handleAdd} />
    <Route path='/trailer/:id' element{}
    </Routes>
</BrowserRouter> */}
<BrowserRouter>
<Filter text={text} handleChange={handleChange} rating={rating} handleRating={handleRating} />
<Routes>
<Route path="/" element ={<MovieList  movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLocaleLowerCase())&&el.rating>=rating)} />} />
    <Route path="/trailer/:id" element={<Description film={movies}  />} />
      </Routes>

    <AddMovie add={handleAdd} />
      </BrowserRouter>
  </div>;
}

export default App;
