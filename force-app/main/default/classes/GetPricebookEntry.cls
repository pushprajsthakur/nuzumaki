public with sharing class GetPricebookEntry {
   @AuraEnabled(cacheable=true)
   public static List<Pricebookentry> GetPricebookEntries(String P2Id){
    try {
        return [SELECT Name,UnitPrice,Product2Id From pricebookentry Where Pricebook2Id =:P2Id];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
    
}