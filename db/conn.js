import mongoose from "mongoose";

export default function connectDB() {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Connected to MongoDB successfully 🚀");
    }).catch((err) => {
        console.error("Failed to connect to MongoDB ❌", err);
    });
}
