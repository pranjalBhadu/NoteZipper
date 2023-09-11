const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../util/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, profilePic} = req.body;

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400);
        throw new Error(`User already exists!`)
    }

    const user = await User.create({name, email, password, profilePic});

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            profilePic: user.profilePic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Error Occured!")
    }

    res.json({name: name, email: email})
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error("Invalid Email!")
    }

    if (user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            profilePic: user.profilePic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid Password!")
    }
})

module.exports = { registerUser, authUser };