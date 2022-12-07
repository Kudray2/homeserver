import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  userType: {
    type: Boolean,
    required: true,
  },
});

export const UserModule = mongoose.model("UserModel", userSchema);
