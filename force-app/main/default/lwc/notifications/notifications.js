import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {
    showToast(title,message, variant){
        const evt =  new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url:'http://www.google.com',
                    label:'Click Here'
                }
          ],
          mode:'sticky'
        })
        this.dispatchEvent(evt)
    }
    toastHandler(){
        this.showToast("Success!!", "{0} Account Created {1}", "success")
    }
    toastHandlerTwo(){
        this.showToast("Error!!","Account Creation FAiled","error")
    }
    toastHandlerThree(){
        this.showToast("Warning!!","Password is too short","warning")
    }
    toastHandlerFour(){
        this.showToast("Info!!","Summer 2 release is available","info")
    }
    // toastHandler(){
    //   const evt =  new ShowToastEvent({
    //         title:"Success!!",
    //         message:"Account Created!",
    //         variant:"success"
    //     })
    //     this.dispatchEvent(evt)
    // }
    // toastHandlerTwo(){
    //     const evt =  new ShowToastEvent({
    //         title:"Error!!",
    //         message:"Account Creation Failed!",
    //         variant:"error"
    //     })
    //     this.dispatchEvent(evt)
    // }
}