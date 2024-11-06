import mongoose from "mongoose";

const { Schema } = mongoose


const userSchema = new Schema({
    fullName : String,
    email : {type : String, required : true},
    password : String,
    provider : String,
    profileImg : String,
    role : { type : String , default : 'user'}
},
// Ye is liye han ke kuch bhi changes hu gi tu MONGO BD Time update krta rahe ga hame krne ki need nhi.
{ timestamps : true }
);

export const userModel = mongoose.models.users || mongoose.model('Users', userSchema)