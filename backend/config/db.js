const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to DB: ${conn.connection.host}`);
    } catch (err) {
        console.error("DB not connected: " + err);
        process.exit();
    }
}

module.exports = connectDB;