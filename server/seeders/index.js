require("dotenv").config();
const { Plant } = require("../models");

const db = require("../config/connection");

const plantSeed = require("./plantsSeeds.json");
//seed the database and display "alldone" when it is done
const run = async () => {
  await Plant.deleteMany();
  await Plant.insertMany(plantSeed);
  console.log("ALL DONE");

};

db.once("open", () => {
  run();
});
