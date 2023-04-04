import { api, LightningElement, track } from 'lwc';
import search from '@salesforce/apex/SearchController.search';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SearchComponent extends LightningElement {

   
    @track searchQuery = null;
    @track searchResults = null;
    @track showResults = false;
    columns = COLS
    @track showdata =[]
    @api valueChosen;
    

    inputChange(event){
        this.searchQuery = event.detail.value;
    }

    getResults(query){
        search({text:query}).then(data =>{
           
            this.searchResults = JSON.parse(JSON.stringify(data));
            console.log('Searched Result : '+JSON.stringify(this.searchResults));
            this.showResults = true;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Search Completed.',
                variant: 'Success'
            }));
        }).catch(errors =>{
            this.searchQuery = null;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: errors,
                variant: 'error'
            }));
            this.showResults = false;
        });
    }

    handleClick(event){
        if(this.searchQuery == null || this.searchQuery == undefined || this.searchQuery.trim() == ""){
            this.dispatchEvent(new ShowToastEvent({
                title:'Error',
                message: 'Search text needed',
                variant: 'error'
            }));
            this.showResults = false;
            return;
        }
        console.log('Searching Query '+this.searchQuery);
        this.getResults(this.searchQuery);
    }

    getSelectedRec() {
        var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();
        if(selectedRecords.length > 0){
            //console.log('selectedRecords are ', JSON.stringify(selectedRecords));
   
            let ids = '';
            selectedRecords.forEach(currentItem => {
                ids = ids + ',' + currentItem.Id;
            });
            //this.selectedIds = ids.replace(/^,/, '');
            this.valueChosen = ids.replace(/^,/, '');
           console.log('this.valueChosen'+JSON.stringify(this.valueChosen));
        }   
      }

}