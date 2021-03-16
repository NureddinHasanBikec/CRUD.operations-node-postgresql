const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {

  // Get users from db

  try {
    const userList = await UserModel.findAll()
    console.log("User List: ", userList)
    res.render("users", {userList});
  } catch (error) {
    res.send("An error occured");
  }
  }

  // On get request

  exports.show_add_user_form = (req, res) => {
    res.render("addUser")
  };

  // On postrequest

  exports.add_user = async (req, res) => {
    try {
     const newUser = await UserModel.create({
       firstName: req.body.firstName,
       lastName: req.body.lastName
     })
     res.redirect("/users")
      
    } catch (error) {
      res.send("An error occured.")
    }
  };

  // On delete request

  exports.delete_user = async (req, res) => {
    try {
      await UserModel.destroy({
        where: {
          id: req.params.id
        }
      })
     res.redirect("/users")

    } catch (error) {
        res.send("An error occured.")      
    }
  }