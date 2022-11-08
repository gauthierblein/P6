const mongoose = require("mongoose");
/* PlugIn pour empêcher les attaques par injection */
const sanitizerPlugin = require('express-mongo-sanitize');


const sauceSchema = mongoose.Schema({

  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  usersDisliked: [{ type: String }],
});

sauceSchema.plugin(sanitizerPlugin);


module.exports = mongoose.model("Sauce", sauceSchema);