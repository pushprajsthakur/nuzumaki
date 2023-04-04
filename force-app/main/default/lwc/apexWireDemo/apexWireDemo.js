import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccuntController.getAccountList';
export default class ApexWireDemo extends LightningElement {
   accountlist
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountsHandler({data, error}){
        if(data){
            this.accountlist = data.map(item =>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : item.Type === 'Customer - Direct' ? 'Direct' : '-------'
                return {...item, newType}
            })
        }
        if(error){
            console.error(error);
        }
    }
}