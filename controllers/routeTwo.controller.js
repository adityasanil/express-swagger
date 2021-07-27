const AppError = require('../utils/AppError.util');
const catchAsyncErr = require('../utils/catchAsync.util');

exports.checkId = (req, res, next, id) => {
  // Perform checks here if an document with id is present or not
  console.log(`Id is ${id}`);
  next();
};

// Get route two
exports.getRouteTwo = catchAsyncErr((req, res, next) => {
  // const newObj = Object.assign({ id: newId }, req.body.obj);

  // next(new AppError('Invalid', 400))

  res.status(200).json({
    status: "success",
    data: {
      message: "Route two",
    },
  });
});

// Get id param from route
exports.getRouteTwoId = catchAsyncErr((req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    status: "success",
    data: {
      id,
    },
  });
});
