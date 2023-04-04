import { LightningElement,api, track } from 'lwc';

export default class LWCCOMPONENT extends LightningElement {
    @track value1 = 0;
    @track value2 = 0;
    @track value3 = 0;
    @track sum = 0;
    @track mysum =0;
    @track currentcolor = "baseColor";
   
     changeHandler(event){
      
        if(event.target.name=="newlist1")
        {
           this.value1 = event.target.value; 
        }
        if(event.target.name=="newlist2")
        {
           this.value2 = event.target.value;  
        }
        if(event.target.name=="newlist3")
        {
           this.value3 = event.target.value;
        }

        this.sum = parseInt(this.value1)+parseInt(this.value2)+parseInt(this.value3); 
        
        
        if(this.sum>0 && this.sum<40)
        {
           
            this.currentcolor="redColor";
        }
        if(this.sum>=40 && this.sum<100)
        {
          
            this.currentcolor="yellowColor";
        }
        if(this.sum>=100 && this.sum<301)
        {
          
            this.currentcolor="blueColor";
        }
    }
   
}