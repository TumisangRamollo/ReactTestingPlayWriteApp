const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
email:{
    type: 'string',
    required: true
},
password:{
    type: 'string',
    required: true
},
date:{
    type:  Date,
    default: new Date
}
})

module.exports = mongoose.model('user' , userSchema)