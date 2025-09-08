const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load our env 
dotenv.config({ path: './config/config.env'});

// Load our model
const  Bootcamp = require('./models/Bootcamp');
const  Course = require('./models/Course');
const User  = require('./models/User');
const Review  = require('./models/Review');

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read the JSON file
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/_data/reviews.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
      await Bootcamp.create(bootcamps);
      await Course.create(courses);
      await User.create(users);
      await Review.create(reviews);

      console.log('Data Imported...'.green.inverse);
  } catch (err) {
    console.error(err);
  }
}
    
// Delete Data
const deleteData = async () => {
  try {
      await Bootcamp.deleteMany();
      await Course.deleteMany();
      await User.deleteMany();
      await Review.deleteMany();

      console.log('Data Destroyed...'.red.inverse);
  } catch (err) {
    console.error(err);    
  }
}
 

// function
if(process.argv[2] === '-i'){
  importData();
}else if (process.argv[2] === '-d'){
  deleteData();
}
      
