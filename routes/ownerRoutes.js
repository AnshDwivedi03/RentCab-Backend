import express from "express";
import userAuth from "../middleware/auth.js";
import { changeRole, addCar } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoute = express();
ownerRoute.post("/change-role", userAuth, changeRole);
ownerRoute.post("/add-car", upload.single("image"), userAuth, addCar);

export default ownerRoute;
