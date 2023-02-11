const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Please enter the price"]
  },
  resName: {
    type: String
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
  },
  dishData: [
    new mongoose.Schema(
      {
        dish: {
          type: mongoose.Schema.ObjectId,
          ref: "Dish"
        },
        quantity: {
          type: Number,
          required: [true, "Please enter the quantity of the dish"]
        },
        name: {
          type: String,
          required: [true, "Please enter your name"]
        },
        phoneNumber: {
          type: Number,
          required: [true, "Please enter your phone number"]
        },
        adress: {
          type: String,
          required: [true, "Please enter your adress"]
        },
        status : {
          type: Boolean,
          required: [false, "in progress"]
        }

      },
      { _id: false }
    )
  ]
});

module.exports = mongoose.model("Order", orderSchema);
