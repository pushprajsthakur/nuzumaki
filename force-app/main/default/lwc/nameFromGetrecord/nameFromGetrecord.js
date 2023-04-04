import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
import ID from '@salesforce/schema/Contact.Id'
// import fetchDataHelper from './fetchDataHelper';

const COLS = [
    { label: "Name", fieldName: "Name", editable: true},
    { label: "Id", fieldName: "Id", editable: true},
    { label: "key", fieldName: "key", editable: true}
];
export default class NameFromGetrecord extends LightningElement {
    @api recordId
    columns =COLS
        contacts = []
        result = []
        convertArr
        obj
        arrto
    @wire(getRecord,{recordId:'$recordId', fields:[CONTACT_NAME,ID]})
    recordHandler({data,error}){
        if(data){
          
          this.arrto = {
            "Name":data.fields.Name.value,
            "Id":this.recordId,
         
          }
          this.contacts= this.arrto;

      
            console.log('contacts: ',this.contacts);
        }
        if(error){
            console.error(error);
        }
    }
}