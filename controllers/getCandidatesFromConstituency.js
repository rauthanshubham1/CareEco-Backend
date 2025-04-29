import Candidates from "../models/Candidates.js";

const getCandidatesFromConstituency = async (req, res) => {
    const { constituency } = req.query;

    if (!constituency) {
        return res.status(400).json({ message: "Constituency is required" });
    }

    try {
        const allCandidates = await Candidates.find({ constituency });
        if (allCandidates.length === 0) {
            return res.status(404).json({ message: "No candidates found for this constituency" });
        }

        let newAllCandidates = allCandidates.map(cand => {
            return { name: cand.name, party: cand.party };
        });

        res.status(200).json({ candidates: newAllCandidates });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching candidates" });
    }
}

export default getCandidatesFromConstituency;