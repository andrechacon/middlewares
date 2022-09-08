const express = require("express")
const router = express.Router()

const logMiddleware = require('../middlewares/userLogs')
const userAdmin = require('../middlewares/adminUser')

const mainController = require("../controllers/mainController")

router.get('/', logMiddleware, mainController.index);
router.get('/login', logMiddleware,mainController.login);
router.get('/admin', userAdmin, logMiddleware ,mainController.admin)

module.exports = router