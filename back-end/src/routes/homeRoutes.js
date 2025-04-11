const Router = require('express');
const router = Router();
const homeController = require('../controllers/homeController')

router.use('/', homeController.getHome);
module.exports = router;

