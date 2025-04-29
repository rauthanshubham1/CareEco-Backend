import express from "express"

import authenticate from "../authentication/authenticate.js";
import generate_otp from "../controllers/generate_otp.js";
import login_voter from "../controllers/login_voter.js";
import getVoterDetails from "../controllers/getVoterDetails.js";
import getOfficerDetails from "../controllers/getOfficerDetails.js";
import getAllConstituencies from "../controllers/getAllConstituencies.js";
import getCandidatesFromConstituency from "../controllers/getCandidatesFromConstituency.js"
import vote from "../controllers/vote.js";
import getAllDetailsVoting from "../controllers/getAllDetailsVoting.js";
import login_officer from "../controllers/login_officer.js";
import getAllCandidatesOfConstituency from "../controllers/getAllCandidatesOfConstituency.js";

const router = express.Router();

router.post('/login-voter', login_voter);

router.get("/generate-otp", generate_otp);

router.get("/getVoterDetails", authenticate, getVoterDetails);

router.get("/getOfficerDetails", authenticate, getOfficerDetails);

router.get("/getAllConstituencies", getAllConstituencies);

router.get("/getCandidatesFromConstituency", getCandidatesFromConstituency);

router.post("/vote", vote);

router.get("/getAllDetailsOfVoting", getAllDetailsVoting);

router.post('/login-officer', login_officer);

router.get("/getAllCandidatesOfConstituency", getAllCandidatesOfConstituency);

export default router;
