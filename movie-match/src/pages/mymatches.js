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


  let data = [
    {
      css:
      'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',

      height: 300,
    },
    {
      css:
        'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    },
    {
      css:
        'url(https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      height: 300
    }
  ]
  return (
    <div className="saved">

        {/* // <div>
        // {savedMovies.map((movie, index ) => <button id={movie._id} onClick={() => deleteMovie(movie._id)}> {movie.title} </button> )}
        // </div> */}

      <MyMatches data = {data} />

    </div>
  );
}

export default Saved;
