import * as dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_PORT = Number(process.env.DB_PORT);
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME };
