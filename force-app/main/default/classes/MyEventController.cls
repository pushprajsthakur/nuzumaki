public with sharing class MyEventController {
   @AuraEnabled(cacheable=true)
   public static List<Event> getEvents(){
       try {
           
        return [SELECT Status__c FROM Event WHERE OwnerId='0055i000003Ta5YAAS'];
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
   }
}