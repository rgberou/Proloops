mongoose=require('../node_modules/mongoose');

UserSchema=
  username:
    type: String
  password:
    type: String

exports.User=mongoose 'user', UserSchema, 'user'