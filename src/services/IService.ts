import { IDbItem } from "model/IDbItem";

export interface IService {
    getAll(): Promise<IDbItem[]>;
}