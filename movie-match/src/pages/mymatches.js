import React, { useState, useEffect } from "react";
import MyMatches from "../components/MyMatches/MyMatches";
// import API from "../utils/API";

function Saved() {
  // const [savedMovies, setSavedMovies] = useState([]);
  // useEffect(() => {
  //   API.getMatches()
  //     .then((res) => {
  //       setSavedMovies(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  // function deleteMovie(id){
  //   console.log(id);
  //   API.deleteMovie(id)
  //   .then(res => {
  //     window.location.reload();
  //   })
  //   .catch(err => console.log(err));
  // }



  return (
    <div className="saved">

        {/* // <div>
        // {savedMovies.map((movie, index ) => <button id={movie._id} onClick={() => deleteMovie(movie._id)}> {movie.title} </button> )}
        // </div> */}

      <MyMatches  />

    </div>
  );
}

export default Saved;
