var express = require('express');
var router = express.Router();
const usersControllers = require("../controllers/usersController");
 

router.get('/', usersControllers.get_users);

router.get('/add', usersControllers.show_add_user_form);
router.post('/add', usersControllers.add_user);

router.get("/:id/delete", usersControllers.delete_user)

router.get("/:id/:firstName/:lastName/update", usersControllers.show_update_user_form);
router.post("/:id/update", usersControllers.update_user);

module.exports = router;

