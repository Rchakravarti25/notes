var jwt = require('jsonwebtoken');
var credentials = require('../../../config/credentials');
function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token){
    res.status(403).send({ auth: false, message: 'Forbidden:No token provided.' });
  }else{
    jwt.verify(token, credentials.secret, function(err, decoded) {
      if (err){
        res.status(401).send({ auth: false, message: 'Unauthorised:Failed to authenticate User.' });
      }else{
        req.user_id = decoded.user_id;
      next();
      }
    });
  }
}
module.exports = verifyToken;
