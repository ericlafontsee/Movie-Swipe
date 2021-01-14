var movieTitle = document.querySelector("#movieTitle");
var rightBtn = document.querySelector("#right");
var leftBtn = document.querySelector("#left");
let i = 0;
var newh1 = document.createElement("h1");
var img = document.createElement("img");
var pEl = document.createElement("p");
var pEl2 = document.createElement("p");
var pEl3 = document.createElement("p");
var queueEl = document.createElement("p");
let queue;
let results;

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

function init() {
  getMovies();
  movieSearch();
}

function getMovies() {
  queue = JSON.parse(localStorage.getItem("queue"));
  if (!queue) queue = [];
  // return queue;
  renderQueue();
}

function renderQueue() {
  queueEl.textContent = queue;
  movieTitle.append(queueEl);
}

function movieSearch() {
  selectedGenre = 80;
  var genreID = parseInt(selectedGenre);
  // var APIKey = "1a0244fad68dbfa1e242e232ce4a493c"; //TMDB api
  queryGenre =
    "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=" +
    genreID +
    "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"; //2020 most popular movies

  fetch(queryGenre)
    .then((response) => response.json())
    .then((data) => {
      results = data.results;

      var title = results[i].title;
      var overview = results[i].overview;
      var release = results[i].release_date;
      var rating = results[i].vote_average;
      var poster = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
      //   var genreID = res.genre_ids;

      newh1.textContent = title;
      img.setAttribute("src", poster);
      pEl.textContent = "DESCRIPTION: " + overview;
      pEl2.textContent = "RELEASED: " + release;
      pEl3.textContent = "RATING: " + rating;

      movieTitle.append(newh1);
      movieTitle.append(img);
      movieTitle.append(pEl);
      movieTitle.append(pEl2);
      movieTitle.append(pEl3);
    });
}

rightBtn.addEventListener("click", () => {
  results.splice(0);
  console.log(results[i]);
  i++;

  movieSearch();
  queue.push(newh1.textContent);
  localStorage.setItem("queue", JSON.stringify(queue));
});

leftBtn.addEventListener("click", () => {
  i > 0 ? i-- : (i = results.length - 1);
  movieSearch();
});

init();

//user types in a genre they are looking for
//user hits enter
//event listener takes input and makes api get request
//the results are displayed one at a time
//user hits left or right button
//if left, discard, if right, save as object in an array
//compare simulatneously, the other user's saves. if match, alert user
