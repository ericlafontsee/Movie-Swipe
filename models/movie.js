const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({

  title: { type: String,  },
  posterImage: { type: String,  },
  backdropImage: { type: String, },
  description: { type: String,  },
  rating: { type: Number,  },
  reviewCount: { type: Number,  },
  release: { type: Date,  },
  genre: { type: String,  }
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;


// title
// posterImage
// backdropImage
// description
// rating
// reviewCount
// release
// genre


