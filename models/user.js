/**
 * Created by Rg on 11/23/2015.
 */
var  mongoose=require('../node_modules/mongoose');

var userScheme=mongoose.Schema({
        firstname:String,
        lastname:String,
        email:String,
        username:String,
        type:String,
        password:String
});
module.exports=mongoose.model('User',userScheme);