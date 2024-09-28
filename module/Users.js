import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("people", UserSchema);

export default UsersModel;
