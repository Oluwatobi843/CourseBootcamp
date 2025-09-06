const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
   title: {
      type: String,
      trim: true,
      required: [true, 'Please add a title for the review'],
      maxlength: 100

    },
    
    text: {
      type: String,
      required: [true, 'Please add some text']
    },

    rating: {
      type: Number,
      min: 1,
      max: 10,
      required: [true, 'Please add number of weeks']
    },
    tuition: {
      type: Number,
      required: [true, 'Please add a tuition cost']
    },
    minimumSkill: {
      type: String,
      required: [true, 'Please add a minimum skill'],
      enum: ['beginner', 'intermediate', 'advanced']
    },
    scholarshipAvailable: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    bootcamp: {
      type: mongoose.Schema.ObjectId,
      ref: 'Bootcamp',
      required: true
    },
    
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
  });

  module.exports = mongoose.model('Review', ReviewSchema);
  