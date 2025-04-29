import Candidates from "../models/Candidates.js";

const getAllCandidatesOfConstituency = async (req, res) => {
    try {
        const { constituency } = req.query;
        if (!constituency) {
            return res.status(400).json({ message: "Constituency is required." });
        }

        const candidates = await Candidates.find({ constituency });

        res.status(200).json({ candidates });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}
export default getAllCandidatesOfConstituency;