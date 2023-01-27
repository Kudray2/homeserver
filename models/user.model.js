import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);
