import { PoolClient } from "pg";

export interface ISqlClient {
    host: string;
    port: number;
    user: string;
    database: string;
    password: string;

    getClient(): Promise<PoolClient>;
}