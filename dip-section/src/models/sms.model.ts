import { IMessage } from "../interfaces/message.interface";

export class Sms implements IMessage {

    public send() {
        console.log('Sms: Your token is: 666-444');   
    }

}