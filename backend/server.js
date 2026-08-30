import "dotenv/config";
import http from "node:http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import configureCloudinary from "./config/cloudinary.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
export const io = new Server(server, { cors: { origin: clientUrl, credentials: true } });

app.use(helmet());
app.use(cors({ origin: clientUrl, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200, standardHeaders: true, legacyHeaders: false, message: { success: false, message: "Too many requests, please try again later" } }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cookieParser());
app.get("/api/health", (req, res) => res.status(200).json({ success: true, message: "TechWiz API running" }));
app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try { configureCloudinary(); await connectDB(); server.listen(port, "0.0.0.0", () => console.info(`TechWiz API listening on port ${port}`)); }
  catch (error) { console.error(`Unable to start server: ${error.message}`); process.exit(1); }
};

startServer();
