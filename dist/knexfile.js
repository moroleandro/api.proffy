"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const path_1 = __importDefault(require("path"));
module.exports = {
    client: 'postgresql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {
        max: 4
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path_1.default.resolve(__dirname, 'database', 'migrations')
    },
};
