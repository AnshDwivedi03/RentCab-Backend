import ImageKit from "imagekit";
const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_PUBLIC_KEY,
  privateKey: process.env.IMAGE_PVT_KEY,
  urlEndpoint: process.env.IMAGE_URL,
});
export default imagekit;
