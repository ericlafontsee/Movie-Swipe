import React, { useState, useEffect } from "react";
import LikedMovies from "../components/LikedMovies/LikedMovies";
import MatchedMovies from "../components/MatchedMovies/MatchedMovies";

export default function LikedMoviesPage () {

  return (
    <>
            <LikedMovies />
            <MatchedMovies />
    </>
  )
}