import 'dotenv';
import path from 'path';

module.exports = {
    client: 'postgresql',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },
    pool: {
        max: 4
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
}