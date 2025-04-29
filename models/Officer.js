import mongoose from 'mongoose';

const officerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Officer = mongoose.model('Officer', officerSchema);
export default Officer;
