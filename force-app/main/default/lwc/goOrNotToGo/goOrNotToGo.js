import { api, LightningElement, track, wire } from 'lwc';
import { getRecord,updateRecord } from 'lightning/uiRecordApi'
import PITCH_SCORE from '@salesforce/schema/Opportunity.Pitch_Score__c'
import PITCH_LEVEL from '@salesforce/schema/Opportunity.Pitch_Level__c'
import PITCH_MESSAGE from '@salesforce/schema/Opportunity.Pitch_Message__c'
import ID_Field from '@salesforce/schema/Opportunity.Id'

export default class GoOrNotToGo extends LightningElement {
    @api recordId
    @track inputReadOnly
    @track value1 = 0;
    @track value2 = 0;
    @track value3 = 0;
    @track value4 = 0;
    @track value5 = 0;
    @track value6 = 0;
    @track value7 = 0;
    @track value8 = 0;
    @track value9 = 0;
    @track value10 = 0;
    @track value11 = 0;
     sum = 0;
   
    @track currentcolor = "baseColor";
    currentPitch
    currentPitchLevel
    @track pitchLevel = ''
    @track pitchScore = ''
    @track pitchMessage = ''



    @wire(getRecord,{recordId:'$recordId', fields:[PITCH_SCORE, PITCH_LEVEL, PITCH_MESSAGE]})
     opportunityHandler({data}){
      if(data){
            console.log(data)
            this.initialpitchLevel = data.fields.Pitch_Level__c.value 
            if (this.initialpitchLevel){
               this.inputReadOnly = true}
            
            console.log("this.pitchLevel  "+this.initialpitchLevel);

            this.initialpitchScore = data.fields.Pitch_Score__c.value 
         console.log("this.pitchScore  "+this.initialpitchScore);
         this.initialpitchMessage = data.fields.Pitch_Message__c.value
        console.log("this.pitchMessage  "+this.initialpitchMessage);

     }
       
     }

   renderedCallback(){
      if(this.sum == 0){
         this.currentcolor = "baseColor"
         this.currentPitchLevel = 'Can not zero '
         this.currentPitch = 'Can not zero '
      }
   }
     changeHandler(event){
       if(this.sum == 0){
         this.currentcolor = "baseColor"
         this.currentPitchLevel = 'Can not zero '
         this.currentPitch = 'Can not zero '
      }
      
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
        if(event.target.name=="newlist4")
        {
           this.value4 = event.target.value;
        }
        if(event.target.name=="newlist5")
        {
           this.value5 = event.target.value;
        }
        if(event.target.name=="newlist6")
        {
           this.value6 = event.target.value;
        }
        if(event.target.name=="newlist7")
        {
           this.value7 = event.target.value;
        }
        if(event.target.name=="newlist8")
        {
           this.value8 = event.target.value;
        }
        if(event.target.name=="newlist9")
        {
           this.value9 = event.target.value;
        }
        if(event.target.name=="newlist10")
        {
           this.value10 = event.target.value;
        }
        if(event.target.name=="newlist11")
        {
           this.value11 = event.target.value;
        }

        this.sum = parseInt(this.value1)+parseInt(this.value2)+parseInt(this.value3)+parseInt(this.value4)+parseInt(this.value5)+parseInt(this.value6)+parseInt(this.value7)+parseInt(this.value8)+parseInt(this.value9)+parseInt(this.value10)+parseInt(this.value11); 
        
        
        if(this.sum>0 && this.sum<40)
        {
           
            this.currentcolor="redColor";
            this.currentPitchLevel="DO NotT PITCH!"
            this.currentPitch = "The opportunity might look attractive but you don’t have the right experience or haven’t built the right level relationship. Both are crucial, even over attractiveness. The opportunity may be tempting but remember the chances of winning are low. Send a letter of apology expressing an interest in working together in the future and refer the contact to the State Business Development Manager to arrange a time to meet."
        }
        if(this.sum>=40 && this.sum<69)
        {
          
            this.currentcolor="yellowColor";
            this.currentPitchLevel="STANDARD PITCH!"

            this.currentPitch = "Templated pitch solution that requires minimal time investment. The opportunity is fairly attractive and you are in an OK position. If you proceed, adopt a ‘should win’ or ‘could win’ approach depending on where the evaluation sits"
        }
        if(this.sum>=70 && this.sum<99)
        {
          
            this.currentcolor="blueColor";
            this.currentPitchLevel="CLEVER PITCH!"

            this.currentPitch = "You are in a strong position to win with the client and the opportunity is fairly attractive. Invest time in customising your strategy and messaging – do something different to disrupt the clients thinking and views – be bold and brave, deliver ideas. You have nothing to lose and everything to gain. Your Pitch representative can help you craft a winning strategy."
        }
        if(this.sum>=100 && this.sum<=110)
        {
          
            this.currentcolor="greenColor";
            this.currentPitchLevel="ALL OUT PITCH!"

            this.currentPitch = "You are in a strong position on a very attractive opportunity. Take a bespoke approach to craft a pitch completely to the suitability of the client - win at all costs! Don't delay - bring this opportunity to your Pitch representative immediately!"
        }
    }
    handleButtonClick() {
       
console.log('this.recordId'+this.recordId);
       const fields = {}
    
       
      fields[ID_Field.fieldApiName]= this.recordId
      fields[PITCH_LEVEL.fieldApiName]=this.currentPitchLevel
      fields[PITCH_SCORE.fieldApiName]=this.sum
      fields[PITCH_MESSAGE.fieldApiName] = this.currentPitch
      
       console.log("fields"+JSON.stringify(fields))
       
        console.log("Hand Break");
       //settting page to read only

       const recordInput = {fields}
       updateRecord(recordInput)
          .then(result => {
          console.log('result'+JSON.stringify(result))
          }).catch(error => {
          console.error(error);
       })

       this.inputReadOnly = true
    }
   
}