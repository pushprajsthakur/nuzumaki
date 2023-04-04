import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    isChildVisible = false;
    constructor() {
        super();
        //this.template.addeventlistner
        console.log('Prent Constructor called');
    }
    connectedCallback() {
        console.log('parent connectedcallback callback');
    }
    renderedCallback() {
        console.log('Parent rendered callback');
    }
    name;
    changehandler(event) {
        this.name = event.target.value;
        
    }
    handleClick(event) {
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}