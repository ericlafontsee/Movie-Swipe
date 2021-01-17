import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  posterCard: {
    marginTop: "10em",
  },
  cardHeader: {
    color: theme.palette.common.grey,
    opacity: 1,
    height: "5%"
  },
  backdropCard: {
    width: "50%",
    marginTop: "10em"
  },
  posterImage: {
    height: "30em",
    width: "20em",
  },
  backdropImage: {
    height: "15em",
    width: "40em"
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
    marginLeft: "2em"
  }
}));

export default function MovieCard() {
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
    release: "",
    genre: "",
  });

  const [checked, setChecked] = useState(false);

  const handleInfoButton = () => {
    setChecked((prev) => !prev);
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
      });
      console.log(movieState.title);
    });
  }, []);

  return (
    <>
      <Grid 
        container 
        direction="row" 
        justify="center" 
        alignItems="center"
      >
        <Grid 
          item
          style={{ marginRight:"1em" }}>
          <Card className={classes.posterCard}>
            <CardActionArea>
            <CardMedia
              className={classes.posterImage}
              component="image"
              image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+`${movieState.posterImage}`}
            >
              </CardMedia>
            </CardActionArea>
            <CardContent>
            <CardHeader
                  className={classes.cardHeader}
                  title={`${movieState.title}`}
                  subheader={`${movieState.release}`}
                  action={
                    <IconButton aria-label="information">
                      <InfoIcon 
                        onClick={handleInfoButton}  
                      />
                    </IconButton>
                  }
            />
            </CardContent>
          </Card>
        </Grid>
        <Grid 
          item
          style={{ marginLeft:"1em" }}>
          <Grow 
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
          <Card className={classes.backdropCard}>
            <CardActionArea>
              <CardMedia
                className={classes.backdropImage}
                component="image"
                image={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+`${movieState.backdropImage}`}
                />
            </CardActionArea>
            <CardContent>
              {`${movieState.description}`}
            </CardContent>
          </Card>

          </Grow>
        </Grid>
      </Grid>
    </>
  );
}
