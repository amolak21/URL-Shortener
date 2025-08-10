import mongoose, { Document } from "mongoose";
export interface IUrl extends Document {
    original_url: string;
    short_code: string;
    vists: number;
    createdAt: Date;
    updatedAt: Date;
}
declare const Url: mongoose.Model<IUrl, {}, {}, {}, mongoose.Document<unknown, {}, IUrl, {}, {}> & IUrl & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Url;
//# sourceMappingURL=Url.d.ts.map