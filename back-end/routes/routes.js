var express = require('express');
var path = require('path'); //had to add
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/Recipes.js');


router.get('/', function(req, res, next){
  res.render('index', {title: "Get Smokin'"})
});


router.get('/api/recipes', function(req, res, next) {
  Recipe.find(function (err, recipes) {
    if (err) return next(err);
    res.json(recipes);
  });
});


router.get('/api/recipes/all', function(req, res, next) {
  Recipe.find(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'All Recipes', recipes:recipes });
  });
});

router.get('/api/recipe/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (err) return next(err);
    // res.json(recipe);
    res.render('details', { title: 'Recipe Details', recipe });

  });
});

router.get('/api/recipes/chicken', function(req, res, next) {
  Recipe.find({recipe_type: "chicken"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Chicken Recipes', recipes:recipes });
  });
});


router.get('/api/recipes/beef', function(req, res, next) {
  Recipe.find({recipe_type: "beef"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Beef Recipes', recipes:recipes });
  });
});

router.get('/api/recipes/pork', function(req, res, next) {
  Recipe.find({recipe_type: "pork"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Pork Recipes', recipes:recipes });
  });
});

router.get('/api/recipes/fish', function(req, res, next) {
  Recipe.find({recipe_type: "fish"}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Fish Recipes', recipes:recipes });
  });
});

// router.get('/api/recipe/:recipe_id', function(req, res, next) {
//   Recipe.findById(req.params.recipe_id, function (err, recipe) {
//     if (err) return next(err);
//     // res.json(recipe);
//     res.render('all', { title: 'Selected Group', recipe });

//   });
// });




module.exports = router;