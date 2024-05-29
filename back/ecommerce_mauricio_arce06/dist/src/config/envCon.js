"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_USERNAME = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_HOST = void 0;
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
//# sourceMappingURL=envCon.js.map