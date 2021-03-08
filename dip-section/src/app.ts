import { Email, Sms, WhatsApp } from "./models";
import { Messenger } from "./models/messenger.model";

// email
const emailMessenger = new Messenger(new Email());
emailMessenger.sendToken();

// sms
const smsMessenger = new Messenger(new Sms());
smsMessenger.sendToken();

// whatsapp
const whatsappMessenger = new Messenger(new WhatsApp());
whatsappMessenger.sendToken();