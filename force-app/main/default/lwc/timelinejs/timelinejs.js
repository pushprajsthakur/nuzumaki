import { LightningElement } from 'lwc';
import vis_timeline_graph2d from '@salesforce/resourceUrl/vis_timeline_graph2d'
import {loadScript,loadStyle} from 'lightning/platformResourceLoader'
export default class Timelinejs extends LightningElement {

    isChartJsInitialized
    chart
    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        Promise.all([
            loadScript(this, vis_timeline_graph2d + '/vis-timeline-graph2d.min.js'),
            loadStyle(this, vis_timeline_graph2d + '/vis-timeline-graph2d.min.css')
        ])
        .then(()=>{
            console.log("chartJs loaded succesfully")
            this.isChartJsInitialized = true
            this.loadCharts()
        }).catch(error=>{
            console.error(error)
        })
    }

    loadCharts(){
   
    

    var container = this.template.querySelector('[data-id="visualisation"]');

    // note that months are zero-based in the JavaScript Date object
    var items = new vis.DataSet([
      {
        start: new Date(2010, 7, 23),
        content:
          '<div>Conversation</div><img src="../resources/img/community-users-icon.png" style="width:32px; height:32px;">',
      },
      {
        start: new Date(2010, 7, 23, 23, 0, 0),
        content:
          '<div>Mail from boss</div><img src="../resources/img/mail-icon.png" style="width:32px; height:32px;">',
      },
      { start: new Date(2010, 7, 24, 16, 0, 0), content: "Report" },
      {
        start: new Date(2010, 7, 26),
        end: new Date(2010, 8, 2),
        content: "Traject A",
      },
      {
        start: new Date(2010, 7, 28),
        content:
          '<div>Memo</div><img src="../resources/img/notes-edit-icon.png" style="width:48px; height:48px;">',
      },
      {
        start: new Date(2010, 7, 29),
        content:
          '<div>Phone call</div><img src="../resources/img/Hardware-Mobile-Phone-icon.png" style="width:32px; height:32px;">',
      },
      {
        start: new Date(2010, 7, 31),
        end: new Date(2010, 8, 3),
        content: "Traject B",
      },
      {
        start: new Date(2010, 8, 4, 12, 0, 0),
        content:
          '<div>Report</div><img src="../resources/img/attachment-icon.png" style="width:32px; height:32px;">',
      },
    ]);
    
    var options = {
      editable: true,
      margin: {
        item: 20,
        axis: 40,
      },
    };
    
    var timeline = new vis.Timeline(container, items, options);
    
    }
}