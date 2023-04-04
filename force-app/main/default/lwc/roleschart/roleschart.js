import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3 from '@salesforce/resourceUrl/d3';
export default class Roleschart extends LightningElement {

    svgWidth = 400;
    svgHeight = 400;
    d3Initialized = false;

    renderedCallback() {
        if (this.d3Initialized) {
            return;
        }
        this.d3Initialized = true;

        Promise.all([
            loadScript(this, D3 + '/d3-flextree.js')
            
        ]).then(() => {
            loadScript(this, D3 + '/d3.v7.min.js')
            
        })
            .then(() => {
                console.log('both lib loaded successfully');
                this.initializeD3();
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading D3',
                        message: error.message,
                        variant: 'error'
                    })
                );
            });
    }
    initializeD3() {
        
    }
}