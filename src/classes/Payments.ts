import { HasFormatter } from '../interfaces/HasFormatter'

// Classes
export class Payment implements HasFormatter {
  constructor(
    readonly reciepent: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.reciepent} is owed $${this.amount} for ${this.details}`
  }
}