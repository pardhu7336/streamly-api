
import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      maxlength: 80,
    },
    handle: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subscribers: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

export const Channel = mongoose.model("Channel", channelSchema);
