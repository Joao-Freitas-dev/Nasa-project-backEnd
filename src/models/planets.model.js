const path = require("path");
const { parse } = require("csv-parse");
const fs = require("fs");

const plannetsHabitables = [];

function isHabitable(planet) {
  return (
    planet["koi_disposition"] == "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kleper_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          plannetsHabitables.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve();
      });
  });
}

function getAllPlanets() {
  return plannetsHabitables;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
