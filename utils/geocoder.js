// const NodeGeocoder = require('node-geocoder');

// const options = {
//   provider: process.env.GEOCODER_PROVIDER,
//   httpAdapter: 'https',
//   apiKey: process.env.GEOCODER_API_KEY,
//   formatter: null
// }

// const geocoder = NodeGeocoder(options);

// module.exports = geocoder;

// const NodeGeocoder = require("node-geocoder");

// const options = {
//   provider: process.env.GEOCODER_PROVIDER,
//   apiKey: process.env.GEOCODER_API_KEY,
// };

// const geocoder = NodeGeocoder(options);

// async function geocodeAddress(address) {
//   const res = await geocoder.geocode(address);
//   return res[0];
// }

// async function reverseGeocode(lat, lon) {
//   const res = await geocoder.reverse({ lat, lon });
//   return res[0];
// }

// module.exports = {
//   geocodeAddress,
//   reverseGeocode,
// };
const NodeGeocoder = require("node-geocoder");
require("dotenv").config(); // If you're using .env for your API key

const options = {
  provider: "opencage",
  apiKey: process.env.GEOCODER_API_KEY, // or hardcode your key for testing
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
