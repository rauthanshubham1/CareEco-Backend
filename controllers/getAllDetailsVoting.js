import Voters from "../models/Voter.js";

const getAllDetailsVoting = async (req, res) => {
    try {
        const { constituency } = req.query;

        if (!constituency) {
            return res.status(400).json({ message: "Constituency is required" });
        }

        const allVoters = await Voters.find({ constituency });

        res.status(200).json({ allVoters });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch voting details" });
    }
}

export default getAllDetailsVoting;