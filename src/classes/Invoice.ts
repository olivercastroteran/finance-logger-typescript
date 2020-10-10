import { HasFormatter } from '../interfaces/HasFormatter'

// Classes
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} ows $${this.amount} for ${this.details}`
  }
}