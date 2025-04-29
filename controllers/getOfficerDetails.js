const getOfficerDetails = (req, res) => {
    try {
        res.status(200).json({ message: "Authenticated Officer", user: req.user });
    } catch (err) {
        res.status(500).json({ message: "Failed to get officer details" });
    }
}

export default getOfficerDetails;