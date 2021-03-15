var express = require('express');
var router = express.Router();
const usersControllers = require("../controllers/usersController");
/* GET users listing. */
router.get('/', usersControllers.get_users);
router.get('/add', usersControllers.add_user);

module.exports = router;
