import { ConnectionOptions, createPool } from "mysql2/promise"
import { config } from "dotenv"

config();

var dbConfig: ConnectionOptions = {
    host: process.env.DATABASEHOSTNAME,
    user: process.env.DATABASEUSERNAME,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASENAME,
    port: parseInt(process.env.DATABASEPORT),
    ssl: {
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 10,
};

export const pool = createPool(dbConfig);