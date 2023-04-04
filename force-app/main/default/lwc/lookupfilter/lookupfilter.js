import { api, LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.AccountNumber',
    'Account.Rating',
    'Account.Phone',
];
export default class Lookupfilter extends NavigationMixin(LightningElement) {

    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    AccountData({data,error}){
        if(data){
            console.log();
        }
    }
    connectedCallback() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'                
            },
            state : {
                nooverride: '1',
                defaultFieldValues:"Name=Test LWC Acc,AccountNumber=123456,Rating=Hot,Phone=1234568975"
            }
        });
    }
}