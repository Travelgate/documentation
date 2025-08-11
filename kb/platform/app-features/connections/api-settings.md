---
sidebar_position: 4
---

# API Settings

Welcome to the **API Settings** section! This guide will help you manage your Hotel-X Pull Buyers API connection with ease.

### What's Inside API Settings?

The **API Settings** section allows you define default values for your Hotel-X Pull Buyers API requests. These defaults are **automatically applied** whenever a request (query or mutation) does not include certain parameters.

:::info
- You can set **defaults at various levels**: Organization, Client, Supplier, and Access. The more specific the level, the higher its priority.  
- Settings defined in your API request (at the query or mutation level) override all other default settings. The priority order (from highest to lowest) is:
**Query/Mutation > Access > Supplier > Client > Organization**.
:::

### Getting Started

1. **Log in to** [our Platform](https://www.travelgate.com/).
2. Go to **“Connections” > “API Settings”**.
3. Explore the following configuration options:

    #### 1. Organization Settings

    This is the most general level of configuration. Settings applied here affect your entire Organization or Hotel-X Group.  
    Refer to our [Hotel-X API Settings documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings) for more details.

    ![default-api-settings-organization](https://storage.travelgate.com/kbase/default-api-settings-organization.jpg)

    #### 2. Clients Settings

    Use this section to manage your Hotel-X clients or create new ones. Clients serve as labels to organize traffic and configuration.

    ![default-api-settings-client](https://storage.travelgate.com/kbase/default-api-settings-client.jpg)

    - **Create a New Client**  
    Click **"Create New Client"** to add one - By default, new clients inherit all connection accesses. If your Search query doesn’t specify an access, all available accesses will be used.

    - **Customize Client Accesses**  
    Click **"Edit Default Accesses"** to manage access permissions for a client. Uncheck the default box and select the specific accesses you want. If you've assigned specific access permissions to your clients, always use the corresponding clients in your requests to avoid any issues.

    - **Customize Client Default Settings**  
    To define settings that override the organization-level defaults, click **"Edit Default Settings"**.  

        :::info Using Our Legacy Pull Buyers API?
        Legacy clients (or "hub users") come with an associated password. You can retrieve it by clicking **"Get Password"**.
        ![api-settings-new-updated-7](https://storage.travelgate.com/kbase/apisettings_9.png)
        :::


    #### 3. Supplier Settings

    Set default configurations for individual suppliers. These settings override both Organization and Client-level defaults and apply to **all accesses** associated with the selected supplier.

    ![default-api-settings-supplier](https://storage.travelgate.com/kbase/default-api-settings-supplier.jpg)


    #### 4. Access Settings

    Need full control over a specific connection between a Buyer and a Supplier? Request **Access-level settings**, which take precedence over all others — except those set directly in the API request.

    ![default-api-settings-access](https://storage.travelgate.com/kbase/default-api-settings-access.jpg)