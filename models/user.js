import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  desc: String,
  amt: Number,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
