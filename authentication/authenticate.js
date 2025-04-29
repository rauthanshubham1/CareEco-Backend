import jwt from "jsonwebtoken";
import Voter from "../models/Voter.js";
import Officer from "../models/Officer.js";

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decoded.role == 'VOTER') {
            const voter = await Voter.findOne({ mobile: decoded.mobile, aadharNumber: decoded.aadharNumber });
            if (!voter) {
                return res.status(404).json({ message: "Voter not found" });
            }
            const { aadharNumber, constituency, hasVoted, mobile, name, isVoted } = voter;
            req.user = { aadharNumber, constituency, hasVoted, mobile, name, isVoted };
            next();
        } else {
            const officer = await Officer.findOne({ mobile: decoded.name, mobile: decoded.mobile });
            if (!officer) {
                return res.status(404).json({ message: "Officer not found" });
            }
            const { name, mobile } = officer;
            req.user = { name, mobile };
            next();
        }
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authenticate;
