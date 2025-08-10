import mongoose, { Document, Schema } from "mongoose";

export interface IUrl extends Document {
  original_url: string;
  short_code: string;
  vists: number;
  createdAt: Date;
  updatedAt: Date;
}

const urlSchema = new Schema<IUrl>(
  {
    original_url: { type: String, required: true },
    short_code: { type: String, required: true, unique: true },
    vists: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
