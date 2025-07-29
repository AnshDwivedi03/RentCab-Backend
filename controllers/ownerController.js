import User from "../models/User.js";

export const changeRole = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });

    res.json({ success: true, message: "Now you can list your car" });
  } catch (error) {
    console.error("Error changing role:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while changing the role.",
      error: error.message,
    });
  }
};
