import imagekit from "../config/imagekit.js";

import User from "../models/User.js";
import fs from "fs";
import Car from "../models/Car.js";
import path from "path";

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

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
   let car= JSON.parse(req.body.carData);
    const imageFile = req.file;
   

    // Upload image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    {
      /*{
      the response will contain in this format
  fileId: 'xxx',
  name: 'yourfile.jpg',
  url: 'https://ik.imagekit.io/your_image_url.jpg',
  thumbnailUrl: 'https://ik.imagekit.io/your_thumb_url.jpg',
  filePath: '/cars/yourfile.jpg',
  ...
}
 */
    }

    // optmization
    var optimizeImgUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1000" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    const image = optimizeImgUrl;
    await Car.create({ ...car, owner: _id, image });

    res.json({ success: true, message: "Car Added" });
  } catch (error) {
    console.error("Error changing role:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while changing the role.",
      error: error.message,
    });
  }
};