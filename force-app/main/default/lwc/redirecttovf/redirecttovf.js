import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class Redirecttovf extends NavigationMixin(LightningElement) {
@api recordId
    connectedCallback(){
    
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/VFPAge1'
            }
        }).then(generatedurl => {
            console.log(generatedurl+this.recordId);
            window.open(generatedurl, "_blank")
        })
    }
}