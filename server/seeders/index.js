require("dotenv").config();
const { Plant } = require("../models");
// console.log(process.env.NODE_ENV);
const db = require("../config/connection");

const plantSeed = require("./plantsSeeds.json");

const run = async () => {
  await Plant.deleteMany();
  await Plant.insertMany(plantSeed);
  console.log("ALL DONE");
  //process.exit();
};

db.once("open", () => {
  run();
});
