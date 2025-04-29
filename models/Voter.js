import mongoose from 'mongoose';

const voterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    constituency: {
        type: String,
        required: true,
    },
    hasVoted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Voter = mongoose.model('Voter', voterSchema);

export default Voter;
