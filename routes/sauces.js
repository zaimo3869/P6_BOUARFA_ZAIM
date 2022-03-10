const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');
const authentification = require('../middleware/authentification');
const multer = require('../middleware/multer')

router.get('/', saucesCtrl.getAllSauces);
router.get('/:id',authentification, saucesCtrl.getOneSauce);
router.post('/',authentification,multer, saucesCtrl.createSauce);
router.put('/:id',multer, saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);
router.post('/:id/like', authentification ,saucesCtrl.likeDislike);

module.exports = router;