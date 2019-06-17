// Our router module
const router = require('express').Router();

// Our controller
const ResourcesController = require('../controllers/resourcesController');

// Your routes
router.get( '/', resourcesController.index );

router.get( '/:id', resourcesController.show );

router.get( '/new', resourcesController.new );

router.get( '/:id/edit', resourcesController.edit );

router.post( '/', resourcesController.create );

router.post( '/:id', resourcesController.update );

router.post( '/:id/destroy', resourcesController.destroy );

// We have to export our changes
module.exports = router;