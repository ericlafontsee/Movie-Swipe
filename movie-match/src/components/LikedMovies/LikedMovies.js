import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import data from './data'
import API from "../../utils/API";

export default function App() {
  const [open, set] = useState(false)

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

  

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? savedMovies : [], (movie) => movie.css, {
    ref: transRef,
    unique: true,
    trail: 400 / savedMovies.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], 
    [0, open ? 0.1 : 0.6]
    )

  return (
    <>
      <Global />
      <Container style={{ ...rest, width: size, height: size }} onClick={() => set(open => !open)}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, backgroundImage: item.css }} />
        ))}
      </Container>
    </>
  )
}

render(<App />, document.getElementById('root'))
