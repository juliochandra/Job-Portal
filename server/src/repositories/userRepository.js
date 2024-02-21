const User = require("../models/userModel");

const findUser = async (email) => {
     const result = await User.find({ email });
     return result;
};

const createUser = async (data) => {
     const result = await User.create(data);
     return result;
};

module.exports = {
     findUser,
     createUser,
};
