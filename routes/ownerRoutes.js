import express from "express";
import { userAuth } from "../middleware/auth.js";
import { changeRole } from "../controllers/ownerController.js";

const ownerRoute = express();
ownerRoute.post("/change-role", userAuth, changeRole);

export default ownerRoute;