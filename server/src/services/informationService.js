const informationRepository = require("../repositories/informationRepository");
const validation = require("../utilities/validation");
const informationValidation = require("../validations/informationValidation");
const ResponseError = require("../utilities/responseError");

const createInformation = async (request) => {
     const validData = validation(
          request,
          informationValidation.createInformation
     );

     const information = await informationRepository.findInformation(
          validData.userId
     );
     if (information.length > 0) {
          throw new ResponseError(400, "information already exist");
     }

     const result = await informationRepository.createInformation(
          validData
     );
     const response = {
          id: result.id,
          noHp: result.noHp,
          address: result.address,
          birthday: result.birthday,
          userId: result.userId,
     };

     return response;
};

module.exports = { createInformation };
