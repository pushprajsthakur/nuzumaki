import { api, LightningElement } from 'lwc';
import GANTTCHART from '@salesforce/resourceUrl/anyChart'
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class GanttChart extends LightningElement {
   
    chartData
    chartLoaded =false
    abc
   connectedCallback(){

Promise.all([
    loadScript(this, GANTTCHART+'/js/anychart-bundle.min.js')
  
]).then(()=>{
    console.log("1");
    Promise.all([
        loadScript(this, GANTTCHART+'/js/anychart-core.min.js')
    ])
})
.then(()=>{
      
        console.log("4nd");
        this.chartLoaded = true;
        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)
        this.abc = anychart.onDocumentReady(function() {
 
                  // set the data
                  var data = {
                      header: ["Name", "Death toll"],
                      rows: [
                      ["San-Francisco (1906)", 1500],
                        ["Messina (1908)", 87000],
                        ["Ashgabat (1948)", 175000],
                        ["Chile (1960)", 10000],
                        ["Tian Shan (1976)", 242000],
                        ["Armenia (1988)", 25000],
                        ["Iran (1990)", 50000]
                  ]};
           
                  // create the chart
                  var chart = anychart.bar();
           
                  // add the data
                  chart.data(data);
           
                  // set the chart title
                  chart.title("The deadliest earthquakes in the XXth century");
           
                  // draw
                  chart.container("container");
                  chart.draw();
                });

        
 
    }).catch(error => {
            console.error(error);
                    })
               
           
    }






// loadChartAll(){
//    this.chartData = anychart.onDocumentReady(function () {    	
//         // create data
//         var data = [
//           {
//             id: "1",
//             name: "Development",
//             actualStart: "2018-01-15",
//             actualEnd: "2018-03-10",
//             children: [
//               {
//                 id: "1_1",
//                 name: "Analysis",
//                 actualStart: "2018-01-15",
//                 actualEnd: "2018-01-25"
//               },
//               {
//                 id: "1_2",
//                 name: "Design",
//                 actualStart: "2018-01-20",
//                 actualEnd: "2018-02-04"
//               },
//               {
//                 id: "1_3",
//                 name: "Meeting",
//                 actualStart: "2018-02-05",
//                 actualEnd: "2018-02-05"
//               },
//               {
//                 id: "1_4",
//                 name: "Implementation",
//                 actualStart: "2018-02-05",
//                 actualEnd: "2018-02-24"
//               },
//               {
//                 id: "1_5",
//                 name: "Testing",
//                 actualStart: "2018-02-25",
//                 actualEnd: "2018-03-10"
//               }
//           ]}
//         ];
//         // create a data tree
//         var treeData = anychart.data.tree(data, "as-tree");  
//         // create a chart
//         var chart = anychart.ganttProject();    
//         // set the data
//         chart.data(treeData);
//         // set the container id
//         chart.container("container");  
//         // initiate drawing the chart
//         chart.draw();
//         // fit elements to the width of the timeline
//         chart.fitAll();
//       });  
// return this.chartData
//     }
    }