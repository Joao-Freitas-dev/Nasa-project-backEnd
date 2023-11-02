const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  LaunchDate: new Date("Dezembro 27, 2030"),
  destionation: "Kepler-442 b",
  customer: ["Nasa", "MSZ"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
