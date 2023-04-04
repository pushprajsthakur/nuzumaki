import { api, LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3 from '@salesforce/resourceUrl/d3';
export default class Orgtree extends LightningElement {
    d3Initialized = false;
    @api chartData
   

   
//     dynamicdata =  [{"Name":"Minato Namikaze", "UserRoleId": "00E5i000001R83nEAC","UserRole": {"ParentRoleId": '00E5i000001R83gEAC', "Id": '00E5i000001R83nEAC'}},
//     {"Name":"Bill Burr", "UserRoleId": "00E5i000001R83xEAC","UserRole": {"ParentRoleId": '00E5i000001R83gEAC', "Id": '00E5i000001R83xEAC'}},
//     {"Name":"Itachi Uchiha", "UserRoleId": "00E5i000001R83gEAC","UserRole": {"ParentRoleId": '', "Id": '00E5i000001R83gEAC'}}
       
// ];
    renderedCallback() {
        if (this.d3Initialized) {
            return;
        }
        this.d3Initialized = true;

            // loadStyle(this, D3 + '/style.css')//
            // add all css to css file then add it to static resource
        Promise.all([
            loadScript(this, D3 +'/d3.v7.min.js')
        ]).then(() => {
                console.log("libradry loaded succesfully");
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

       
        // var currNode = 3; // The active node ID
        // var position = d3.select("#" + currNode).name // The data I want to show, e.g. the name

        // onClickNode =(id)=> {
        //     console.log("Graph id ",id);
           
        //   };


        function wrap(text, width) {
            text.each(function () {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    x = text.attr("x"),
                    y = text.attr("y"),
                    dy = 0, //parseFloat(text.attr("dy")),
                    tspan = text.text(null)
                                .append("tspan")
                                .attr("x", x)
                                .attr("y", y)
                                .attr("dy", dy + "em");
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan")
                                    .attr("x", x)
                                    .attr("y", y)
                                    .attr("dy", ++lineNumber * lineHeight + dy + "em")
                                    .text(word);
                                    
                    }
                }
            });
        }
      
        
      
        var svg = d3.select(this.template.querySelector('[data-id="visualisation"]'))
                    .append("svg")
                    .attr("width", 1800)
                    .attr("height",1600)
                    .append("g")
                    .attr("transform", "translate(50,50)")

        var data = this.chartData


         
        var dataStructure = d3.stratify().id(function (d) { return d.Id; }).parentId(function (d) { return d.ParentRoleId; })
            (data);
        var treeStructure = d3.tree().size([1700, 400]);

        console.log(dataStructure);
        //.nodeSize([nodeWidth + horizontalSeparationBetweenNodes, nodeHeight + verticalSeparationBetweenNodes])
        // .separation(function(a, b) {
        //     return a.parent == b.parent ? 1 : 1.25;
        // });
        var information = treeStructure(dataStructure);
        // console.log(information.descendants());
        //  console.log(information.links());

      
        
            var connections = svg.append("g").selectAll("path")
            .data(information.links());
        connections.enter().append("path")
            .attr("d", function (d) {
                   return "M" + d.source.x + "," + d.source.y + " v 50 H" + d.target.x + " V" + d.target.y;
        });

        var rectangles = svg.append("g").selectAll("rect")
        .data(information.descendants());
            rectangles.enter().append("rect")
            .classed('filled', true)
            .attr("x", function(d) { return d.x-55; })
            .attr("y", function(d) { return d.y-20; })
            .on('click', function(d,i) {
                console.log(i.id);
                
                // handle events here
                // d - datum
                // i - identifier or index
                // this - the `<rect>` that was clicked
            })
            

            // .on("click", function(d) {
            // console.log(JSON.stringify(d));
            //   d3.event.stopPropagation();
            //                        });
        //    d3.selectAll('rect')
        //    .on('mouseover', function(e, d) {
        //      d3.select(this)
        //        .style('fill', 'Lavender');
        //    });

        // connections.enter().append("path").attr("d", function (d) {
    //         return "M" + d.source.x + "," + d.source.y + " C " + d.source.x + "," + (d.source.y + d.target.y) / 2 + " " + d.target.x + "," + (d.source.y + d.target.y) / 2 + " " + d.target.x + "," + d.target.y;
    // });
    
    
        var names = svg.append("g").selectAll("text").data(information.descendants());
        names.enter().append("text")
            .text(function(d) { return d.data.Name; })
            .attr("x", function(d) { return d.x ; })
            .attr("y", function(d) { return d.y ; })
            .call(wrap, 107)
            .classed("bigger", true);
    }

}