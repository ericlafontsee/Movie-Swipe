import React, { useState, useEffect, useMemo } from "react";
import { useTransition, a } from "react-spring";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import "./styles.css";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

export default function MyMatches() {
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex'
    },
    expand: {
      margin: '0 auto',
     alignItems: 'center',
     width: '100%',
     height: '100%',
     backgroundSize: 'contain',
     backgroundPosition: 'center center',
     backgroundRepeat: 'no-repeat',
     overflow: "hidden",
     display: 'flex'
    }
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  let frontImage =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
    clickedMovie.posterImage;
    
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (item) => {
    setOpen(!open);
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
    let id = item._id;
    API.deleteMovie(id)
    .then(res => {
      window.location.reload();
    })
    .catch(err => console.log(err));
  }


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

  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    [
      "(min-width: 600px)",
      "(min-width: 600px)",
      "(min-width: 600px)",
      "(min-width: 600px)"
    ],
    [5, 4, 3, 2],
    1
  );

  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();

  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = savedMovies.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [
        (width / columns) * column,
        (heights[column] += child.height / 2) - child.height / 2
      ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, savedMovies, width]);

  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (movie) => movie.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  // Render the grid
  return (
    <>
    <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div
          key={key}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          <div
          className="likedImage"
            style={{ backgroundImage: item.css }}
            onClick={(e) => handleToggle(item)}
          ><HighlightOffOutlinedIcon fontSize="large" style={{ background: 'white'}} onClick={(e) => handleDelete(item)} /></div>
        </a.div>
      ))}
     
    </div>
     <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
     {open ? expandMovie : null}
   </Backdrop>
   </>
  );
}
