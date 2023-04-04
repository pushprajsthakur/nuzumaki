public class CreateFile {
    public static void createFile(String versionData, String title) {
        COntentVersion cv = new ContentVersion();
        cv.ContentLocation = 'S';
        cv.Title = title;
        cv.PathOnClient = title;
        cv.VersionData = Blob.valueOf(versionData);
        insert cv ;
    }

}