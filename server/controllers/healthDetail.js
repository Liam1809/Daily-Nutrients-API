import healthDetail from '../models/healthDetail.js';

export const getHealthDetail = async (req, res) => {
    try {
        const healthDetails = await healthDetail.find();

        res.status(200).json(healthDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createHealthDetail = async (req, res) => {
    const healthDetail = req.body;

    const newHealthDetail = new healthDetail(healthDetail);

    try {
        await newHealthDetail.save();

        res.status(201).json(newHealthDetail);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};