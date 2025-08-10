import Url from "../models/Url";
export async function generateShortCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    function randomCode() {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    let shortCode = "";
    let exists = true;
    while (exists) {
        shortCode = randomCode();
        const found = await Url.findOne({ short_code: shortCode });
        exists = !!found;
    }
    return shortCode;
}
//# sourceMappingURL=generateShortCode.js.map