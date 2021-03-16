var express = require('express');
var router = express.Router();
const usersControllers = require("../controllers/usersController");
 

router.get('/', usersControllers.get_users);

router.get('/add', usersControllers.show_add_user_form);
router.post('/add', usersControllers.add_user);


module.exports = router;

