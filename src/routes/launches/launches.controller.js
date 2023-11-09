const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpaddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res
      .status(400)
      .json({ error: "campos obrigatórios ausentes e/ou incorretos" });
  }
  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "O campo Data está incorreto, por favor digite uma data válida",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}
module.exports = {
  httpGetAllLaunches,
  httpaddNewLaunch,
};
