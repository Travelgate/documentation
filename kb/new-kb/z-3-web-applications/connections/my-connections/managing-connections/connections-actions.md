---
sidebar_position: 3
---

# Connections Actions   [WIP]

In addition to tracking your connections, you can modify, copy, or delete accesses within Travelgate.  

## How to Edit or Modify an Access  

Within **My Connections**, you can perform several actions at the access level:  

- **Edit Access**: Modify the current credentials for an access.  
- **Copy Access**: Duplicate an existing access configuration.  
- **Delete Access**: Remove an unused or invalid access.  
- **View Logs**: Track historical changes made to an access.  
- **Get Form Data**: Retrieve configuration details in **JSON or XML format** for storage or system integration. **Note**: Only users with **ADMIN permissions** can view stored passwords.  

   ![myconnections_aug_3](https://storage.travelgate.com/kbase/myconnections_aug_3.jpg)  

## Understanding Access Metadata  

Each access contains the following details:  

- **Updated & Created Date**: View the last modification date and the original creation date.  
- **Accommodations**: Number of properties available for that access.  
- **Context Code**: Check the [content codes](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials#context%EF%B8%8F) used.  

## Handling Connections via the Legacy Pull Buyers API  

For Buyers using the **Legacy Pull Buyers API**, managing credential deactivations requires an additional step beyond the **My Connections** section:  

### **Steps to Disconnect a Legacy API Connection**  

1. **Permanently Deactivating a Connection**:  
   - Submit a **Case Request** via the Travelgate Portal.  
   - The deactivation will occur at the **connection level**, not just for specific credentials.  

2. **Deactivating Specific Credentials**:  
   - Credential management should be handled **directly between the Buyer and Seller** to ensure traffic stops from the Buyer's system.  
   - Activate or deactivate the **Hotel-X Access Code** accordingly to reflect the actual traffic being sent.  

3. **Seller Actions if Requests Continue**:  
   - If a Seller continues to receive traffic from a deactivated access, contact the Buyer to confirm they have deactivated the credentials on their end.  

By following these steps, you can ensure proper management and security of your connections at Travelgate.  
