const mongoose = require("mongoose");

const armorSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Rarity: {type: [String], enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], required: true },
    Material:{type: String, required: true },
    Stats1:{type: String, required: true },
    Stats2:{type: String, required: true },
    Stats3:{type: String, required: true },
    Hidden_Feature:{type: String, required: true },
    Quantity_Left:{type: String, required: true },
    Cost:{type: String, required: true }
});

const buyingArmor = mongoose.model('Armor',armorSchema);

module.exports = buyingArmor;