import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {



    okHandler() {
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail: "Modal Closed Succesfully"
                                  });
        this.dispatchEvent(myEvent);
    }
    footerHandler() {
        console.log('footer event called')
    }
}