"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryConfig = void 0;
const cloudinary_1 = require("cloudinary");
const envCon_1 = require("./envCon");
exports.CloudinaryConfig = {
    provide: 'cloudinary',
    useFactory: () => {
        return cloudinary_1.v2.config({
            api_key: envCon_1.CLOUDINARY_API_KEY,
            cloud_name: envCon_1.CLOUDINARY_CLOUD_NAME,
            api_secret: envCon_1.CLOUDINARY_API_SECRET,
        });
    },
};
//# sourceMappingURL=cloudinary.js.map