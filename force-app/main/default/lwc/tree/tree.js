import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import mitch from '@salesforce/resourceUrl/mitch';
export default class Mitchtree extends LightningElement {

    d3Initialized = false;

    renderedCallback() {
        if (this.d3Initialized) {
            return;
        }
        this.d3Initialized = true;

        Promise.all([
            loadScript(this, mitch + '/d3-mitch-tree.min.js')
        ])
            .then(() => {
                console.log("library loaded successfully");
                //this.initializeD3();
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
                                    "name": "Javanese Cat",
                                    "type": "Organism",
                                    "description": "Domestic breed of cats, of oriental origin",
                                    "children": []
                                },
                                {
                                    "id": 4,
                                    "name": "Polar Bear",
                                    "type": "Organism",
                                    "description": "White bear native to the Arctic Circle",
                                    "children": []
                                },
                                {
                                    "id": 5,
                                    "name": "Panda Bear",
                                    "type": "Organism",
                                    "description": "Spotted bear native to South Central China",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "name": "Herbivores",
                            "type": "Type",
                            "description": "Diet consists solely of plant matter",
                            "children": [
                                {
                                    "id": 7,
                                    "name": "Angus Cattle",
                                    "type": "Organism",
                                    "description": "Scottish breed of black cattle",
                                    "children": []
                                },
                                {
                                    "id": 8,
                                    "name": "Barb Horse",
                                    "type": "Organism",
                                    "description": "A breed of Northern African horses with high stamina and hardiness. Their generally hot temperament makes it harder to tame.",
                                    "children": []
                                }
                            ]
                        }
                    ]
                };
    
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
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading MItch js',
                        message: error.message,
                        variant: 'error'
                    })
                );
            });
    }

    initializeD3() { }

}