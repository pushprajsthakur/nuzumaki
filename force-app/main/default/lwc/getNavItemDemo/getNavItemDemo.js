import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'
export default class GetNavItemDemo extends LightningElement {
    result
    @wire(getNavItems, {
        navItemName:['standard-Account'],
        pageSize:30
    })
    navItemsHandler({data}){
        if(data){
            console.log(data)
            this.result = data.navItems[0]
        }

    }
}