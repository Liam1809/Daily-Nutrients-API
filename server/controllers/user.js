import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';


export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        // if no user found
        if (!existingUser) return res.status(404).json({ message: 'User does not exist.' });

        const checkPassword = await bcrypt.compare(password, existingUser.password);

        // if password is not matched
        if (!checkPassword) return res.status(400).json({ message: 'Invalid password!' });

        // get existing user's token and send to front end and set up user's expire time
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, '@user', { expiresIn: '1h' });

        res.status(200).json({ userInfo: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        // if user found
        if (existingUser) return res.status(400).json({ message: 'User already exists.' });

        // if no existing user with that info then compare passwords
        if (password !== confirmPassword) return res.status(400).json({ message: 'Reapeat password not match' });

        // hash password
        const hashPassword = await bcrypt.hash(password, 12);

        // create new user
        const newUser = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}` });

        // create user tokeen
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, '@user', { expiresIn: '1h' });

        res.status(200).json({ newUser, token });

    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};