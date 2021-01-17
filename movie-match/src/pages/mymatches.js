import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Saved() {
  const [savedMovies, setSavedMovies] = useState([]);

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
        {savedMovies.map((movie, index ) => <h2 key={index} {...movie} />)}
        </div>
    </div>
  );
}

export default Saved;