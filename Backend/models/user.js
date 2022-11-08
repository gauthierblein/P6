const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
/* PlugIn pour empêcher les attaques par injection */
const sanitizerPlugin = require('express-mongo-sanitize');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Veuillez entrer votre adresse email"],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"]
    },
  password: {
    type: String,
    required: [true, "Veuillez choisir un mot de passe"] 
    }
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(sanitizerPlugin);

module.exports = mongoose.model('User', userSchema);