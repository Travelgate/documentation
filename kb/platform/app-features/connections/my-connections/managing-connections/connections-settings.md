---
sidebar_position: 3
---

# Connections Settings

In addition to tracking your connections, you can modify, copy, or delete accesses within Travelgate.  

## How to Manage or Delete an Access  

Within **My Connections**, you can perform several actions at the access level:  

- **Edit Access**: Modify the current credentials for an access.  
- **Copy Access**: Duplicate an existing access.  
- **Delete Access**: Remove an unused or invalid access.  
- **View Logs**: Track historical changes made to an access.  
- **Get Form Data**: Retrieve configuration details in **JSON or XML format** for storage or system integration. **Note**: Only users with **ADMIN permissions** can view stored passwords.  

   ![tg_access_actions](https://storage.travelgate.com/kbase/tg_access_actions.jpg)  

## Handling Connections via the Legacy Pull Buyers API  

For Buyers using the **Legacy Pull Buyers API**, managing credential deactivations requires an additional step beyond the **My Connections** section:  

### **Steps to Disconnect a Legacy API Connection**  

1. **Permanently Deactivating a Connection**:  
   - Submit a **Case Request** via the Travelgate Platform.  
   - The deactivation will occur at the **connection level**, not just for specific credentials.  

2. **Deactivating Specific Credentials**:  
   - Credential management should be handled **directly between the Buyer and Seller** to ensure traffic stops from the Buyer's system.  
   - Activate or deactivate the **Hotel-X Access Code** accordingly to reflect the actual traffic being sent.  

3. **Seller Actions if Requests Continue**:  
   - If a Seller continues to receive traffic from a deactivated access, contact the Buyer to confirm they have deactivated the credentials on their end.  
