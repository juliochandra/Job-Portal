const passport = require("passport");
const { Strategy } = require("passport-jwt");
const Users = require("../models/userModel");

const secret = process.env.JWT_SECRET;

const options = {
     jwtFromRequest: (req) => {
          // console.log(req.headers.authorization, "masuk <=====");

          return req.headers.authorization;
     },
     secretOrKey: secret,
};

const extractToken = async (payload, done) => {
     try {
          const { id } = payload;
          if (payload.role === "user") {
               const user = await Users.findById(id);

               user.role = payload.role;
               if (!user) {
                    return done(null, false);
               }
               return done(null, user);
          }
          // if (payload.role === "admin") {
          //   const admin = await db("petugas").where({ id: payload.id }).first(["id"]);
          //   admin.role = payload.role;
          //   if (!admin) {
          //     return done(null, false);
          //   }
          //   return done(null, admin);
          // }
     } catch (error) {
          return done(error, false);
     }
};

passport.use(new Strategy(options, extractToken));

module.exports = passport;
