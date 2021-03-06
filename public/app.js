import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Oli', 'web work', 350);
// docTwo = new Payment('Adri', 'web work', 250);
// let docs: HasFormatter[] = []
// docs.push(docOne, docTwo)
// console.log(docs);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
