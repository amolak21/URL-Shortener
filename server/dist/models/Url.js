import mongoose, { Schema } from "mongoose";
const urlSchema = new Schema({
    original_url: { type: String, required: true },
    short_code: { type: String, required: true, unique: true },
    vists: { type: Number, default: 0 },
}, {
    timestamps: true,
});
const Url = mongoose.model("Url", urlSchema);
export default Url;
//# sourceMappingURL=Url.js.map