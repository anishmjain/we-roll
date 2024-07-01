import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally, other options like useFindAndModify, useCreateIndex, etc.
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Optionally, you can throw the error or handle it further as needed.
        throw error;
    }
};

export default ConnectToMongoDB;
