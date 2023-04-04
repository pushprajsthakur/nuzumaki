import { api, LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount'
import EDUCATION_FIELD from '@salesforce/schema/Opportunity.Education__c'
import DISASTER_FIELD from '@salesforce/schema/Opportunity.Disaster__c'
import DEMOCRACY_FIELD from '@salesforce/schema/Opportunity.Democracy__c'
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate'
import NAME_FIELD from '@salesforce/schema/Opportunity.Name'
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';


export default class PaginationOpportunity extends NavigationMixin(LightningElement) {
    ampm = false;
    start = Date.now();
    objectName = OPPORTUNITY_OBJECT
    firstPage=false
    secondPage=false
    thirdPage=false
    disableSubmit=true
    currentPage =1
    totalPage=3
    name=''
    
     
   @wire(getRecord, { recordId:'0065i000004XmHHAA0', fields:[NAME_FIELD]})
   opprtunityHandler({data, error}){
    if(data){
        console.log(data);
        this.name = getFieldValue(data, NAME_FIELD) 
        
    }
    if(error){
        console.log(error);
    }
   
}

   
   
    fieldsDisplay={
        amountField:AMOUNT_FIELD,
        educationField:EDUCATION_FIELD,
        disaterField:DISASTER_FIELD,
        democracyField:DEMOCRACY_FIELD,
        closeDateField:CLOSE_DATE_FIELD
    }
    


    recordViewMode(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{ 
                recordId:'0065i000004XmHHAA0',
                objectApiName:'Opportunity',
                actionName:'view'
            }
        })
    }
    oppsName
    renderedCallback(){

       if(this.currentPage == 1){
        this.firstPage = true
        this.disableSubmit=true
        
       }
       if(this.currentPage == 2){
        this.secondPage = true
        this.disableSubmit=true
       
       }
       if(this.currentPage == 3){
        this.thirdPage = true
        this.disableSubmit=false
       
       }
    }

   get disablePrevious(){
    return this.currentPage<=1
    }
    get disableNext(){
        return this.currentPage>=this.totalPage
    }


    previousHandler(){
        if(this.currentPage == 2){
            this.currentPage -=1
            this.firstPage = true
            this.secondPage = false
            this.thirdPage = false
        }
        else if(this.currentPage == 3){
            this.currentPage -=1
            this.firstPage = false
            this.secondPage = true
            this.thirdPage = false
        }

    }

    nextHandler(){
        if(this.currentPage == 1){
            this.currentPage =  this.currentPage + 1
            console.log('1');
            this.firstPage = false
            this.secondPage = true
            this.thirdPage = false
        }
        else if (this.currentPage == 2){
            this.currentPage =  this.currentPage + 1
            console.log('2');
            this.firstPage = false
            this.secondPage = false
            this.thirdPage = true
           
        }
        
    }
}