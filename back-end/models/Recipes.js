
var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    recipe: String,
    bio: String,
    cost: String,
    time: String,
    img: String,
    recipe_type: String
});
// ,{collection:"recipes"}



module.exports = mongoose.model('Recipe', RecipeSchema);