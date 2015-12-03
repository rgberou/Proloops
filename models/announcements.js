/**
 * Created by Rg on 11/23/2015.
 */
var  mongoose=require('../node_modules/mongoose');

var announcementScheme=mongoose.Schema({
    admin_id:String,
    title:String,
    content:String,
    date:String,
    type:String
})
module.exports=mongoose.model('Announcement',announcementScheme);
