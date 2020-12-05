// Creates a express server.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/user");

// Declaring Routes in the server.
const userRoutes = require("./routes/userRoutes");

// Creates an express server.
const app = express();

//Data base
mongoose.connect(process.env.db_connection,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`connection errr: ${err.message}`);
  });

// Configurations.
// Setting the engine view which contains the the pug & Html files.
app.set("view engine", "pug");
app.set("views", "./views");

// Insta & Middlewares.
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Instations for routes
app.use("/", userRoutes);

// And end point that doesnt exist.
app.get("*", (req, ress) => {
  ress.send("error");
});

// Listening for requests: the server.
app.listen(2500, () => {
  console.log("Listening on port 2500");
});
