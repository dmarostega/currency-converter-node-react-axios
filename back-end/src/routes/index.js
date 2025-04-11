const express = require('express')
const router = express.Router();

const homeRoutes = require('./homeRoutes');
const exchangeRoutes = require('./apiExternaRoutes')

// router.use('/', homeRoutes)
// router.use ('/api-externa', exchangeRoutes)
router.use ('/api-externa', exchangeRoutes)

module.exports = router;