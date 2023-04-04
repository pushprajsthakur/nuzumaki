({
	 doInit : function(component, event, helper) {

     
        var action = component.get("c.fetchit");
        // action.setParams({});

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(state);
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                //alert("From server: " + response.getReturnValue());
                console.log('SUCCESS '+typeof response.getReturnValue());
                var ind1 = response.getReturnValue().indexOf('=');
                var ind2 = response.getReturnValue().indexOf(']');
					console.log('SUCCESS '+ response.getReturnValue().substring(ind1+1,ind2));
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
           
        });
        $A.enqueueAction(action);
	}
})