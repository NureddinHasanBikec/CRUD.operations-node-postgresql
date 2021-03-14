var express = require('express');
var router = express.Router();
const usersControllers = require("../controllers/usersController");
/* GET users listing. */
router.get('/', usersControllers.get_users);

module.exports = router;
