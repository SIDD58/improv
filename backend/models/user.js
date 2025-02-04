mongoose= require('mongoose');

const userSchema = new mongoose.Schema(
    {
        // googleId: is our primary key
        googleId:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        displayName:{
            type:String,
            unique:true,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema);
module.exports = User;
