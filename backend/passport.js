var passport = require('passport');
var jwt = require('jsonwebtoken');
var BearerStrategy = require('passport-http-bearer');
var User = require('./models/userSchema');

passport.use(new BearerStrategy(
    function(token, done) {
        jwt.verify(token, 'secret', function(err, decoded) {
      User.findById({ _id: decoded.data._id }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, true);
      });
    });
    }
  ));
  