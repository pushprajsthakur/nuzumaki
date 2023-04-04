import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'

const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    userDetails
    //0055i000001UzzpAAC
    //@wire(adapter,adptercnfig)
    //property/function
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetails = data.fields
        }
        if(error){
            console.log(error);
        }
       
    }
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailPrperty

}