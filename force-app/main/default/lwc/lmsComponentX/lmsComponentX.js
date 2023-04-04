import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/yourMessageChannel__c';



import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
   
    recievedMessage;
    @wire(MessageContext)
    context
    connectedCallback() {
        this.subscribeMessage();
    }
    subscribeMessage() {
    
        subscribe(this.context, SAMPLEMC, (message) => { this.handleMessage(message)}, {scope: APPLICATION_SCOPE})
    }
    handleMessage(message) {
        this.recievedMessage = message.lmsDataAll.value ? message.lmsDataAll.value : 'no message published';
    }
}