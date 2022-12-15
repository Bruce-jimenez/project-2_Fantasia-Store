const mongoose = require("mongoose");

const miscSchema = new mongoose.Schema({
    Img : { type: String, required: true},
    Name:  { type: String, required: true },
    Rarity: {type: [String], enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], required: true },
    Material:{type: String, required: true },
    Stats1:{type: String, required: true },
    Stats2:{type: String, required: true },
    Hidden_Feature:{type: String, required: true },
    Quantity_Left:{type: Number, required: true },
    Cost:{type: String, required: true }
});

const buyingMisc = mongoose.model('Miscellaneous',miscSchema);

module.exports = buyingMisc;