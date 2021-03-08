import { LogComponent } from "../components/log.component";
import { NotificationComponent } from "../components/notification.component";
import { DB } from "../db";
import { IRegister } from "../interfaces/register.interface";

export class ContractModel extends DB implements IRegister {
    
    public save() {}

}