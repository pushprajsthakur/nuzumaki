public with sharing class multiLwcCtrl {
            @AuraEnabled(cacheable=true)
            public static List<Opportunity> getOpportunityList(String recordId){
                List<Opportunity> oppList = New List<Opportunity>();
                oppList = [SELECT Id,Thematic__c,Total__c,Democracy__c,Disaster__c,Education__c,Environment__c,Labor__c FROM Opportunity where id =: recordId];
                return oppList;
            }
        }