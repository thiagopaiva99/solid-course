export class EmailService {

    private from: string;
    private to: string;
    private subject: string;
    private body: string;

    constructor(from = 'contato@site.com.br', to = '', subject = '', body = '') {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
    }

    public static sendEmail() {
        return console.log(`---> send email <---`);
    }


}