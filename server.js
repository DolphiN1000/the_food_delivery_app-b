const connectDB = require("./config");

const app = require("./app");
// const mongoose = require("mongoose");

//e9u6oH5rWcmS4v9p

//the_food_delivery_app-b

const {
  DB_HOST = "mongodb+srv://the_food_delivery_app-b:e9u6oH5rWcmS4v9p@cluster0.wifylhl.mongodb.net/the_food_delivery_app-b",
  PORT = 5000,
} = process.env;

connectDB()

// mongoose.set("strictQueri", true);

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
    app.listen(PORT, () => {
        console.log(`Database connection successful ${PORT}`);
      });
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });