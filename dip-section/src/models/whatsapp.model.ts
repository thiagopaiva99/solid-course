import { IMessage } from "../interfaces/message.interface";

export class WhatsApp implements IMessage {

    public send() {
        console.log('Whatsapp: Your token is: 555-333');
    }

}