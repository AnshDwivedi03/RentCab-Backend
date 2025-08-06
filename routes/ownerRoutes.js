import express from "express";
import {userAuth} from "../middleware/auth.js";
import { changeRole, addCar, getOwnerCars, toggleCarAvailability, deleteCar, getDashboardData, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoute = express();
ownerRoute.post("/change-role", userAuth, changeRole);
ownerRoute.post("/add-car", upload.single("image"), userAuth, addCar);
ownerRoute.get('/cars',userAuth,getOwnerCars)
ownerRoute.post('/toggle-car',userAuth,toggleCarAvailability)
ownerRoute.post('/delete-car',userAuth,deleteCar)
ownerRoute.post('/update-image',upload.single("image"),userAuth,updateUserImage)
ownerRoute.get('/dashboard',userAuth,getDashboardData)

export default ownerRoute;
