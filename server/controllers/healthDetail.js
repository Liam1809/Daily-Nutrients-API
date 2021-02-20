import healthDetail from '../models/healthDetail.js';

export const getHealthDetails = async (req, res) => {
    try {
        const HDs = await healthDetail.find();

        res.status(200).json(HDs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getHealthDetailById = async (req, res) => {
    const { id } = req.params;

    try {
        const HD = await healthDetail.findById(id);
        res.status(200).json(HD);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createHealthDetail = async (req, res) => {
    const HD = req.body;

    const newHD = new healthDetail(HD);

    // nho doi String  -> Number formula
    const Cal_bmi = (weight, height) => Math.round(weight / (height / 100));
    const Cal_bmr = (age, weight, height, sex) => {
        if (sex == 'male') {
            return Math.round(66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
            // return 66.47 + (13.75 * weight [kg]) + (5.003 * size [cm]) − (6.755 * age [years])
        } else {
            return Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
        }
    };
    newHD.bmi = Cal_bmi(newHD.weight, newHD.height);
    newHD.bmr = Cal_bmr(newHD.age, newHD.weight, newHD.height, newHD.sex);

    try {
        await newHD.save();

        res.status(201).json(newHD);
        console.log(newHD);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};