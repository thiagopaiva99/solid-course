import { IMessage } from "../interfaces/message.interface";

export class Email implements IMessage {

    public send() {
        console.log('Email: Your token is: 555-333');
    }

}