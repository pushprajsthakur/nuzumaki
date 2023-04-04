import { LightningElement, wire } from 'lwc';
import getuserwithparent from '@salesforce/apex/Getusers.getuserwithparent'

export default class OrgtreeDemo extends LightningElement {
    dynamicdata = []
    showModal
    @wire(getuserwithparent)
    userhandler({data,error}){
        if(data){
            console.log(data);
            console.log(JSON.stringify(data.UserRoleId));
            console.log(JSON.stringify(data.UserRole));
            this.dynamicdata = data
        }
        if(error){
            console.error(error);
        }

    }

}