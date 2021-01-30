import { render } from 'react-dom'
import React, { useState, useEffect, useMemo } from 'react';
import { useTransition, a } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from './useMeasure';
import useMedia from './useMedia';
import './styles.css';
import API from "../../utils/API";




export default function MyMatches(props) {
  const [savedMovies, setSavedMovies] = useState([]);
  useEffect(() => {
    API.getMatches()
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

savedMovies.map(movie => {
     movie.css = 'url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + movie.posterImage + ')';
     movie.height = 300;
  })

let data = props.data;
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(data)
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = savedMovies.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, savedMovies, width]);
  console.log(savedMovies);
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (movie) => movie.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })
  // Render the grid
  return (
    <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
          <div style={{ backgroundImage: item.css }} />
        </a.div>
      ))}
    </div>
  )
}
