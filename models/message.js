/**
 * Created by Rg on 12/2/2015.
 */
var  mongoose=require('../node_modules/mongoose');

var messageScheme=mongoose.Schema({
    message_id:String,
    sender_id:String,
    receiver_id:String,
    content:String,
    date:String,
    time:String
});
module.exports=mongoose.model('Message',messageScheme);