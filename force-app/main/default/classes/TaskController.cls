public with sharing class TaskController {
   
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasklist(String whatId){
        try {
            return [SELECT Id, Subject, CreatedDate, ActivityDate, Status FROM Task WHERE WhatId=:whatId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}