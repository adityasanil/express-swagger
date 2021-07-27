const User = require("../models/user.model");

// Get route one
exports.getRouteOne = async (req, res) => {
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];

  excludedFields.forEach((el) => delete queryObj[el]);
  console.log(queryObj);
  try {
    const users = await User.find(queryObj);
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.send(404).json({
      status: "fail",
      message: "Invalid",
    });
  }
};

// Post user name to route one
exports.postRouteOne = async (req, res) => {
  const userName = req.body;

  // const name = new User(username);
  // name.save()  // Model.prototype.save()

  try {
    const user = await User.create(userName);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data",
    });
  }
};

// Get id param from route
exports.getRouteOneId = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.send(404).json({
      status: "fail",
      message: "User not found",
    });
  }
};

// // Perform checks here if an document with id is present or not
// exports.checkId = (req, res, next, id) => {
//   console.log(`Id is ${id}`);
//   next();
// };

// // Validate post request
// exports.validatePostRouteOne = (req, res, next) => {
//   if (!req.body.name || !req.body.surename) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Missing name or surename",
//     });
//   }
//   next();
// };
