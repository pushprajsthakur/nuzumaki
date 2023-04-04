public class CreateFiles {
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