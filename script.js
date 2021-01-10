// var genreOption;
var fname = $("#fname");
// var selectedGenre;
// var selectedMusicGenre;
// var keyword;
// var movieID;
// var randomID = "";
var genreCategory = [{
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
]





// Queries movies based on genre selection
function movieGenre() {
    // event.preventDefault();
    // selectedGenre = $("#genreDropDown").children("option:selected").val();
    selectedGenre = 80;
    console.log(selectedGenre);
    var genreID = parseInt(selectedGenre);
    // var APIKey = "1a0244fad68dbfa1e242e232ce4a493c"; //TMDB api
    var queryGenre = "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=" + genreID + "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"; //2020 most popular movies
    $.ajax({
        url: queryGenre,
        method: "GET"
    }).then(function(response) {
        // var st = Math.floor(Math.random() * 14);
        // var end = st + 5;
        // for (var i = st; i < end; i++) {
        //     // console.log(response.results[i].title);
        //     var poster = response.results[i].poster_path;
        //     var imgURL = "https://image.tmdb.org/t/p/w500" + poster;
        //     var genreID = response.results[i].genre_ids;

        //     var newDiv = $("<div>");
        //     var br = $("<br>");
        //     $("#movieInfoHere").append(newDiv);
        //     $("#movieInfoHere").append(br);
        //     var movieTitle = $("<h2>").text(response.results[i].title);
        //     newDiv.append(movieTitle);
        //     var movieSummary = $("<p>").text(response.results[i].overview);
        //     newDiv.append(movieSummary);
        //     newDiv.append(br);
        //     var poster = $("<img>").attr("src", imgURL);
        //     $("#moviePosterHere").append(poster);
        //     $("#moviePosterHere").append(br);

        // }
        console.log(response);
    });
}

movieGenre();

// // Queries trending movies in 2020 and randomly selects out of the list of arrays
// $("#movieRandom").on("click", function() {
//     event.preventDefault();
//     $("#moviePosterHere").empty();
//     $("#movieInfoHere").empty();
//     $("#movieMaster").show();
//     $("#movieMaster").children().show();
//     musicGenre();
//     var APIKey = "1a0244fad68dbfa1e242e232ce4a493c"; //TMDB api
//     var queryTrends = "https://api.themoviedb.org/3/trending/all/day?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
//     $.ajax({
//         url: queryTrends,
//         method: "GET"
//     }).then(function(response) {
//         var st = Math.floor(Math.random() * 18);
//         var end = st + 5;
//         for (var i = st; i < end; i++) {
//             // console.log(response.results[i].title);
//             var poster = response.results[i].poster_path;
//             var imgURL = "https://image.tmdb.org/t/p/w500" + poster;
//             var genreID = response.results[i].genre_ids;

//             var newDiv = $("<div>");
//             $("#movieInfoHere").append(newDiv);

//             var movieTitle = $("<h2>").text(response.results[i].title);
//             newDiv.append(movieTitle);
//             var movieSummary = $("<p>").text(response.results[i].overview);
//             newDiv.append(movieSummary);
//             var poster = $("<img>").attr("src", imgURL);
//             $("#moviePosterHere").append(poster);

//         }
//         console.log(response);
//     });
// });
