const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
     const conn=await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
module.exports = connectDB;