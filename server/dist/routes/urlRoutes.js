import { Router } from "express";
import { deleteUrl, listUrls, redirectUrl, shortenUrl, } from "../controllers/urlController";
import adminAuth from "../middleware/adminAuth";
const router = Router();
router.post("/api/shorten", shortenUrl);
router.get("/api/admin", adminAuth, listUrls);
router.delete("/api/admin/:id", adminAuth, deleteUrl);
router.get("/:shortcode", redirectUrl);
export default router;
//# sourceMappingURL=urlRoutes.js.map