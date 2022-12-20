require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// const frontpg = require("./models/main")
const methodOverride = require('method-override');
 const buyingArmor = require("./models/Armor");
 const buyingWeapons = require("./models/Weapons");
 const buyingMisc = require("./models/Miscellaneous");


app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
app.use(express.static(__dirname + '/public/'));
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

//Introduced the schema to the databases

// const firstItem = {
//     Img:"image.png",
//     Name:"Makeshift potion",
//     Rarity:'common',
//     Material:"clear potion with some mushrooms",
//     Stats1:"+1 attack",
//     Stats2:"+1 healing factor",
//     Stats3:"+1 speed",
//     Hidden_Feature:"With another item i can be used for the entire party",
//     Quantity_Left:4,
//     Cost:" 4 Bronze",
// }

//   buyingMisc.create(firstItem)
///////////////////////////////

///////////////////////
//Main Page (A home page to direct to each different part of the store)

// app.get("/MainPG", (req, res) =>{
//    res.render("Main");
// });


app.get("/", (req, res) =>{
   res.show("Nothing");
});


//////////////////////
//Index for Armory, Weaponry, Item Shelf
app.get("/Armor", (req, res) =>{
    buyingArmor.find({}, (error, allArmor) => {
        res.render("IndexA", {
            Armor: allArmor
        });
    });
});

app.get("/Weapons", (req, res) =>{
    buyingWeapons.find({}, (error, allWeapons) => {
        res.render("IndexW", {
            Weapons: allWeapons
        });
    });
});

app.get("/Miscellaneous", (req, res) =>{
    buyingMisc.find({}, (error, allMiscellaneous) => {
        res.render("IndexM", {
            Miscellaneous: allMiscellaneous
        });
    });
});



//////////////////////
//New route for Armory, Weaponry, Item Shelf

app.get("/Armor/NewA", (req, res) =>{
    res.render("NewA");
});

app.get("/Weapons/NewW", (req, res) =>{
    res.render("NewW");
});

app.get("/Miscellaneous/NewM", (req, res) =>{
    res.render("NewM");
});



//////////////////////
//Delete Route for Armory, Weaponry, Item Shelf
app.delete('/Armor/:id', (req, res) =>{
    buyingArmor.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/Armor');
    });
});

app.delete('/Weapons/:id', (req, res) =>{
    buyingWeapons.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/Weapons');
    });
});

app.delete('/Miscellaneous/:id', (req, res) =>{
    buyingMisc.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/Miscellaneous');
    });
});



///////////////////////
//Update Route for Armory, Weaponry, Item Shelf
app.put('/Armor/:id', (req, res) =>{
    buyingArmor.findByIdAndUpdate(req.params.id, req.body, (err, updateArmor)=>{
        res.redirect(`/Armor/${req.params.id}`);
    });
});

app.put('/Weapons/:id', (req, res) =>{
    buyingWeapons.findByIdAndUpdate(req.params.id, req.body, (err, updateWeapons)=>{
        res.redirect(`/Weapons/${req.params.id}`);
    });
});

app.put('/Miscellaneous/:id', (req, res) =>{
    buyingMisc.findByIdAndUpdate(req.params.id, req.body, (err, updateMisc)=>{
        res.redirect(`/Miscellaneous/${req.params.id}`);
    });
});



/////////////////////////
//Create Route for Armor, Weaponry, Item Shelf
app.post("/Armor", (req, res) =>{
    buyingArmor.create(req.body, (err, forgedArmor) =>{
        res.redirect("/Armor");
    });
});

app.post("/Weapons", (req, res) =>{
    buyingWeapons.create(req.body, (err, forgedWeapon) =>{
        res.redirect("/Weapons");
    });
});

app.post("/Miscellaneous", (req, res) =>{
    buyingMisc.create(req.body, (err, createdItem) =>{
        res.redirect("/Miscellaneous");
    });
});



/////////////////////////
//Edit Route for Armor, Weaponry, Item Shelf
app.get("/Armor/:id/edit", (req, res) =>{
    buyingArmor.findById(req.params.id, (err, foundArmor)=>{
        if(!err){
            res.render('EditA', {Armor: foundArmor});
        } else {
    res.send({msg: err.message})
    }
    });
});

app.get("/Weapons/:id/edit", (req, res) =>{
    buyingWeapons.findById(req.params.id, (err, foundWeapon)=>{
        if(!err){
            res.render('EditW', {Weapons: foundWeapon});
        } else {
    res.send({msg: err.message})
    }
    });
});

app.get("/Miscellaneous/:id/edit", (req, res) =>{
    buyingMisc.findById(req.params.id, (err, foundItem)=>{
        if(!err){
            res.render('EditM', {Miscellaneous: foundItem});
        } else {
    res.send({msg: err.message})
    }
    });
});


/////////////////////
// Show Route for Armory, Weaponry, Item Shelf
app.get("/Armor/:id", function (req, res) {
    buyingArmor.findById(req.params.id, (err, foundArmor) =>{
        res.render("ShowA", {Armor: foundArmor});
    });
});

app.get("/Weapons/:id", function (req, res) {
    buyingWeapons.findById(req.params.id, (err, foundWeapon) =>{
        res.render("ShowW", {Weapons: foundWeapon});
    });
});

app.get("/Miscellaneous/:id", function (req, res) {
    buyingMisc.findById(req.params.id, (err, foundItem) =>{
        res.render("ShowM", {Miscellaneous: foundItem});
    });
});


///////////////////
//End
app.listen(port, () => {
    console.log("listening");
  });