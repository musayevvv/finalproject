import { configDotenv } from "dotenv";
import mongoose from "mongoose";


configDotenv()

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database qosuldu');
    }
    catch (error) {
        console.log(error);
    }
}

// MONGO_URI = mongodb + srv://aykhan2323:U2XhxZriE5zCYDs2@cluster0.7tpzdtq.mongodb.net/

// password = U2XhxZriE5zCYDs2

// username = aykhan2323
