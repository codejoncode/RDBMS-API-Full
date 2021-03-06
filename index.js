const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const cohortsRoutes = require("./routes/cohortsRouter.js");
const studentRoutes = require("./routes/studentsRouter.js");

server.use(express.json());
server.use(helmet());
server.use(morgan("short"));
server.use(cors());

//use routes
const cohorts = "/api/cohorts";
server.use(cohorts, cohortsRoutes);

const students = "/api/students";
server.use(students, studentRoutes);

server.get("/", (req, res) => {
  res.send("API STARTED");
});

const PORT = 9000;
server.listen(PORT);
