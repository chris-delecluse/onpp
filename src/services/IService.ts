import { IDbItem }   from "model/IDbItem";
import { SqlClient } from "config/SqlClient";

export interface IService {

    sqlClient: SqlClient;

    getAll(): Promise<IDbItem[]>;
}