---
sidebar_position: 3
---

# How to Modify User Permissions

### How to Edit User Permissions

**To access the edit menu, you must have at least Editor permissions** as described in the [Permissions by Service](/kb/platform/app-features/account-settings/users-management/add-users#permissions-by-service) section:  
   - **Editors** can only update the "Job Title". The notification/contact assignments will be visible but locked.
   - **Admins/Owners** can update the "Job Title" and modify all assigned contact notifications (Commercial, Tech, Billing, etc.).

If you need to change the permissions of users in your Organization, follow these steps:

1. **Log in** to the [Travelgate Platform](https://www.travelgate.com/).
2. Click on **Settings**.
3. Navigate to **Users Management** to view the list of users.
4. **Filter** the user whose permission you wish to modify.
5. Click the **three dots** beside their name to edit their information.

:::info pro tip
Need a deep dive into what each permission can do? Check out the [Permissions by Service](/kb/platform/app-features/account-settings/users-management/add-users#permissions-by-service) section for a full breakdown of Admin, Editor, and Viewer levels.
:::

### How to Transfer the Owner Role

:::warning Important
- Only the user with the **Owner** permission can transfer this role to another member of the Organization. The **"Transfer owner"** option is only visible to the logged-in Owner; it remains hidden for all other users.
- This action is **irreversible**. Once the transfer is completed, it cannot be undone, and you will no longer be able to reclaim the Owner role yourself.
:::

If you are the **Owner** and need to hand over this role to another member of your Organization, follow these steps:

1. **Log in** to the [Travelgate App](https://app.travelgate.com/).
2. Click on **Settings**.
3. Navigate to **Users Management** to view the list of users registered in your Organization.
4. On **your own user card**, click the **three dots** to expand the options and select **"Transfer owner"**.
   - This option is only available on the Owner's own card. It will not appear on the card of any other user, and users with Admin permissions or lower will not see it at all.
5. A modal will open, warning you about the consequences of this change and showing a selector with the list of users in your Organization, **excluding yourself as the current Owner**.
   - **Note**: If you are the only member in the Organization, a warning will appear instead of the modal, indicating that *"There are no other members in the organization to transfer ownership"*.
6. **Select the user** you want to transfer the role to and click **Change** to submit the request.

Once the transfer is completed, the modal will close and the user list will update automatically:
   - You will keep access to the platform, now with **Admin** permissions.
   - The selected user will become the new **Owner** of the Organization.