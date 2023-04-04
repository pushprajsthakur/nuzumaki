import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descreiptionOne'
import DESCRIPTION_TWO from '@salesforce/label/c.descreiptionTwo'

export default class CustomLabelsDemo extends LightningElement {
   
    
    LABELS = {
        descriptionOne:DESCRIPTION_ONE,
        descriptionTwo:DESCRIPTION_TWO
    }

}