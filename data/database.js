import mongoose from "mongoose";

const connection = () => {

  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default connection
