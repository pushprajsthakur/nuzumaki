import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NaviagteObjectPage extends NavigationMixin(LightningElement) {
    NaviagteToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
    NaviagteToNewRecordWithDefault(){
      const defaultValues  = encodeDefaultFieldValues({
          FirstName:'Itachi',
          LastName:'Uchiha',
          LeadSource:'Other'
      })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultValues 
            }
        })
    }
    NaviagteToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }
    NaviagteToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}