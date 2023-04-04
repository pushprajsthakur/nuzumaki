import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe , unsubscribe , MessageContext , APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    recievedMessage
    subscription
    
    @wire(MessageContext)
    context

    connectedCallback() {
        this.subscribeMessage()
       
    }
    
    subscribeMessage(){
        this.subscription = subscribe(this.context, SampleMessageChannel, (message)=> this.handleMessage(message), {scope:APPLICATION_SCOPE})
        console.log("connected");
    }
    handleMessage(message) {
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : "No Message Published"
    }
    unsubscribeMsg() {
        unsubscribe(this.subscription)
        this.subscription = null
    }
}