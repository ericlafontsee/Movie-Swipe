// const axios = require("axios");
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

//   axios.get(queryGenre)
  $.ajax({
    url: queryGenre,
    method: "GET"
}).then(function (res) {
    var results = res.results;
    console.log(res);
    for(var i = 0; i < results.length; i++){
      var title = results[i].title;
      var overview = results[i].overview;
      var release = results[i].release_date;
      var rating = results[i].vote_average;
      var poster = results[i].poster_path;
    //   var genreID = res.genre_ids;
      
      var newDiv = $("<div>");
      newDiv.text(title);

      $("#movieTitle").append(newDiv);

    }
  });
}

movieGenre();
