import mongoose from "mongoose";

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    if (conn) console.log(`MongoDB Connected: ${conn.connection.host}.`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export default connection;
