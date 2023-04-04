import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccuntController.findAccounts'
export default class ApexImperativeWithPAramsDemo extends LightningElement {
    searchKey=''

    searchHandler(event){
        this.searchKey =event.target.value
        findAccounts({searchKey: this.searchKey})
        .then(result=>{
            this.accounts =result
        })
        .catch(error=>{
            console.error(error);
        })
    }
}