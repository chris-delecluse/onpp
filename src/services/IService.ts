import { SqlClient } from "config/SqlClient";
import { IDbItem } from "services/IDbItem";

export interface IService {

    sqlClient: SqlClient;

    getAll(): Promise<IDbItem[]>;
}
