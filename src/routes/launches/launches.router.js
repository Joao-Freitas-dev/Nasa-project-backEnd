const express = require("express");
const {
  httpGetAllLaunches,
  httpaddNewLaunch,
} = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpaddNewLaunch);

module.exports = launchesRouter;
