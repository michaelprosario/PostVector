import { AppResult, GetRecordResult } from "../results/app-result";
import { StoreEntityCommand } from "../requests/store-entity-command";
import { IEntity } from "./entity";


export interface IRepository<T extends IEntity> {
    create(item: T): Promise<AppResult>;
    update(item: T): Promise<AppResult>;
    delete(id: string): Promise<boolean>;
    recordExists(id: string): Promise<boolean>;
    getRecordById(id: string): Promise<GetRecordResult<T>>;
}
