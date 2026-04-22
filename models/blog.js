const mongoose = require('mongoose');
const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true,
        unique:true
    },
    blogPost:{
        type:String,
        required:true
    },
    blogImage:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    blogWriter:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Blog',blogSchema);