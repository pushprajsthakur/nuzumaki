import { api, LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3 from '@salesforce/resourceUrl/d3';
import getuserwithparent from '@salesforce/apex/Getusers.getuserwithparent';
import fetchUser from '@salesforce/apex/GetUserRoles.fetchUser';

export default class Orgtree extends LightningElement {
d3Initialized = false;
chartData =[];

renderedCallback() {

    if (this.d3Initialized) {
        return;
    }
    this.d3Initialized = true;
    this.fetchUserRole();
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
                dy = 0,dx = 0, //parseFloat(text.attr("dy")),
                tspan = text.text(null)
                            .append("tspan")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("dx", dx + "em")
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
                .attr("width", 1600)
                .attr("height",750)
                .append("g")
                .attr("transform", "translate(50,50)")
var div = d3.select(this.template.querySelector('[data-id="visualisation"]')).append("div")
            .style("position","fixed")
            .style("top","0")
            .style("right","0")
            .style("background-color","#6daef8")
            .style("transition","0.5s")
            .style("text-align","center")
            .style("width","350px")
            .style("height","950px")
            .style("font","1.5em")
            .style("color","black")
            .style("border","solid 1px black")
            .style("opacity","0")
            .style("display","none")
            .classed("my",true)

            function mouseover(d,i){
                console.log("over");
                console.log(d);
                console.log(i.id);
                div.html("Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id+"Hiiiii"+i.id+"<br />"+"byeeee"+i.id)
                .style("opacity",1)
                .style("display","block");
            }
            function mouseout(){
                console.log("out");

                div.style("opacity",1e-6)
                .style("display","none");
            }
    var data = [
    {
        "Name": "CEO",
        "Id": "00E5i000001R83gEAC"
    },
    {
        "Name": "CFO",
        "Id": "00E5i000001R83nEAC",
        "ParentRoleId": "00E5i000001R83gEAC"
    },
    {
        "Name": "Channel Sales Team",
        "Id": "00E5i000001R83qEAC",
        "ParentRoleId": "00E5i000001R83mEAC"
    },
    {
        "Name": "COO",
        "Id": "00E5i000001R83xEAC",
        "ParentRoleId": "00E5i000001R83gEAC"
    },
    {
        "Name": "Customer Support, International",
        "Id": "00E5i000001R83uEAC",
        "ParentRoleId": "00E5i000001R83lEAC"
    },
    {
        "Name": "Customer Support, North America",
        "Id": "00E5i000001R83pEAC",
        "ParentRoleId": "00E5i000001R83lEAC"
    },
    {
        "Name": "Director, Channel Sales",
        "Id": "00E5i000001R83mEAC",
        "ParentRoleId": "00E5i000001R83iEAC"
    },
    {
        "Name": "Director, Direct Sales",
        "Id": "00E5i000001R83jEAC",
        "ParentRoleId": "00E5i000001R83iEAC"
    },
    {
        "Name": "Eastern Sales Team",
        "Id": "00E5i000001R83tEAC",
        "ParentRoleId": "00E5i000001R83jEAC"
    },
    {
        "Name": "Installation & Repair Services",
        "Id": "00E5i000001R83sEAC",
        "ParentRoleId": "00E5i000001R83lEAC"
    },
    {
        "Name": "Marketing Team",
        "Id": "00E5i000001R83rEAC",
        "ParentRoleId": "00E5i000001R83kEAC"
    },
    {
        "Name": "SVP, Customer Service & Support",
        "Id": "00E5i000001R83lEAC",
        "ParentRoleId": "00E5i000001R83gEAC"
    },
    {
        "Name": "SVP, Human Resources",
        "Id": "00E5i000001R83wEAC",
        "ParentRoleId": "00E5i000001R83gEAC"
    },
    {
        "Name": "SVP, Sales & Marketing",
        "Id": "00E5i000001R83hEAC",
        "ParentRoleId": "00E5i000001R83gEAC"
    },
    {
        "Name": "VP, International Sales",
        "Id": "00E5i000001R83vEAC",
        "ParentRoleId": "00E5i000001R83hEAC"
    },
    {
        "Name": "VP, Marketing",
        "Id": "00E5i000001R83kEAC",
        "ParentRoleId": "00E5i000001R83hEAC"
    },
    {
        "Name": "VP, North American Sales",
        "Id": "00E5i000001R83iEAC",
        "ParentRoleId": "00E5i000001R83hEAC"
    },
    {
        "Name": "Western Sales Team",
        "Id": "00E5i000001R83oEAC",
        "ParentRoleId": "00E5i000001R83jEAC"
    }
];

        
    var dataStructure = d3.stratify().id(function (d) { return d.Id; }).parentId(function (d) { return d.ParentRoleId; })
        (data);
    var treeStructure = d3.tree().size([1400, 400]).separation(function(a, b) {
        console.log(a.depth,b.depth);
        return a.parent == b.parent ? 2 : 4;
    });

    // console.log(dataStructure);
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
        .attr("x", function(d) { return d.x-43; })
        .attr("y", function(d) { return d.y-20; })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)

        
        // .separation(function(a, b) {
        //             return a.parent == b.parent ? 1 : 1.25;
        //         })
       // .on('click', function(d,i) {
          
           
    //         console.log(i);
    //         console.log(d);
    // fetchUser({role:i.id})
    // .then(result=>{
    //     console.log('result: ' + JSON.stringify(result));
    //     this.showUser = true;
    //     if(result.length > 0){
    //          this.showUser = true;
    //         console.log( "this.showUser"+this.showUser );
    //         this.userList = [...result];
    //         if(this.showUser){
              
    //         }
    //     }
    // })
    // // this.visible=true;
            
    //         // handle events here
    //         // d - datum
    //         // i - identifier or index
    //         // this - the `<rect>` that was clicked
       //  });

        var names = svg.append("g").selectAll("text").data(information.descendants());
        names.enter().append("text")
            .text(function(d) { return d.data.Name; })
            .attr("x", function(d) { return d.x ; })
            .attr("y", function(d) { return d.y ; })
            .call(wrap, 60)
            .classed("bigger", true);
    }
        

      

   



fetchUserRole(){
getuserwithparent()
.then(result=>{
        console.log(result);

        this.chartData = result
})
}


// fetchUsers(userRoleId){
    
// }

closeModal(){
    this.showUser = false;
}

handleClick(event){
    console.log('event: ' + JSON.stringify(event));
    console.log('event Detail: ' + JSON.stringify(event.detail));

}
handleProductClicked(event) {
    const name = event.detail;
    this.bShowModal = true;
    // do dome stuff with this detail
}
// render(){
//     this.bShowModal = true;
// }
}