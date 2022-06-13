const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {// We are saving the password as plain text. This is not a good approach.
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: false,
  },
  role: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);
