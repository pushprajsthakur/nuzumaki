import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NaviagteHomeDemo extends NavigationMixin(LightningElement) {
    naviagteHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
    naviagteChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }
}