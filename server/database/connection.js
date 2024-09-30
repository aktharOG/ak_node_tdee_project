const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file

const connectDB = async () => {
    try {
        // Use the MONGO_URI from the environment variables
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
