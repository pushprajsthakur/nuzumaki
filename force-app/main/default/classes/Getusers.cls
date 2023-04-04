public with sharing class Getusers {
   @AuraEnabled(cacheable=true)
   public static List<UserRole> getuserwithparent(){
    try {
        return [SELECT  Name, Id,  ParentRoleId  from UserRole ];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}