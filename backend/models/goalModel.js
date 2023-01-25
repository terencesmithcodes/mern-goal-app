const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    //allows a user to be associated with a goal
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
      //referencing the "user" model
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema)