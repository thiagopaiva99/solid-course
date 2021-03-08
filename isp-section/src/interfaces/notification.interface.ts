import { NotificationComponent } from "../components/notification.component";
import { LogComponent } from "../components/log.component";

export interface INotification {

    sendNotification?(notification: NotificationComponent);

}