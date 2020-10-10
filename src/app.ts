import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Oli', 'web work', 350);
// docTwo = new Payment('Adri', 'web work', 250);

// let docs: HasFormatter[] = []
// docs.push(docOne, docTwo)

// console.log(docs);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
})

// Interfaces
interface isPerson {
  name: string, 
  age: number, 
  speak(a: string): void,
  spend(a:number): number
}