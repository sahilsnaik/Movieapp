import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=95178a31";


const App = () => {
    const[searchTerm,setSearchTerm] = useState("");
    const [movies , setMovies] = useState([]);

    useEffect(() => {
        searchmovies();
    }, []);

const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    };



    return (
        <div className="App">
        <h1>Movie hub</h1>

        <div className="search">
            <input 
            value = {searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie"
            />
            <img src={SearchIcon} 
            alt="search"
            onClick = {() => searchmovies(searchTerm)}
            />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>

            ):(
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
}

export default App;