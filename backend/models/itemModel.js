const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
  },
    title: String,
    description: String,
    image: String,
  },{
    timestamps: true,
  });


  module.exports = mongoose.model("Item", ItemSchema);