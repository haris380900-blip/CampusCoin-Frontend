import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({ destination: "uploads/", filename: (req, file, callback) => callback(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`) });
const fileFilter = (req, file, callback) => file.mimetype.startsWith("image/") ? callback(null, true) : callback(new Error("Only image uploads are allowed"));
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

export default upload;
