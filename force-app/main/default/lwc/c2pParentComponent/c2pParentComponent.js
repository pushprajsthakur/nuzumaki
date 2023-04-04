import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isModal = false;
    msg;
    clickHandler() {
        this.isModal = true;
    }
    closeHandler(event) {
        this.msg = event.detail;
        this.isModal = false;
        
    }
}