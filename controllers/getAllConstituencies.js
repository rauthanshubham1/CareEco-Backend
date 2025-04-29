import Constituencies from "../models/Constituencies.js";

const getAllConstituencies = async (req, res) => {
    try {
        const _constituencies = await Constituencies.find();
        res.status(200).json({ _constituencies });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get officer details" });
    }
}

export default getAllConstituencies;