import { useEffect } from "react";
import "./App.css";

// 679e825d
// eslint-disable-next-line

const API_URL = "http://www.omdbapi.com/?apikey=679e825d";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman')
  }, []);

  return(
    <h1>App</h1>
  ); 
};

export default App;
