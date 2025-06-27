const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load our env 
dotenv.config({ path: './config/config.env'});

// Load our model
const  Bootcamp = require('./model/Bootcamp');

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read the JSON file
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
      await Bootcamp.create(bootcamps);

      console.log('Data Imported....'.green.inverse);
  } catch (err) {
    console.error(err);
  }
}

// Delete Data
const deleteData = async () => {
  try {
      await Bootcamp.deleteMany();

      console.log('Data Destroy....'.red.inverse);
  } catch (err) {
    console.error(err);
  }
}

if(process.argv[2] === '-i'){
  importData();
}else if (process.argv[2] === '-d'){
  deleteData();
}

