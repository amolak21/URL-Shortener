import { Router } from "express";
import {
  deleteUrl,
  listUrls,
  redirectUrl,
  shortenUrl,
} from "../controllers/urlController";

const router = Router();

router.post("/api/shorten", shortenUrl);
router.get("/api/list", listUrls);
router.delete("/api/:id", deleteUrl);

router.get("/:short_code", redirectUrl);

export default router;
