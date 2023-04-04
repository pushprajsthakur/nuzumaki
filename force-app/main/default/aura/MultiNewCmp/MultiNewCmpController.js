({
    doInit: function (component, event, helper) {

    },
    closeScreen: function (component, event, helper) {
        // var dismissActionPanel = $A.get("e.force:closeQuickAction");
        // dismissActionPanel.fire();
        var homeEvent = $A.get("e.force:navigateToObjectHome");
        homeEvent.setParams({
            "scope": "Opportunity"
        });
        homeEvent.fire();
     },
     saveRecord:function(component, event, helper) {
       const childMethod =  component.find('editCmp');
      childMethod.handleSave();
     },
     handleSave:function(component, event, helper) {
        console.log('detail: ' + JSON.stringify(event.detail.id));
        var homeEvt = $A.get("e.force:navigateToSObject");
        homeEvt.setParams({
            "recordId" : component.get("v.recordId"),
            "slideDevName": "detail"
        });
       // homeEvt.fire();
      }
})