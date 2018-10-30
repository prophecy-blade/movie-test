//movie model
const mongoose = require('mongoose');
const db = 'mongodb://nicole:alastair666@ds141043.mlab.com:41043/nicolemovies';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connection error: ', error);
  });

//extract data type
const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
