import express = require('express');
let router = express.Router();
import Movie from '../models/Movie';





let movies = [  
  {director:'John Carpenter', title:'The Thing'},
  {director: 'Adam Sandler', title:'Happy Gilmore'},
  {director: 'Adam Sandler', title: 'Waterboy'},
  {director: 'Eli Roth', title: 'Hostel'}
    ];
Movie.find({}).remove(( ) => {
  movies.map((movie, key) => {
    Movie.create(movie);
    });
  });

/* GET movies */
router.get('/movies', function(req, res, next) {
  Movie.find().then((movies) => {
    res.json(movies)
  }).catch((err) => {
    console.log('WARNING:', err)
  })
});

/* GET movie by id */
router.get('/movies/:title', function(req, res, next) {
  Movie.find({title:req.params.title}).then((movies) => {
    res.json(movies);
  }).catch((err) => {
    console.log('NOOOOO', err);
  })
});

/* Post to create or update movie */
router.post('/movies', function(req, res, next) {
  let movie = req.body;
  // update existing movie
  if (movie._id) {
    Movie.update({_id:movie._id}, {title:movie.title, director:movie.director})
    .then((results) => {
      Movie.find().then((movies) => {
        res.json(movies);
      }).catch((err) => {
        console.log('gaaaah', err);
      });
    }).catch((err) => {
      console.log('meh', err);
    });
  // create new movie
  } else {
    Movie.create({title:movie.title, director:movie.director}).then((results) => {
      Movie.find().then((movies) => {
        res.json({data:movies});
      }).catch((err) => {
        console.log('rrrrgh', err);
      });
    }).catch((err) => {
      console.log('blech', err);
    });
  }
});

// /* delete movie by id */
// router.delete('/movies/:id', function(req, res, next) {
//   let id = parseInt(req.params['id']);
//   if (!findMovie(id)) {
//     res.sendStatus(404);
//   } else {
//     movies = movies.filter((movie)=> {
//       return movie.id != id;
//     });
//     res.sendStatus(200);
//   }
// });

/* find matching movies */
// router.get('/movies/search/:search', function(req, res, next) {
//     let search = req.params['search'];
//     let matches = movies.filter((movie)=>{
//       return movie.title.indexOf(search) == 0;
//     });
//     res.json(matches);
// });

export = router;