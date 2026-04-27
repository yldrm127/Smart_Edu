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
        type:mongoose.mongoose.Types.ObjectId,
        ref:'User',
        required:true
    }
});

blogSchema.virtual('formattedDate').get(function(){
    return this.createDate.toLocaleDateString("tr-TR");
});
module.exports=mongoose.model('Blog',blogSchema);