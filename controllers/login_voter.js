import Voters from "../models/Voter.js"
import jwt from "jsonwebtoken"

const login_voter = async (req, res) => {
    try {
        const { name, mobile, aadharNumber } = req.body;
        if (!name || !mobile || !aadharNumber) {
            return res.status(400).json({ message: "Credentials invalid" });
        }
        const voter = await Voters.findOne({ name, mobile, aadharNumber });
        if (!voter) {
            return res.status(400).json({ message: "User not found" });
        }

        const token = jwt.sign({ mobile, aadharNumber, role: "VOTER" }, process.env.JWT_SECRET_KEY);
        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "An error occurred while logging in voter" });
    }
}

export default login_voter;