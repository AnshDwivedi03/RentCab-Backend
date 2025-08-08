import express from "express";
import { changeBookingStatus, checkAvailabilityofCars, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js";
import{ userAuth} from "../middleware/auth.js";
const bookingRoute= express.Router();
bookingRoute.post('/check-availability',checkAvailabilityofCars);
bookingRoute.post('/create',userAuth,createBooking);
bookingRoute.get('/user',userAuth,getUserBookings);
bookingRoute.get('/owner',userAuth,getOwnerBookings);
bookingRoute.post('/change-status',userAuth,changeBookingStatus);

export default bookingRoute;