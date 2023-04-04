import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import RenderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    selectedBtn = '';
    render() {
        return this.selectedBtn === 'Signup' ? signupTemplate : 
            this.selectedBtn === 'Signin' ? signinTemplate :
        RenderTemplate;

    }
    handleClick(event) {
        this.selectedBtn = event.target.label;
    }
    sumbmitHandler(event) {
        console.log(`${event.target.label}Successfully`);
    }
}