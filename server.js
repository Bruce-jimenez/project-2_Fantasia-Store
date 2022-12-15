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

const firstArmor = {
    Img:"https://mcishop.azureedge.net/mciassets/0061324_leather-body-armour_300.png",
    Name:"Basic Leather Set",
    Rarity:0,
    Material:"Cow Hide",
    Stats1:"+2 Defense",
    Stats2:"+1 Dexterity",
    Stats3:"None",
    Hidden_Feature:"Slightly More Durable",
    Quantity_Left:3,
    Cost:"2 Bronze",
}

  buyingArmor.create(firstArmor)


///////////////////////
//Main Page (A home page to direct to each different part of the store)

app.get("/MainPG", (req, res) =>{
   res.render("Main");
});


//////////////////////
//Index for Armory, Weaponry, Item Shelf
app.get("/MainPG/Armor", (req, res) =>{
    buyingArmor.find({}, (error, allArmor) => {
        res.render("IndexA", {
            Armor: allArmor
        });
    });
});

app.get("/MainPG/Weapons", (req, res) =>{
    buyingWeapons.find({}, (error, allWeapons) => {
        res.render("IndexW", {
            Weapons: allWeapons
        });
    });
});

app.get("/MainPG/Miscellaneous", (req, res) =>{
    buyingMisc.find({}, (error, allMisc) => {
        res.render("IndexM", {
            Misc: allMisc
        });
    });
});



//////////////////////
//New route for Armory, Weaponry, Item Shelf

app.get("/MainPG/Armor/New", (req, res) =>{
    res.render("NewA");
});

app.get("/MainPG/Weapons/New", (req, res) =>{
    res.render("NewW");
});

app.get("/MainPG/Miscellaneous/New", (req, res) =>{
    res.render("NewM");
});



//////////////////////
//Delete Route for Armory, Weaponry, Item Shelf
app.delete('/MainPG/Armor/:id', (req, res) =>{
    buyingArmor.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/MainPG/Armor');
    });
});

app.delete('/MainPG/Weapons/:id', (req, res) =>{
    buyingWeapons.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/MainPG/Weapons');
    });
});

app.delete('/MainPG/Miscellaneous/:id', (req, res) =>{
    buyingMisc.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/MainPG/Miscellaneous');
    });
});



///////////////////////
//Update Route for Armory, Weaponry, Item Shelf
app.put('/MainPG/Armor/:id', (req, res) =>{
    buyingArmor.findByIdAndUpdate(req.params.id, req.body, (err, updateArmor)=>{
        res.redirect(`/MainPG/Armor/${req.params.id}`);
    });
});

app.put('/MainPG/Weapons/:id', (req, res) =>{
    buyingWeapons.findByIdAndUpdate(req.params.id, req.body, (err, updateWeapons)=>{
        res.redirect(`/MainPG/Weapons/${req.params.id}`);
    });
});

app.put('/MainPG/Miscellaneous/:id', (req, res) =>{
    buyingMisc.findByIdAndUpdate(req.params.id, req.body, (err, updateMisc)=>{
        res.redirect(`/MainPG/Miscellaneous/${req.params.id}`);
    });
});



/////////////////////////
//Create Route for Armor, Weaponry, Item Shelf
app.post("/MainPG/Armor", (req, res) =>{
    buyingArmor.create(req.body, (err, forgedArmor) =>{
        res.redirect("/MainPG/Armor");
    });
});

app.post("/MainPG/Weapons", (req, res) =>{
    buyingWeapons.create(req.body, (err, forgedWeapon) =>{
        res.redirect("/MainPG/Weapons");
    });
});

app.post("/MainPG/Miscellaneous", (req, res) =>{
    buyingMisc.create(req.body, (err, createdItem) =>{
        res.redirect("/MainPG/Miscellaneous");
    });
});



/////////////////////////
//Edit Route for Armor, Weaponry, Item Shelf
app.get("/MainPG/Armor/:id/edit", (req, res) =>{
    buyingArmor.findById(req.params.id, (err, foundArmor)=>{
        if(!err){
            res.render('EditA', {Armor: foundArmor});
        } else {
    res.send({msg: err.message})
    }
    });
});

app.get("/MainPG/Weapons/:id/edit", (req, res) =>{
    buyingWeapons.findById(req.params.id, (err, foundWeapon)=>{
        if(!err){
            res.render('EditW', {Weapons: foundWeapon});
        } else {
    res.send({msg: err.message})
    }
    });
});

app.get("/MainPG/Miscellaneous/:id/edit", (req, res) =>{
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
app.get("/MainPG/Armor/:id", function (req, res) {
    buyingArmor.findById(req.params.id, (err, foundArmor) =>{
        res.render("ShowA", {Armor: foundArmor});
    });
});

app.get("/MainPG/Weapons/:id", function (req, res) {
    buyingWeapons.findById(req.params.id, (err, foundWeapon) =>{
        res.render("ShowW", {Weapons: foundWeapon});
    });
});

app.get("/MainPG/Miscellaneous/:id", function (req, res) {
    buyingMisc.findById(req.params.id, (err, foundItem) =>{
        res.render("ShowM", {Miscellaneous: foundItem});
    });
});


///////////////////
//End
app.listen(port, () => {
    console.log("listening");
  });