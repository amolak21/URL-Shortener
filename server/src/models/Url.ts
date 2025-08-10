import mongoose, { Document, Schema } from "mongoose";

interface IUrl extends Document {
  original_url: string;
  short_code: string;
  visits: number;
  createdAt: Date;
  updatedAt: Date;
}

const urlSchema = new Schema<IUrl>(
  {
    original_url: { type: String, required: true },
    short_code: { type: String, required: true, unique: true },
    visits: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model<IUrl>("Url", urlSchema);

export default Url;
export { IUrl };
