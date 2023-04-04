import { LightningElement } from 'lwc';

export default class ShadomStyling extends LightningElement {
    renderedCallback(){
        const style = document.createElement('style');
        style.innerText = `c-shadom-styling  .slds-button{  background: red;
            color: white;
        } `;
        this.template.querySelector('lightning-button').
            appendChild(style);
    }
}