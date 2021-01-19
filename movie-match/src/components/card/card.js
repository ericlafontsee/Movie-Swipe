import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Grow } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownTwoTone";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%"
  },
  thumbsContainer: {
    marginTop: "3em"
  },
  posterCard: {
    marginTop: "8em",
    width: "16.7em",
    maxWidth: "16.7em",
    margin: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "8em"
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
      margin: "1em",
      marginTop: "8em"
    }
  },
  backdropCard: {
    maxHeight: "25em",
    maxWidth: "16.7em",
    width: "16.7em",
    marginTop: "4em",
    marginRight: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "4em",
      height: "30em",
      width: "16.7em",
      maxWidth: "16.7em"
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
      marginRight: "1em",
      marginTop: "8em"
    }
  },
  cardHeader: {
    color: theme.palette.common.grey,
    opacity: 1,
    height: ".5em"
  },
  posterImage: {
    height: "30em",
    width: "20em"
  },
  backdropImage: {
    height: "15em",
    width: "100%"
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

export default function MovieCard() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
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

  const handleInfoButton = () => {
    setChecked(!checked);
  };

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
      <Container>
        <Grid
          container
          className={classes.cardContainer}
          direction="row"
          justify="center"
          alignContent="flex-end"
          alignItems="center"
        >
          {matches ? null : thumbsDown}
          <Card className={classes.posterCard}>
            <CardActionArea>
              <CardMedia
                className={classes.posterImage}
                component="image"
                image={
                  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                  `${movieState.posterImage}`
                }
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <CardHeader
                className={classes.cardHeader}
                title={`${movieState.title}`}
                subheader={`${movieState.release}`}
                action={
                  <IconButton aria-label="information">
                    <InfoIcon onClick={handleInfoButton} />
                  </IconButton>
                }
              />
            </CardContent>
          </Card>
          <Collapse in={checked} timeout="auto" unmountOnExit>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <Card className={classes.backdropCard}>
                <CardActionArea>
                  <CardMedia
                    className={classes.backdropImage}
                    component="image"
                    image={
                      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                      `${movieState.backdropImage}`
                    }
                  />
                </CardActionArea>
                <CardContent>
                  {`${movieState.description}`}
                  <div />
                  <StarRoundedIcon
                    className={classes.ratingIcon}
                    fontSize="large"
                  />
                  <span className={classes.rating}>
                    {`${movieState.rating}`} / 10
                  </span>
                </CardContent>
              </Card>
            </Grow>
          </Collapse>
          {matches ? null : thumbsUp}
        </Grid>
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
      </Container>
    </>
  );
}
