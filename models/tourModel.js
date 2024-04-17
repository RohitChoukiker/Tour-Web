const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A tour must have name"],
    unique: true,
  },

  duration: {
    type: Number,
    required: [true, " A tour must have duration"],
  },

  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have group size"],
  },

  difficulty: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  rateQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    require: [true, "A tour must have price"],
  },

  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have summary"],
  },

imageCover:{
  type: String,
  required:[true,'a tour must have cover image']
},

images:[String],

createdAt:{
  type: Date,
  default:Date.now()
},
starDate:[Date]

});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
