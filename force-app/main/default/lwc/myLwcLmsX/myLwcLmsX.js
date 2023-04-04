import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe , unsubscribe , MessageContext , APPLICATION_SCOPE } from 'lightning/messageService';
export default class MyLwcLmsX extends LightningElement {
    recievedMessage
    subscribeMessage = null;
    @wire(MessageContext)
    context

    connectedCallback() { 
       
        this.subscribeMessage = subscribe(this.context, SampleMessageChannel, (message)=> this.handleMessage(message), {scope:APPLICATION_SCOPE})
      
    }
    
    handleMessage(message) {
        this.recievedMessage = message.msg.value ? message.msg.value : "No Message Published"
       // console.log(message.msg.value.split('')+'data is');
    }
}