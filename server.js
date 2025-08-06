import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js"
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import ownerRoute from "./routes/ownerRoutes.js";
import bookingRoute from "./routes/bookingRoutes.js";

 connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/owner', ownerRoute);
app.use('/api/bookings', bookingRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at Port  ${PORT} `);
});
