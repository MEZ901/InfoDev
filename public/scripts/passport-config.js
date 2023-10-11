const authenticate = require("passport");
const bcryptjs = require("bcryptjs");

const localStrategy = require("passport").Strategy;

class passportConfig {
  static intialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
      const user = getUserByEmail(email);
      if (user == null) {
        return done(null, false, { message: "No user with that email" });
      }

      passport.serializeUser((user, done) => done(null, user.id));
      passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
      });
    };
  }
}
