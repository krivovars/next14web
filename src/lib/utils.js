import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {

    try {
        if (connection.isConnected) {
            console.log('Already connected');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
    }
}