const User = require("../models/userModel");

const register = async (req, res, next) => {
     try {
          const request = {
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               password: req.body.password,
          };

          const user = await User.create(request);

          res.status(201).json({
               message: "User created successfully!",
               success: true,
               data: user,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = { register };
