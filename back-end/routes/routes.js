var express = require('express');
var path = require('path'); //had to add
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/Recipes.js');


router.get('/', function(req, res, next){
  res.render('index', {title: 'Welcome'})
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
    res.render('all', { title: 'Showing All Recipes', recipes:recipes });
  });
});


router.get('/api/recipes/chicken', function(req, res, next) {
  Recipe.find({}).sort({'recipe_id': 1}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Chicken Recipes', recipes:recipes });
  });
});


router.get('/api/recipes/beef', function(req, res, next) {
  Recipe.find({'recipe_id': 1}).sort({}).exec(function (err, recipes) {
    if (err) return next(err);
    res.render('all', { title: 'Chicken Recipes', recipes:recipes });
  });
});


router.get('/api/recipe/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (err) return next(err);
    // res.json(recipe);
    res.render('details', { title: 'Recipe Details', recipe });

  });
});


module.exports = router;