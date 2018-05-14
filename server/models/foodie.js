const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodieSchema = new Schema({
  category_title: String,
  category_subtitle: String,
  category_description: String
});

module.exports = mongoose.model('Foodie', FoodieSchema);