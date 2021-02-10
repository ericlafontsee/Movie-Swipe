import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Global, Container, Item } from "./styles";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

export default function App() {
  const [open, set] = useState(false);

  ////////////////////////////BackDrop-expand//////////////////////////////////
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex"
    },
    expand: {
      margin: "0 auto",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundSize: "contain",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      display: "flex"
    }
  }));

  const classes = useStyles();
  const [openBackDrop, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  let frontImage =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
    clickedMovie.posterImage;

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (item) => {
    setOpen(!openBackDrop);
    setClickedMovie(item);
  };

  const expandMovie = (
    <>
      <div
        className={classes.expand}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .2) 5%, rgba(0, 0, 0, 1) 95%), url(${frontImage})`
        }}
      >
        <div className="movieInfo">
          {clickedMovie.description}
          <StarRoundedIcon className={classes.ratingIcon} fontSize="large" />
          <span>{`${clickedMovie.rating}`} / 10</span>
        </div>
      </div>
    </>
  );

  function handleDelete(item){
    console.log('item', item);
    let id = item._id;
    console.log('id', id);
    API.deleteMovie(id)
    .then(res => {
      window.location.reload();
    })
    .catch(err => console.log(err));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////

  // Api call and setting state for user's liked movies
  const [savedMovies, setSavedMovies] = useState([]);
  savedMovies.map((movie) => {
    movie.css =
      "url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
      movie.posterImage +
      ")";
    movie.height = 900;
  });

  useEffect(() => {
    API.getMatches()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "red" },
    to: { size: open ? "100%" : "20%", background: open ? "white" : "red" }
  });

  const transRef = useRef();
  const transitions = useTransition(
    open ? savedMovies : [],
    (movie) => movie.css,
    {
      ref: transRef,
      unique: true,
      trail: 400 / savedMovies.length,
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" }
    }
  );

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  return (
    <>
      <Global />
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => set((open) => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item
            key={key}
            style={{ ...props, backgroundImage: item.css }}
            onClick={(e) => handleToggle(item)}
          ><HighlightOffOutlinedIcon fontSize="large" style={{ background: 'white'}} onClick={(e) => handleDelete(item)} /></Item>
        ))}
      </Container>
      <Backdrop className={classes.backdrop} open={openBackDrop} onClick={handleClose}>
        {openBackDrop ? expandMovie : null}
      </Backdrop>
    </>
  );
}

render(<App />, document.getElementById("root"));
