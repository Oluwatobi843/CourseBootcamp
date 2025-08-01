const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const Bootcamp = require('../models/Bootcamp');



// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(
  async (req, res, next) => {
 
    let query;

    const reqQuery = {...req.query };

    let queryStr = JSON.stringify(reqQuery);

      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = Bootcamp.find(JSON.parse(queryStr));

    
    const bootcamps = await query;

    res  
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });


}
)

// @desc Get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler( async  (req, res, next) => {
      
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp){
      next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );    
    }

    res.status(200).json({success: true, data: bootcamp});

});

// @desc Create a bootcamp
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = asyncHandler( async (req, res, next) => {
 
    // Add logged in user to req.body
    // req.body.user = req.user.id;

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
 
});

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler( async (req, res, next) => {

  
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    ); 
  }

  res.status(200).json({ success: true, data: bootcamp });

});

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler( async (req, res, next) => {
  
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
  
    if (!bootcamp) {
      next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      ); 
    }
  
    res.status(200).json({ success: true,  data: {} });
  
  });

// @desc Get a Bootcamp within a  radius
// @route Get /api/v1/bootcamps/radius/:zipcode/:distance
// @access Private
  exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
        const { zipcode, distance } = req.params;


        // Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude
    const lng = loc[0].longitude

    // Cal radius using radians

    // Divide distance by radius of the earth

    // Earth radius = 3,963 mi / 6,378 km

    const radius = distance / 3963;

    const bootcamps = await Bootcamp.find({
      location: { $geoWithin: { $centerSphere: [[ lng, lat], radius]}}
    });

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    })
  });

