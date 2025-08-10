import Url from "../models/Url";
import { generateShortCode } from "../utils/generateShortCode";
export const shortenUrl = async (req, res) => {
    try {
        const { original_url } = req.body;
        if (!original_url)
            return res.status(400).json({ message: "URL is required" });
        const short_code = await generateShortCode();
        const newUrl = await Url.create({
            original_url,
            short_code,
        });
        res.json({
            short_url: `${req.protocol}://${req.get("host")}/${short_code}`,
            data: newUrl,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "server error" });
    }
};
export const redirectUrl = async (req, res) => {
    const { shortcode } = req.params;
    const url = await Url.findOne({ short_code: shortcode });
    if (!url)
        return res.status(404).send("URL not found");
    url.vists += 1;
    await url.save();
    res.redirect(url.original_url);
};
export const listUrls = async (req, res) => {
    try {
        const urls = await Url.find().sort({ createdAt: -1 });
        res.json(urls);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching URLs" });
    }
};
export const deleteUrl = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Url.findByIdAndDelete(id);
        if (!deleted)
            return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted", id });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting URL" });
    }
};
//# sourceMappingURL=urlController.js.map