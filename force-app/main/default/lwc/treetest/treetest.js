import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript } from 'lightning/platformResourceLoader';
import testtree from '@salesforce/resourceUrl/basetreexy';
export default class Treetest extends LightningElement {
     
    d3Initialized = false;

    renderedCallback() {
        if (this.d3Initialized) {
            return;
        }
        this.d3Initialized = true;

        Promise.all([
            loadScript(this, testtree + '/basetreexy.js')

        ]).then(() => {
                console.log("library loaded successfully");
                //this.initializeD3();
            //     var mergedOptions = {
            //         ...BaseTree.defaults,
            //         ...options
            //     };
            //     this.setMargins(mergedOptions.margins);
            //    function setMargins(newMargins) {
            //         this._margins = newMargins;
            //         return this;
            //     }
             
                     var data = {
                        "id": 1,
                        "name": "Animals",
                        "type": "Root",
                        "description": "A living organism that feeds on organic matter",
                        "children": [
                            {
                                "id": 2,
                                "name": "Carnivores",
                                "type": "Type",
                                "description": "Diet consists solely of animal materials",
                                "children": [
                                    {
                                        "id": 3,
                                        "name": "Felidae",
                                        "type": "Family",
                                        "description": "Also known as cats",
                                        "children": [
                                            {
                                                "id": 4,
                                                "name": "Siamese Cat",
                                                "type": "Organism",
                                                "description": "A breed of Asian cat. it has white fur",
                                                "children": []
                                            },
                                            {
                                                "id": 5,
                                                "name": "Javanese Cat",
                                                "type": "Organism",
                                                "description": "Domestic breed of cats, of oriental origin",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 6,
                                        "name": "Ursidae",
                                        "type": "Family",
                                        "description": "Also known as bears",
                                        "children": [
                                            {
                                                "id": 7,
                                                "name": "Polar Bear",
                                                "type": "Organism",
                                                "description": "White bear native to the Arctic Circle",
                                                "children": []
                                            },
                                            {
                                                "id": 8,
                                                "name": "Panda Bear",
                                                "type": "Organism",
                                                "description": "Spotted bear native to South Central China",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 9,
                                        "name": "Canidae",
                                        "type": "Family",
                                        "description": "Also known as dogs",
                                        "children": [
                                            {
                                                "id": 10,
                                                "name": "Labradore Retriever",
                                                "type": "Organism",
                                                "description": "One of the most popular dog breeds in Canada, UK and USA",
                                                "children": []
                                            },
                                            {
                                                "id": 11,
                                                "name": "Golden Retriever",
                                                "type": "Organism",
                                                "description": "Generally friendly, loyal and intelligent breed of dogs",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 12,
                                "name": "Herbivores",
                                "type": "Type",
                                "description": "Diet consists solely of plant matter",
                                "children": [
                                    {
                                        "id": 13,
                                        "name": "Bovidae",
                                        "type": "Family",
                                        "description": "Also known as cattle or cows",
                                        "children": [
                                            {
                                                "id": 14,
                                                "name": "Angus Cattle",
                                                "type": "Organism",
                                                "description": "Scottish breed of black cattle",
                                                "children": []
                                            },
                                            {
                                                "id": 15,
                                                "name": "Holstein Friesian Cattle",
                                                "type": "Organism",
                                                "description": "Known as the highest-production dairy animals",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 16,
                                        "name": "Equidae",
                                        "type": "Family",
                                        "description": "Also known as horses",
                                        "children": [
                                            {
                                                "id": 17,
                                                "name": "Barb Horse",
                                                "type": "Organism",
                                                "description": "A breed of Northern African horses with high stamina and hardiness. Their generally hot temperament makes it harder to tame.",
                                                "children": []
                                            },
                                            {
                                                "id": 18,
                                                "name": "Holsteiner Horse",
                                                "type": "Organism",
                                                "description": "One of the oldest of warmblood breeds, tracing back to the 13th century. Originates from Germany",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 19,
                                        "name": "Leporidae",
                                        "type": "Family",
                                        "description": "Also known as rabbits",
                                        "children": [
                                            {
                                                "id": 20,
                                                "name": "Lionhead rabbit",
                                                "type": "Organism",
                                                "description": "Unusual rabbit with a wool mane circling it's head, similar to a lion, hence it's name.",
                                                "children": []
                                            },
                                            {
                                                "id": 21,
                                                "name": "Silver Fox Rabbit",
                                                "type": "Organism",
                                                "description": "Bred for their meat and unique fur.",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 22,
                                "name": "omnivores",
                                "type": "Type",
                                "description": "Omni"
                            }

                        ]
                    }
    
                
                
                  var treePlugin = new d3.mitchTree.boxedTree()
                    .setData(data)
                    .setElement(this.template.querySelector('[data-id="visualisation"]'))
                    .setIdAccessor(function(data) {
                        return data.id;
                    })
                    .setChildrenAccessor(function(data) {
                        return data.children;
                    })
                    .setBodyDisplayTextAccessor(function(data) {
                        return data.description;
                    })
                    .setTitleDisplayTextAccessor(function(data) {
                        return data.name;
                    })
                   
                    
                    
                      .initialize();
                    //.setOrientation('topToBottom')
                  //.setMargins({
                //     top: 20,
                //     right: 20,
                //     bottom: 20,
                //     left: 20
                // })  
                /* Alternative Options Object Syntax, opposed to the Fluent Interface Above
                    var options = {
                        data: data,
                        element: document.getElementById("visualisation"),
                        getId: function (data) {
                            return data.id;
                        },
                        getChildren: function (data) {
                            return data.children;
                        },
                        getBodyDisplayText: function (data) {
                            return data.description;
                        },
                        getTitleDisplayText: function (data) {
                            return data.name;
                        }
                    };*/
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading MItch js',
                        message: error.message,
                        variant: 'error'
                    })
                );
            })
    }
    // setOrientation(orientation) {
    //     var x0, y0;
    //     var x0, y0;
    //     if (this.orientation() === 'topToBottom')
    //     {
    //         if (needToCenterView === false) {
    //             x0 = this.getWidth() / 2;
    //         }
    //         else {
    //             x0 = 0;
    //         }
    //         y0 = this.getHeight() / 4;
    //     }
    //     else
    //     {
    //         if (needToCenterView === false) {
    //             x0 = this.getHeight() / 2;
    //         }
    //         else {
    //             x0 = 0;
    //         }
    //         y0 = 0;
    //     }

    //     this.getRoot().x0 = x0;
    //     this.getRoot().y0 = y0;

    //     if (this.getZoomListener()) {
    //         this.getZoomListener()
    //             .extent([[0, 0], [this.getWidthWithoutMargins(), this.getHeightWithoutMargins()]]);
    //     }
        
    
    //     return  orientation;
        
    // }
    //initializeD3() { }
}