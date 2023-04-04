import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["ford", "bmw", "ferrari", "kia", "maruti", "tata", "baleno", "thar"];
    ceoList = [
        {
            id: 1,
            company: "apple",
            name:"sundar pichai"
        },
        {
            id: 1,
            company: "amazon",
            name: "jeff bezos"
        },{
            id: 1,
            company: "meta",
            name:"mark zukerberg"
     },
    
    
    ]
}