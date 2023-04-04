import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor() {
        super();
        //this.template.addeventlistner
        console.log('child Constructor called');
    }
    connectedCallback() {
        console.log('child connectedcallback callback');
        throw new Error('Loading OF Child Component Failed');
    }
    renderedCallback() {
        console.log('child rendered callback');
    }
    disconnectedCallback() {
        alert('CHild disconnectedcallback called');
        window.removeEventListener('click', this.handleClick);
    }
}