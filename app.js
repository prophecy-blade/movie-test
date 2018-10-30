const express = require('express');
const app = express();
const axios = require('axios');
const Movie = require('./Movie');
const bodyParser = require('body-parser');
const apikey = '385e80';

//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//create an api
//localhost:5000/getmovie?title=YourMovieTitle
app.get('/getmovie', (req, res) => {
  const title = req.query.title;
  const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

  axios
    .get(querystr)
    .then(response => {
      //create new obj
      const movie = new Movie({
        title: response.data.Title,
        year: response.data.Year,
        genre: response.data.Genre,
        actors: response.data.Actors,
        plot: response.data.Plot,
        poster: response.data.Poster
      }); //obj ends here
      if (!movie.title) {
        res.status(200).json('Not found');
        return;
      }
      movie
        .save()
        .then(response => {
          res.status(200).json(response);
        })
        .catch(error => {
          res.status(400).json(error);
        });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

////add two parameter (name,value)
//localhost:5000/create?name=YourName&value=YourValue
app.get('/create', (req, res) => {
  //extract parameter
  const data = new Data({
    name: req.query.name,
    value: req.query.value
  });

  data
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//localhost:5000/getallmovies
app.get('/getallmovies', (req, res) => {
  Movie.find({})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//localhost:5000/getalldata
app.get('/getalldata', (req, res) => {
  Data.find({}).then(response => {
    res.status(200).json(response);
  });
});

//localhost:5000/deletemovie?title=MovieTitle
app.get('/deletemovie', (req, res) => {
  Movie.deleteMany({ title: req.query.title })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

//localhost:5000/postcreate
app.post('/postcreate', (req, res) => {
  const data = new Data({
    name: req.body.name,
    value: req.body.value
  });
  data
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
