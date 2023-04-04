public with sharing class CreateOppLineItem {
   @AuraEnabled(cacheable=true)
   public static void crOli(List<OpportunityLineItem> olilist){
List<OpportunityLineItem> olisinsert = new List<OpportunityLineItem>();
    try {
        for(OpportunityLineItem oli:olilist){
system.System.debug(oli);
        }
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}