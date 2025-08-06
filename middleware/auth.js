import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const userAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

