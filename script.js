// var movie = document.querySelector("#movieTitle");
const axios = require("axios");
var genreCategory = [
  {
    genre: "Action",
    genreID: 28
  },
  {
    genre: "Comedy",
    genreID: 16
  },
  {
    genre: "Crime",
    genreID: 80
  },
  {
    genre: "Documentary",
    genreID: 99
  },
  {
    genre: "Drama",
    genreID: 18
  },
  {
    genre: "Family",
    genreID: 10751
  },
  {
    genre: "Kids",
    genreID: 10762
  },
  {
    genre: "Mystery",
    genreID: 9648
  },
  {
    genre: "History",
    genreID: 36
  },
  {
    genre: "Romance",
    genreID: 10749
  },
  {
    genre: "Sci-Fi",
    genreID: 878
  },
  {
    genre: "Western",
    genreID: 37
  },
  {
    genre: "Horror",
    genreID: 27
  },
  {
    genre: "Adventure",
    genreID: 12
  }
];

function movieGenre() {
  selectedGenre = 80;
  console.log(selectedGenre);
  var genreID = parseInt(selectedGenre);
  // var APIKey = "1a0244fad68dbfa1e242e232ce4a493c"; //TMDB api
  var queryGenre =
    "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=" +
    genreID +
    "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"; //2020 most popular movies

  axios.get(queryGenre).then(function (res) {
    let results = res.data.results;
    results.forEach((res) => {
      var title = res.title;
      var overview = res.overview;
      var release = res.release_date;
      var rating = res.vote_average;
      var poster = res.poster_path;
      var genreID = res.genre_ids;

      console.log(title);
      console.log(overview);
      console.log(release);
      console.log(rating);
      console.log(poster);
      console.log(genreID);
    //   var el = document.createElement("h1");
    //   el.textContent = title;
    //   movie.append(el);
    });
  });
}

movieGenre();
