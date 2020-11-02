
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
   title: {
       type: String,
       required: true,
       minlength: 3
   },
   description: {
      type: String,
      required: true,
      minlength: 50
   },
   Aname: {
      type: String
   }
 }, {
       timestamps: true,
});


const User =mongoose.model('User', userSchema);
module.exports = User;