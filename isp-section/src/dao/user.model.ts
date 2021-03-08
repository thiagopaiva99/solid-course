import { LogComponent } from "../components/log.component";
import { NotificationComponent } from "../components/notification.component";
import { DB } from "../db";
import { ILog } from "../interfaces/log.interface";
import { INotification } from "../interfaces/notification.interface";
import { IRegister } from "../interfaces/register.interface";

export class UserModel extends DB implements IRegister, INotification, ILog {

    public save() {}

    public registerLog(log: LogComponent) {}

    public sendNotification(notification: NotificationComponent) {}
    
}