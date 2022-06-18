import { Pool } from "pg";

export class SqlClient {
    host: string;
    port: number;
    user: string;
    database: string;
    password: string;

    private pool: Pool;

    constructor(host: string, port: number, user: string, database: string, password: string) {
        this.host     = host;
        this.port     = port;
        this.user     = user;
        this.database = database;
        this.password = password;

        this.pool = new Pool({
            "host": this.host,
            "port": this.port,
            "user": this.user,
            "database": this.database,
            "password": this.password
        });
    }

    async getClient() {
        return await this.pool.connect();
    }
}