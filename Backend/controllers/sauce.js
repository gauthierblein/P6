const Sauce = require('./models/sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({...req.body});
    thing.save()
        .then(() => {res.status(201).json({message: 'Nouvelle sauce enregistrée!'})})
        .catch((error) => {res.status(400).json({error: error})})
}
  
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }))
}
  
exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
        .catch(error => res.status(400).json({ error }))
}
  
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({_id: req.params.id})
        .then(() => {res.status(200).json({message: 'Sauce effacée!'})})
        .catch((error) => {res.status(400).json({error: error})})
};
  
exports.getAllSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};
