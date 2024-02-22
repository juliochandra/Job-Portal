const Informations = require("../models/informationModel");

const findInformation = async (userId) => {
     const result = await Informations.find({ userId });
     return result;
};

const createInformation = async (data) => {
     const result = await Informations.create(data);
     return result;
};

module.exports = {
     findInformation,
     createInformation,
};
