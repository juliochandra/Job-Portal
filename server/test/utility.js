const bcrypt = require("bcrypt");
const User = require("../src/models/userModel");

const user = {
     firstName: "firstNameTest",
     lastName: "lastNameTest",
     email: "emailTest@emailTest.com",
     password: "passwordTest",
};

const createUser = async () => {
     user.password = await bcrypt.hash(user.password, 10);
     await User.create(user);
};

const deleteUser = async () => {
     await User.deleteMany({ email: user.email });
};

module.exports = {
     createUser,
     deleteUser,
};
