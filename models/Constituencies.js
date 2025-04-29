import mongoose from 'mongoose';

const constituencySchema = new mongoose.Schema({
    constituency: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Constituency = mongoose.model('Constituency', constituencySchema);

export default Constituency;
