import React, { useState, useEffect } from "react";
import SavedCard from "../components/Savedcard";
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

  return (
    <div className="saved">
        <div>
        {savedMovies.map((movie, index ) => <SavedCard key={index} {...movie} /> )}
        </div>
    </div>
  );
}

export default Saved;