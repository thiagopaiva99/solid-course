import { LogComponent } from "../components/log.component";
import { NotificationComponent } from "../components/notification.component";
import { DB } from "../db";
import { IRegister } from "../interfaces/register.interface";
import { INotification } from "../interfaces/notification.interface";

export class LeadModel extends DB implements IRegister, INotification {

    public save() {}

    public sendNotification(notification: NotificationComponent) {}
    
}