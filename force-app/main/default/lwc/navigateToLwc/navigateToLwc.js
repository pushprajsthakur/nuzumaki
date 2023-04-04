import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    naviagteToLwc(){
        var defination = {
            componentDef:'c:navigationLwcTarget',
            attributes:{
                recordId:'4515486622'
            }
        }
        this[NavigationMixin.Navigate]({
           type:'standard__webPage',
           attributes:{
               url:'/one/one.app#'+btoa(JSON.stringify(defination))
           }
        })
    }
}