const launches = new Map();
let lastFlight = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("Dezembro 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["Nasa", "MSZ"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  lastFlight++;
  launches.set(
    lastFlight,
    Object.assign(launch, {
      customer: ["Nasa", "Jotape"],
      success: true,
      upcoming: true,
      flightNumber: lastFlight,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
