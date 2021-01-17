import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grow } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownTwoTone";
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
  },
  posterCard: {
    marginTop: "10em",
    width: "16.7em",
    maxWidth: "16.65em",
    margin: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "8em",
    },
  },
  backdropCard: {
    maxHeight: "25em",
    maxWidth: "30em",
    marginTop: "10em",
    marginRight: "1em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2.5em",
    },
  },
  cardHeader: {
    color: theme.palette.common.grey,
    opacity: 1,
    height: ".5em",
  },
  posterImage: {
    height: "30em",
    width: "20em",
  },
  backdropImage: {
    height: "15em",
    width: "100%",
  },
  buttonContainer: {
    margin: theme.spacing(1),
  },
  buttonYes: {
    ...theme.typography.buttonMain,
    marginTop: "2em",
    marginLeft: "13em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "9em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2.3em",
    },
  },
  buttonNo: {
    ...theme.typography.buttonSecondary,
    marginTop: "2em",
    marginLeft: "4.5em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-.75em",
    },
  },
  ratingContainer: {
    marginTop: "1em",
    marginLeft: "2em",
  },
  thumbsUp: {
    color: "darkGreen",
  },
  rating: {
    fontSize: "22px",
    position: "relative",
    bottom: 9
  },
  ratingIcon: {
    marginTop: 5,
  }
}));

export default function MovieCard(props) {
  const classes = useStyles();
  const queryGenre =
    "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  let results;

  const [movieState, setmovieState] = useState({
    title: "",
    posterImage: "",
    backdropImage: "",
    description: "",
    rating: "",
    reviewCount: "",
    release: "",
    genre: "",
  });

  const [checked, setChecked] = useState(false);

  const handleInfoButton = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    axios.get(queryGenre).then((response) => {
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
      console.log(movieState.title);
    });
  }, []);

  return (
    <>
      <Grid
        container
        className={classes.cardContainer}
        direction="row"
        justify="center"
        alignContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Button>
            <ThumbDownTwoToneIcon fontSize="large" color="primary" />
          </Button>
        </Grid>
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
                <StarRoundedIcon className={classes.ratingIcon} fontSize="large"/> 
                <span className={classes.rating}>
                {`${movieState.rating}`} / 10
                </span>
              </CardContent>
            </Card>
          </Grow>
        </Collapse>
        <Grid item>
          <Button>
            <ThumbUpTwoToneIcon
              className={classes.thumbsUp}
              fontSize="large"
              color="inherit"
            />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
