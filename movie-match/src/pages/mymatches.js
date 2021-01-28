import React, { useState, useEffect } from "react";
// import SavedCard from "../components/Savedcard";
import API from "../utils/API";

function Saved() {
  const [savedMovies, setSavedMovies] = useState([]);
console.log(savedMovies);
  useEffect(() => {
    API.getMatches()
      .then((res) => {
          console.log(res);
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  function deleteMovie(id){
    console.log(id);
    API.deleteMovie(id)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="saved">
        <div>
        {savedMovies.map((movie, index ) => <button id={movie._id} onClick={() => deleteMovie(movie._id)}> {movie.title} </button> )}
        </div>
    </div>
  );
}

export default Saved;
