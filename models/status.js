/**
 * Created by Rg on 12/8/2015.
 */

var  mongoose=require('../node_modules/mongoose');

var statusScheme=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    content:String
})
module.exports=mongoose.model('Status',statusScheme);
