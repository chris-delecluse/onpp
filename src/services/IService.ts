import { SqlClient } from "config/SqlClient";
import { IDbItem } from "services/IDbItem";

export interface IService {
    getAll(): Promise<IDbItem[]>;
}
