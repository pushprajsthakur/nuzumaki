import { LightningElement } from 'lwc';
import {loadStyle,loadScript } from 'lightning/platformResourceLoader';
import CORE from '@salesforce/resourceUrl/core';
import GANTT from '@salesforce/resourceUrl/gantt';

export default class AnyGanttchart extends LightningElement {
  async connectedCallback() {
      
      Promise.all([
          loadScript(this, CORE),
          // loadScript(this, gantt)
      ]).then(() => { 
        Promise.all([
          // loadScript(this, core),
          loadScript(this, GANTT)
      ]).then(() => { 
          // create data
          var data = [
            {
              id: "1",
              name: "Development",
              actualStart: "2022-05-20",
              actualEnd: "2022-05-10",
              children: [
                {
                  id: "1_1",
                  name: "Analysis",
                  actualStart: "2022-05-15",
                  actualEnd: "2022-05-25"
                },
                {
                  id: "1_2",
                  name: "Design",
                  actualStart: "2022-05-20",
                  actualEnd: "2022-05-04"
                },
                {
                  id: "1_3",
                  name: "Meeting",
                  actualStart: "2022-05-05",
                  actualEnd: "2022-05-05"
                },
                {
                  id: "1_4",
                  name: "Implementation",
                  actualStart: "2022-05-05",
                  actualEnd: "2022-05-24"
                },
                {
                  id: "1_5",
                  name: "Testing",
                  actualStart: "2022-05-25",
                  actualEnd: "2022-05-10"
                }
            ]}
          ];
          // create a data tree
          var treeData = anychart.data.tree(data, "as-tree");  
          // create a chart
          var chart = anychart.ganttProject();    
          // set the data
          chart.data(treeData);
          // set the container id
          // chart.container("div1");  
         const div=this.template.querySelector('.chart'); 
          chart.container(div);
          // initiate drawing the chart
          chart.draw();
          // fit elements to the width of the timeline
          chart.fitAll();
    })
    .catch(error=>{
      console.log('error: ' + JSON.stringify(error));
    })
        
          
      });
      }
}