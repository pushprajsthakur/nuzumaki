import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavIgateToNavItemPage extends NavigationMixin(LightningElement) {
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Lwc_Fundamentals'
            }
        })
    }
}