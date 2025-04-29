import Officer from "../models/Officer.js";
import jwt from "jsonwebtoken";

const login_officer = async (req, res) => {
    try {
        const { name, mobile } = req.body;

        if (!name || !mobile) {
            return res.status(400).json({ message: "Name and mobile are required" });
        }

        const officer = await Officer.findOne({ name, mobile });

        if (officer) {
            const token = jwt.sign(
                { name: officer.name, mobile: officer.mobile, role: "OFFICER" },
                process.env.JWT_SECRET_KEY,
            );

            res.status(200).json({ token });
        } else {
            return res.status(404).json({ message: "Officer not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while logging in officer" });
    }
}

export default login_officer;