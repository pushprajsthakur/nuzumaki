public with sharing class MapCOntrollerLwc {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(){
    try {
        return [SELECT Id, Name, description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode  FROM Account ORDER BY Name ];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
  }
}