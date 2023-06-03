const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.DB_HOST = "mongodb+srv://the_food_delivery_app-b:e9u6oH5rWcmS4v9p@cluster0.wifylhl.mongodb.net/the_food_delivery_app-b");
    // console.log(
    //   `MongoDB is connected. On PORT: ${DB.connection.port}. DBHost: ${DB.connection.host}. Name: ${DB.connection.name}.`
    // );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


module.exports = connectDB;