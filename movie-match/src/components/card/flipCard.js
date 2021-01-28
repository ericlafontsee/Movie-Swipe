import { useSpring, animated as a } from "react-spring";
import "./styles.css";
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownTwoTone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  cardContainer: {
    width: "100%"
  },
  thumbsContainer: {
    margin: "3em"
  },
  buttonContainer: {
    margin: theme.spacing(1)
  },
  thumbsUp: {
    color: "darkGreen"
  },
  thumbsDown: {
    color: theme.palette.common.red
  },
  rating: {
    fontSize: "22px",
    position: "relative",
    bottom: 8
  },
  ratingIcon: {
    marginTop: ".75em"
  }
}));

export default function FlipCard() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
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

  const [checked, setChecked] = useState(false);
  let frontImage =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
    movieState.posterImage;
  let backImage =
    "https://www.themoviedb.org/t/p/w1280_and_h720_bestv2" +
    movieState.backdropImage;

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

  function addMovie(movieState) {
    return API.saveMovie({
      ...movieState
    })
      .then((res) => {
        console.log("response", res);
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  function handleShift() {
    pageNumber++;
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
  }

  const handleNo = () => {
    results = JSON.parse(localStorage.getItem("movieArray"));
    if (results.length === 1) {
      handleShift();
    } else {
      results.shift();

      localStorage.setItem("movieArray", JSON.stringify(results));
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
    }
  };

  const handleYes = () => {
    results = JSON.parse(localStorage.getItem("movieArray"));
    let movieData = results[0];
    if (results.length === 1) {
      handleShift();
    } else {
      results.shift();
      localStorage.setItem("movieArray", JSON.stringify(results));
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
    }
    addMovie(movieState);
  };

  const thumbsDown = (
    <>
      <Grid item>
        <Button onClick={handleNo}>
          <ThumbDownTwoToneIcon
            className={classes.thumbsDown}
            fontSize="large"
          />
        </Button>
      </Grid>
    </>
  );

  const thumbsUp = (
    <>
      <Grid item>
        <Button onClick={handleYes}>
          <ThumbUpTwoToneIcon
            className={classes.thumbsUp}
            fontSize="large"
            color="primary"
          />
        </Button>
      </Grid>
    </>
  );

  return (
    <>
      <div>
        <div className="carddiv" onClick={() => set((state) => !state)}>
          {matches ? null : thumbsDown}
          <a.div
            className="c front"
            style={{
              backgroundImage: `url(${frontImage})`,
              opacity: opacity.interpolate((o) => 1 - o),
              transform
            }}
          ></a.div>
          <a.div
            className="c back"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1) 10%, rgba(0, 0, 0, 1) 95%), url(${backImage})`,
              opacity,
              transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
            }}
          >
            <div className="movieInfo">
              {movieState.description}
              <StarRoundedIcon
                className={classes.ratingIcon}
                fontSize="large"
              />
              <span>{`${movieState.rating}`} / 10</span>
            </div>
          </a.div>
         
        </div>
        <Grid
            container
            className={classes.thumbsContainer}
            direction="row"
            justify="center"
            alignContent="flex-end"
            alignItems="center"
          >
            <Grid item style={{ marginRight: "5em" }}>
              {matches ? thumbsDown : null}
            </Grid>
            <Grid item style={{ marginLeft: "5em" }}>
              {matches ? thumbsUp : null}
            </Grid>
          </Grid>
          {matches ? null : thumbsUp}
      </div>
    </>
  );
}
