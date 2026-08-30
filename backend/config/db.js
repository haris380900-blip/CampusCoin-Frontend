import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not configured. Add your MongoDB Atlas connection string to .env.");
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.info(`MongoDB Atlas Connected: ${connection.connection.host}`);
};

export default connectDB;
