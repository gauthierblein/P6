const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');



//Créer et modifier les sauces
router.get('/', saucesCtrl.getAllSauce);
router.post('/', saucesCtrl.createSauce);
router.get('/:id', saucesCtrl.getOneSauce);
router.put('/:id', saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);


module.exports = router;