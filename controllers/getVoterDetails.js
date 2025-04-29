const getVoterDetails = (req, res) => {
    try {
        res.status(200).json({ message: "Authenticated voter", user: req.user });
    } catch (err) {
        res.status(500).json({ message: "Failed to get voter details" });
    }
}

export default getVoterDetails;