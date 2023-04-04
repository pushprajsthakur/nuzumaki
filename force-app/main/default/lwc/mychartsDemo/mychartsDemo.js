import { LightningElement, wire } from 'lwc';
import getEvents from '@salesforce/apex/MyEventController.getEvents'
export default class MychartsDemo extends LightningElement {


    pieChartLabels=[]
    pieChartData=[]


    

    @wire(getEvents)
    eventHandler({ data, error }) {
        if (data) {
            console.log(data)
            const result = data.reduce((json, val) => ({ ...json, [val.Status__c]: (json[val.Status__c] | 0) + 1 }), {})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
                console.log('pieChartLabels'+this.pieChartLabels)
                console.log('pieChartData'+this.pieChartData)
            }
        }
        if (error) {
            console.error(error)
        }
    }
}