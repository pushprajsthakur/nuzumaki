import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail;
    @api 
    get detail() {
        return this.userDetail;
        
    }
    set detail(data) {
        const newAge = data.age * 2;
        this.userDetail = { ...data, age: newAge ,"location":"New York"}; 
    }
}