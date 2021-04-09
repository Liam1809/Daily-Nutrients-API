import diet from '../models/diet.js';
import mongoose from 'mongoose';

export const getPost = async (req, res) => {
    try {
        const Posts = await diet.find();

        res.status(200).json(Posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { Grains, Proteins, Vegetables, Fruits } = req.body;

        const newPost = new diet({ Grains, Proteins, Vegetables, Fruits, ID: req.userId, creator: req.userName, createdAt: new Date().toISOString() });

        await newPost.save();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {

};

export const deletePost = async (req, res) => {

};

export const likePost = async (req, res) => {

};