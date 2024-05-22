const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const z = require("zod");
const bcrypt = require("bcrypt");

const signUpSchema = z.object({
    username: z.string().min(2).refine(u => !u.includes(" "), "No Spaces in Username"),
    mobileNo: z.string().length(10),
    email: z.string().email(),
    password: z.string().min(3),
})

exports.signUp = async (req, res) => {
    try {
        const {success} = signUpSchema.safeParse(req.body);
        if(!success) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Input",
            })
        }
        const {name, username, mobileNo, email, password} = req.body;
        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({
                success: false,
                message: "User with this username already Exists",
            })
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, 
            username, 
            mobileNo,
            email, 
            password: hashedPass, 
        })
        // const token = jwt.sign({
        //     userID: newUser._id,
        // }, process.env.JWT_SECRET);
        newUser.save();
        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            // token,
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

exports.logIn = async (req, res) => {
    try {
        const {success} = signUpSchema.pick({username: true, password: true}).safeParse(req.body);
        if(!success) {
            return res.status(400).json({
                success: false,
                message: "Invalid Inputs",
            })
        }
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User Don't Exists",
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(403).json({
                success: false,
                message: "Incorrect Password",
            })
        }
        const token = jwt.sign({
            userID: user._id,
        }, process.env.JWT_SECRET);
        user.token = token;
        return res.header("Authorization", "Bearer "+token).status(200).json({
            success: true,
            message: "User Logged In",
            token,
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

exports.getBySearch = async (req, res) => {
    try {
        const filter = req.query.filter || "";
        const users = await User.find({
            $or: [{
                name: {$regex: filter}
            }, {
                mobileNo: {$regex: filter}
            }]
        })
        res.status(200).json({
            success: true,
            message: "Users By Search",
            users: users.map(user => ({
                name: user.name,
                username: user.username,
                mobileNo: user.mobileNo,
                _id: user._id,
            }))
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}