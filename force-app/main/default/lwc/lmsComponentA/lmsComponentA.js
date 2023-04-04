import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/yourMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {

    inputValue;
    @wire(MessageContext)
    context;

inputHandler(event){
    this.inputValue = event.target.value
}
    publishMessage() {
        console.log("publishmesssge" + message);
    
        const message={
            lmsDataAll:{
                value:this.inputValue
            }
        }
    //publish(messageContext, messagechannel,message)
    publish(this.context, SAMPLEMC, message)
    console.log("publishmesssge" + message);
}
}