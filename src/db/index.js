import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MONGODB connected!! DBHOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB conection FAILED!!", error);
  }
};

export default   connectDB;
