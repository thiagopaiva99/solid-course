import { IMessage } from '../interfaces/message.interface';
import * as Models from './index';

export class Messenger {

    private sender: IMessage;

    constructor(sender: IMessage) {
        this.sender = sender;
    }

    public sendToken() {
        this.sender.send();        
    }

}