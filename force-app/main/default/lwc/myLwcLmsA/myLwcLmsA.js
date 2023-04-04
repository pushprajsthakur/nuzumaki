import { LightningElement, wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement { 
    inputValue
    @wire(MessageContext)
    context
    
    inputHandler(event) {
        this.inputValue = event.target.value;
        // console.log(this.inputValue);
    }
    publishMessage() {
        
        const message = {
            msg: {
               value:this.inputValue
           } 
        }
        publish(this.context, SampleMessageChannel, message)
    }
}