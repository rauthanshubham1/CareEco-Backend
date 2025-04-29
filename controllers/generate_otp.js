import otpGenerator from "otp-generator";

const generate_otp = (req, res) => {
    try {
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        res.status(200).json({ otp });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to generate OTP" });
    }
}

export default generate_otp;