import { LightningElement, api, track } from 'lwc';
    import { NavigationMixin } from 'lightning/navigation';
    import getOpportunityList from '@salesforce/apex/multiLwcCtrl.getOpportunityList';
    
export default class MultiLwc extends NavigationMixin(LightningElement) {
        @api recordId;
        @track picklistValues = [];
        @track resultValue = [];
    
        //activeSection = ['Section1', 'Section2', 'Section3', 'Section4', 'Section5', 'Section6'];
        //oppNumber;
    
        showDemo = false;
        showDis = false;
        showEdu = false;
        showEnv = false;
        showLab = false;
    
        democracyValue = 0;
        democracyValueTemp = 0;

        disasterValue = 0;
        disasterValueTemp = 0;
       
        educationValue = 0;
        educationValueTemp = 0;
        
        environmentValue = 0;
        environmentValueTemp = 0;
      
        laborValue = 0;
        laborValueTemp = 0;
    
        totalValue = 0;
    
        mapKeys = ['Environment__c',
            'Education__c',
            'Disaster__c',
            'Democracy__c',
            'Labor__c'];
    
        @track selectedValue = {
            'Environment__c': 0,
            'Education__c': 0,
            'Disaster__c': 0,
            'Democracy__c': 0,
            'Labor__c': 0
        };
    
        connectedCallback() {
            this.getOpportunityValues();
        }
    
        @api handleSave() {
            // this.isInputValid();
            const fields = this.template.querySelectorAll('lightning-input-field');
            let isValid = this.checkValidity(fields);
            if (isValid == true) {
                this.template.querySelector('lightning-record-edit-form ').submit();
            }
            
        }
    
        checkValidity(fields) {
            let isValid = true;
            for (let field of fields) {
                if (!field.reportValidity()) {
                    isValid = false;
                    break;
                }
            }
            return isValid;
        }
    
        getOpportunityValues() {
            console.log('recordId: ' + this.recordId);
            getOpportunityList({
                recordId: this.recordId
            }).then(result => {
                if (result != null && result != undefined) {
    
                    var temp = result[0].Thematic__c.split(';');
                    
                    this.resultValue = result;
                    //this.oppNumber = result.map((item) => (item.Opportunity_Number__c));
                    this.totalValue = parseInt(result.map((item) => (item.Total__c) ? item.Total__c : 0));
                    this.democracyValue = parseInt(result.map((item) => (item.Democracy__c) ? item.Democracy__c : 0));
                    this.disasterValue = parseInt(result.map((item) => (item.Disaster__c) ? item.Disaster__c : 0));
                    this.educationValue = parseInt(result.map((item) => (item.Education__c) ? item.Education__c : 0));
                    this.environmentValue = parseInt(result.map((item) => (item.Environment__c) ? item.Environment__c : 0));
                    this.laborValue = parseInt(result.map((item) => (item.Labor__c) ? item.Labor__c : 0));
                    this.mapKeys.forEach(item => {
                        if (result[0][item] != undefined) {
                            this.selectedValue[item] = result[0][item];
                        }
                    })
                
                    temp.forEach(item => {
                        if (item == 'Democracy') {
                            this.showDemo = true;
                        }
                        if (item == 'Disaster') {
                            this.showDis = true;
                        }
                       
                        if (item == 'Education') {
                            this.showEdu = true;
                        }
                        if (item == 'Environment') {
                            this.showEnv = true;
                        }
                        if (item == 'Labor') {
                            this.showLab = true;
                        }
                    })
                }
            })
        }
    
        handleSubmit(event) {
            console.log('onsubmit event recordEditForm' + event.detail.fields);
    
        }
        handleError(event){
            console.log('event: ' + JSON.stringify(event.detail));
        }
    
        handleSuccess(event) {
            this.recordId = event.detail.id;
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Opportunity',
                    actionName: 'view'
                },
            });
        }
    
        handleChange(event) {
            this.picklistValues.push(event.detail.value);
    
            for (let i = 0; i < this.picklistValues.length; i++) {
                var temp = this.picklistValues[i].split(';');
    
                if (temp.includes('Disaster')) {
                    this.showDis = true;
                    this.selectedValue['Disaster__c'] = this.disasterValueTemp == 0 ? this.disasterValue : this.disasterValueTemp;
                } else {
                    this.disasterValueTemp = 0;
                    this.showDis = false;
                    this.selectedValue['Disaster__c'] = 0;
                }
    
                if (temp.includes('Democracy')) {
                    this.showDemo = true;
                    this.selectedValue['Democracy__c'] = this.democracyValueTemp == 0 ? this.democracyValue : this.democracyValueTemp;
                } else {
                    this.democracyValueTemp = 0;
                    this.showDemo = false;
                    this.selectedValue['Democracy__c'] = 0;
                }
    
                if (temp.includes('Education')) {
                    this.showEdu = true;
                    this.selectedValue['Education__c'] = this.educationValueTemp == 0 ? this.educationValue : this.educationValueTemp;
                } else {
                    this.educationValueTemp = 0;
                    this.showEdu = false;
                    this.selectedValue['Education__c'] = 0;
                }
    
                if (temp.includes('Environment')) {
                    this.showEnv = true;
                    this.selectedValue['Environment__c'] = this.environmentValueTemp == 0 ? this.environmentValue : this.environmentValueTemp;
                } else {
                    this.environmentValueTemp = 0;
                    this.showEnv = false;
                    this.selectedValue['Environment__c'] = 0;
                }
    
                if (temp.includes('Labor')) {
                    this.showLab = true;
                    this.selectedValue['Labor__c'] = this.laborValueTemp == 0 ? this.laborValue : this.laborValueTemp;
                } else {
                    this.laborValueTemp = 0;
                    this.showLab = false;
                    this.selectedValue['Labor__c'] = 0;
                }
            }
    
            this.totalValue = 0;
            this.mapKeys.forEach(item => {
                this.totalValue += parseInt(this.selectedValue[item]);
            })
            this.picklistValues = [];
        }
    
        handleCalculation(event) {
    
            this.selectedValue[event.currentTarget.fieldName] = (event.detail.value) ? event.detail.value : 0;
            if (event.currentTarget.name == 'Democra') {
                this.democracyValueTemp = event.target.value;
            }
            if (event.currentTarget.name == 'Disas') {
                this.disasterValueTemp = event.target.value;
            }
            if (event.currentTarget.name == 'Educa') {
                this.educationValueTemp = event.target.value;
            }
            if (event.currentTarget.name == 'Environ') {
                this.environmentValueTemp = event.target.value;
            }
            if (event.currentTarget.name == 'Labo') {
                this.laborValueTemp = event.target.value;
            }
            this.totalValue = 0;
            this.mapKeys.forEach(item => {
                this.totalValue += parseInt(this.selectedValue[item]);
            })
    
            /*if (this.totalValue > 100) {
                const evt = new ShowToastEvent({
                    title: 'Error',
                    message: 'Total percentage should not be greater than 100%',
                    variant: 'error',
                    mode: 'dismissable'
    
                });
                this.dispatchEvent(evt);
            }*/
        }
    
        }