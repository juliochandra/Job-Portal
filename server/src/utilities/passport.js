// const passport = require("passport");
// const { Strategy } = require("passport-jwt");

// const JWT_SECRET = "JWT_SUPER_SECRET_CODE";

// const options = {
//      jwtFromRequest: (req) => {
//           return req.headers.authorization;
//      },
//      secretOrKey: JWT_SECRET,
// };

// const extractToken = async (payload, done) => {
//      try {
//           if (payload.role === "user") {
//                const user = await db("masyarakat")
//                     .where({ id: payload.id })
//                     .first(["id"]);
//                user.role = payload.role;
//                if (!user) {
//                     return done(null, false);
//                }
//                return done(null, user);
//           }
//           if (payload.role === "employer") {
//                const admin = await db("petugas")
//                     .where({ id: payload.id })
//                     .first(["id"]);
//                admin.role = payload.role;
//                if (!admin) {
//                     return done(null, false);
//                }
//                return done(null, admin);
//           }
//      } catch (error) {
//           return done(error, false);
//      }
// };

// passport.use(new Strategy(options, extractToken));

// module.exports = passport;
