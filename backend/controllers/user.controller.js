const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.signUp = async(req, res) => {
    try {
        const {username, email, password, firstName, lastName} = req.body;
        if(!username || !email || !password || !firstName || !lastName) {
            return res.status(404).json({
                success: false,
                message: "Please fill all the Fields"
            })
        }
        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({
                success: false,
                message: "User with this username already Exists",
            })
        }
        const hashedPass = jwt.sign(password, process.env.JWT_SECRET);
        const newUser = new User({
            username, 
            email, 
            password: hashedPass, 
            firstName, 
            lastName
        })
        newUser.save();
        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: newUser,
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}