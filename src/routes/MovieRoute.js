const express = require('express');
const router = express.Router();
const controller = require('../controllers/MovieController');

/** GET all film. */
router.get('/', controller.getAll); //doit etre public
/** GET a film. */
router.get('/:id', controller.getOne); //doit etre public
/** POST a film */
router.post('/', controller.createOne);
/** PUT a film */
router.put('/:id', controller.updateOne);
/** DELETE a film */
router.delete('/:id', controller.deleteOne);


/** export all functions */
module.exports = router;
