const express = require("express");
const router = express.Router();

const routeTwoController = require("../controllers/routeTwo.controller");

router.param("id", routeTwoController.checkId);

router.route("/").get(routeTwoController.getRouteTwo);
router.route("/:id").get(routeTwoController.getRouteTwoId);

module.exports = router;
