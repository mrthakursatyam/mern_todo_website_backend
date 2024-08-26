import mongoose from "mongoose";

const connection = () => {
  const uri = process.env.MONGO_URL;

  mongoose.connect(uri)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default connection
