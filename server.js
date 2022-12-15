require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const frontpg = require("./models/main")
const methodOverride = require('method-override');

//This is after i make the main page functional
 const Armor = require("./models/Armor");
 const Weapons = require("./models/Weapons");
 const Misc = require("./models/Miscellaneous");


app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

//Jsx engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
                 useNewUrlParser: true,
                 useUnifiedTopology: true,
  });
  
  mongoose.connection.once("open", () => {
    console.log("Mongo Connection Established");
  });
























  
//End
app.listen(port, () => {
    console.log("listening");
  });