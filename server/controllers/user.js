import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // hash password
import jwt from 'jsonwebtoken'; // token user 

// import User model
import User from '../models/user.js';


export const signin = async (req, res) => {
    // retrieve email and password from form Sign In
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        // if no user found
        if (!existingUser) {
            console.log('User does not exist.');
            return res.status(404).json({ message: 'User does not exist.' });
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password);

        // if password is not matched
        if (!checkPassword) {
            console.log('Invalid password!');
            return res.status(400).json({ message: 'Invalid password!' });
        }

        // get existing user's token and send to front end and set up user's expire time
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, '@user', { expiresIn: '1h' });
        // send
        res.status(200).json({ userInfo: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};

export const signup = async (req, res) => {

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        // find existing User by email
        const existingUser = await User.findOne({ email });

        // if user found
        if (existingUser) {
            console.log('User already exists.');
            return res.status(400).json({ message: 'User already exists.' });
        }

        // if no existing user with that info then compare passwords
        if (password !== confirmPassword) {
            console.log('Reapeat password not match');
            return res.status(400).json({ message: 'Reapeat password not match' });
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 2);

        // create new user
        const newUser = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}` });
        console.log(`New User Sign-Up: ${newUser}`);

        // create user token
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, '@user', { expiresIn: '1h' });
        // send 
        res.status(200).json({ userInfo: newUser, token });

    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};