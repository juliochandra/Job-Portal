const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userValidation = require("../validations/userValidation");

const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const register = async (request) => {};

module.exports = {
     register,
};
