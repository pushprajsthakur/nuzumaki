import { LightningElement, api } from 'lwc';
import orgchartJs from '@salesforce/resourceUrl/orgchart';
import {loadScript} from 'lightning/platformResourceLoader'
export default class OrgChart extends LightningElement {
    isChartJsInitialized
    chart

    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        loadScript(this, orgchartJs+ '/orgchart.js')
        .then(()=>{
            console.log("chartJs loaded succesfully")
            this.isChartJsInitialized = true
            this.loadCharts()
        })
        .catch(error=>{
            console.error(error)
        })
    }

    loadCharts(){
        const div = this.template.querySelector('.tree')
        console.log("tree"+JSON.stringify(div));
        //const ctx = this.template.querySelector('.tree').appendChild(div)
       console.log(tree);
        this.chart = new window.OrgChart(div,   {
            nodeBinding: {
                field_0: "name"
            },
            nodes: [
                { id: 1, name: "Amber McKenzie" },
                { id: 2, pid: 1, name: "Ava Field" },
                { id: 3, pid: 1, name: "Peter Stevens" }  
            ]
        })
    }

    
}