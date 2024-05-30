"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.DB_USERNAME = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_HOST = void 0;
const dotenv = require("dotenv");
dotenv.config();
const DB_HOST = process.env.DB_HOST;
exports.DB_HOST = DB_HOST;
const DB_PORT = Number(process.env.DB_PORT);
exports.DB_PORT = DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
exports.DB_USERNAME = DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_PASSWORD = DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
exports.DB_NAME = DB_NAME;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
exports.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
exports.CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_SECRET = JWT_SECRET;
//# sourceMappingURL=envCon.js.map