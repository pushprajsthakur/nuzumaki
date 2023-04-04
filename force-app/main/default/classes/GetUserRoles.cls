public with sharing class GetUserRoles {
   @AuraEnabled(cacheable = true)
   public static List<UserRole> getUserRole(){
    List<UserRole> userRoles = new List<UserRole>();
    try {
        userRoles =[SELECT Id, Name, ParentRoleId FROM
        UserRole];
        return userRoles;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }


   @AuraEnabled
   public static List<User> fetchUser(String role){
    List<User> userList = new List<User>();
    try {
        if(role != null){
        userList = [Select id,Name,UserRoleId,UserRole.Name,FullPhotoUrl From User Where UserRoleId =:role];
        }
        return userList;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}