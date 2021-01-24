import { useSpring, animated as a } from "react-spring";
import "./styles.css";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function Card() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  let results = [];
  let pageNumber = 1;

  const [movieState, setmovieState] = useState({
    title: "",
    posterImage: "",
    backdropImage: "",
    description: "",
    rating: "",
    reviewCount: "",
    release: "",
    genre: ""
  });

  // const [checked, setChecked] = useState(false);
  let frontImage =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
    movieState.posterImage;
  let backImage =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
    movieState.backdropImage;

  // const handleInfoButton = () => {
  //   setChecked(!checked);
  // };

  useEffect(() => {
    API.getMovies(pageNumber).then((response) => {
      results = response.data.results;
      console.log(results);
      setmovieState({
        ...movieState,
        title: results[0].title,
        posterImage: results[0].poster_path,
        backdropImage: results[0].backdrop_path,
        description: results[0].overview,
        rating: results[0].vote_average,
        reviewCount: results[0].vote_count,
        release: results[0].release_date,
        genre: results[0].genre
      });
      localStorage.setItem("movieArray", JSON.stringify(results));
    });
  }, []);

  // function addMovie(movieState) {
  //   return API.saveMovie({
  //     ...movieState
  //   })
  //     .then((res) => {
  //       console.log("response", res);
  //       return res.data;
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleShift() {
  //   pageNumber++;
  //   API.getMovies(pageNumber).then((response) => {
  //     results = response.data.results;
  //     console.log(results);
  //     setmovieState({
  //       ...movieState,
  //       title: results[0].title,
  //       posterImage: results[0].poster_path,
  //       backdropImage: results[0].backdrop_path,
  //       description: results[0].overview,
  //       rating: results[0].vote_average,
  //       reviewCount: results[0].vote_count,
  //       release: results[0].release_date,
  //       genre: results[0].genre
  //     });
  //     localStorage.setItem("movieArray", JSON.stringify(results));
  //   });
  // }

  return (
    <div onClick={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{
          backgroundImage: `url(${frontImage})`,
          opacity: opacity.interpolate((o) => 1 - o),
          transform
        }}
      ></a.div>
      <a.div
        className="c front"
        style={{
          backgroundImage: `url(${backImage})`,
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
        }}
      >
        ${movieState.description}
        <span>{`${movieState.rating}`} / 10</span>
      </a.div>
    </div>
  );
}
