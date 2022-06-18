import { Pool, PoolClient } from "pg";
import { ISqlClient }       from "config/ISqlClient";

export class SqlClient implements ISqlClient {
    host: string;
    port: number;
    user: string;
    database: string;
    password: string;

    async getClient(): Promise<PoolClient> {
        return await this.pool.connect();
    }

    private readonly pool: Pool;

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
}