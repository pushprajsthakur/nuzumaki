import { LightningElement,api } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import orgChartJSF from '@salesforce/resourceUrl/orgchart';

export default class Orgchartjs extends LightningElement {
    error;
    chart;
    initialized = false;

    @api  recordId;

    contactsArray = [];
    myList = [];


    renderedCallback() {
        if (this.initialized) {
            return;
        }
      

    
                loadScript(this, orgChartJSF)
            
                    .then(() => {
                    console.log("Library loaded");
                        this.intializeD3();
                        this.initialized = true;
                })
                .catch((error) => {
                    this.error = error; 
                });        
    }
   
    intializeD3() {
        var nodes = [            
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 }
        ];

        var chart = new OrgChart(this.template.querySelector('[data-id="tree"]'), {
           
   

        });

        chart.load(nodes);
        //https://bl.ocks.org/willzjc/a11626a31c65ba5d319fcf8b8870f281
        //https://stackoverflow.com/questions/57483062/how-to-make-curved-lines-to-straight-lines-for-hierarchy-chart-using-d3-js
        //https://stackoverflow.com/questions/44067112/how-to-integrate-treant-js-in-a-react-projet
    }
}