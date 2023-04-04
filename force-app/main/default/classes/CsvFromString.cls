public class CsvFromString {
    public static void createCsv(List<String> csvHeaders,List<String> csvRowList, String title){
        String headerRow = String.join(csvHeaders, ',')+'\n';
        String concantenatedStr = headerRow;
          Integer i = 0;
        Integer rowListSize = csvRowList.size();
        System.debug('1st'+rowListSize);
        for(String row :csvRowList){
              
            i++;
            // add new line if i is not equals to list size
            concantenatedStr += (String)row + ((i != rowListSize)? '\n' : '');
           
            system.debug('size'+rowListSize);    
            system.debug('stry'+concantenatedStr);    
        }
        title += '.csv';
       // System.debug('concantenatedStr'+concantenatedStr);
        createFile(concantenatedStr, title);
        
    }

      public static void createFile(String versionData, String title) {
        ContentVersion cv = new ContentVersion();
        cv.ContentLocation = 'S';
        cv.Title = title;
        cv.PathOnClient = title;
        cv.VersionData = Blob.valueOf(versionData);
        insert cv ;
          id conDocumentId = [Select ContentDocumentId From ContentVersion where id = :cv.id].ContentDocumentId;
          
          ContentDocumentLink cDocLink = new ContentDocumentLink();
          cDocLink.ContentDocumentId = conDocumentId;
          cDocLink.LinkedEntityId = '0035i000005m3CAAAY';
          cDocLink.Visibility = 'AllUsers';
          cDocLink.ShareType = 'V';
          insert cDocLink;
          
          
          
    }

}