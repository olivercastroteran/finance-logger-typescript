// Classes
export class Payment {
    constructor(reciepent, details, amount) {
        this.reciepent = reciepent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.reciepent} is owed $${this.amount} for ${this.details}`;
    }
}
