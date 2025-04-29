import express from "express";
import cors from "cors";
import connectDB from "./db/conn.js";
import router from "./routes/routes.js";
import dotenv from "dotenv"; 

dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
