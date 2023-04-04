import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/NavigateVfPage'
            }
        }).then(generatedurl => {
            console.log(generatedurl);
            window.open(generatedurl, "_blank")
        })
    }
}