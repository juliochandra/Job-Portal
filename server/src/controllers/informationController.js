const informationService = require("../services/informationService");

const createInformation = async (req, res, next) => {
     try {
          const request = {
               noHp: req.body.noHp,
               address: req.body.address,
               birthday: req.body.birthday,
               userId: req.user.id,
          };

          const response = await informationService.createInformation(
               request
          );

          res.status(201).json({
               message: "Information created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = { createInformation };
