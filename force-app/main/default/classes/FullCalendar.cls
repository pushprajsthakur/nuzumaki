public with sharing class FullCalendar {
   @AuraEnabled
   public static List<Event> getAllEvents(){
    try {
       return [SELECT Id, Subject, WhatId, WhoId, Description, EndDate, EndDateTime, OwnerId, ActivityDate, ActivityDateTime,IsAllDayEvent FROM Event LIMIT 100];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}