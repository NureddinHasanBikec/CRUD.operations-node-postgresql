const UserModel = require("../models/User");

  // Get users from db

exports.get_users = async (req, res, next) => {


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
  };

  // Update user

  exports.show_update_user_form = (req, res) => {
    id= req.params.id,
    firstName= req.params.firstName,
    lastName= req.params.lastName,
    res.render("updateUser", {id, firstName, lastName})
  };
  
  exports.update_user = async (req, res) => {
    try {
      await UserModel.update(
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        },
        {where: {
          id: req.params.id,
        }}
      );
      res.redirect("/users");
    } catch (error) {
      console.log("error",error);
    }
  }
  