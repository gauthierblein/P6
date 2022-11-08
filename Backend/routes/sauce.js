const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const saucesCtrl = require('../controllers/sauce');



//Créer et modifier les sauces
router.get('/', auth, saucesCtrl.getAllSauce);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);

//Ajouter et enlever likes et dislikes
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;