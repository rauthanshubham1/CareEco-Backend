import Voters from "../models/Voter.js"
import Candidates from "../models/Candidates.js"

const vote = async (req, res) => {
    try {
        const { candidate, party, constituency, name, mobile, aadharNumber } = req.body;

        if (!candidate || !constituency || !name || !mobile || !aadharNumber || !party) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const voter = await Voters.findOne({ mobile, aadharNumber, name });
        if (!voter) {
            return res.status(404).json({ message: "Voter not found" });
        }

        if (voter.hasVoted) {
            return res.status(400).json({ message: "You have alreadðy voted" });
        }
        console.log(candidate, constituency, name, mobile, aadharNumber, party);
        const candidateToUpdate = await Candidates.findOne({ name: candidate, constituency, party });
        if (!candidateToUpdate) {
            return res.status(404).json({ message: "Candidate not found" });
        }

        candidateToUpdate.votes += 1;
        await candidateToUpdate.save();

        voter.hasVoted = true;
        await voter.save();

        res.status(200).json({ message: `Thank you for voting for ${candidate}` });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error occurred while processing vote" });
    }
}

export default vote;