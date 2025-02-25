import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    }
}

export default connectDB;