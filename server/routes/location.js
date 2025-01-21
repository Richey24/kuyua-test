const express = require("express");
const { fetchLocations } = require("../controllers/LocationController");

const locationRouter = express.Router()

locationRouter.get("/", fetchLocations)

module.exports = locationRouter