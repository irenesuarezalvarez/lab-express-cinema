const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movie.model');//needed?
 

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find({}, (err, movies)=>{
        if(err){
            console.log(err)
        }else{
            console.log('aqui', movies);
            res.render('movies', { movies })
        }
        
    })
   // res.render('movies')
});


module.exports = router;
