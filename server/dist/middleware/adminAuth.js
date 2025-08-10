import dotenv from "dotenv";
dotenv.config();
export default function adminAuth(req, res, next) {
    const token = req.headers["x-admin-token"];
    if (token === process.env.ADMIN_SECRET) {
        return next();
    }
    return res.status(403).json({ message: "Unauthorized" });
}
//# sourceMappingURL=adminAuth.js.map