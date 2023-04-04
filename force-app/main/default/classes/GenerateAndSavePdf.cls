public class GenerateAndSavePdf {
    public static void savepdf(){
        //insert content version to create object contentdocument
        String testData = 'Store in pdf file';
        ContentVersion cVersion = new ContentVersion();
        cVersion.ContentLocation = 'S' ; // in salesforce
        cVersion.Title = 'Test File text';
        cVersion.PathOnClient = cVersion.Title +'.txt';
        cVersion.VersionData = Blob.valueOf(testData);
        insert cVersion;
        
        id conDocument = [Select ContentDocumentId FROM ContentVersion WHERE id = :cVersion.id].contentDocumentId;
        
        ContentDocumentLink cDocLink = new ContentDocumentLink();
        cDocLInk.ContentDocumentId = conDocument;
        cDocLink.LinkedEntityId = '0035i000005m1kKAAQ';
        cDocLink.Visibility = 'AllUsers';
        cDocLink.ShareType = 'V';
         insert cDocLink ;
        
        
        
    }
}