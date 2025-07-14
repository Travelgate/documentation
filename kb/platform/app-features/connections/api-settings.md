---
sidebar_position: 4
---

# API Settings

Welcome to the **API Settings** section! Here, you'll find everything you need to manage your Hotel-X Pull Buyers API connection with ease. Let’s walk through what you can expect and how to navigate through it.

### What's Inside API Settings?

**API Settings** allow you to define default values for your Hotel-X Pull Buyers API requests. These values are applied **automatically** when a Buyer request (query or mutation) doesn't include these specific parameters.

:::info
You can configure defaults at multiple levels: Organization, Client, Supplier, and even Access. The more specific the level, the higher its priority.
:::

Follow this simple guide to get started:

1. **Log into** [our Platform](https://www.travelgate.com/).

2. **Navigate to** "Connections" > "API Settings"

3. Explore the following areas:

    - **Organization Settings**: This is the most general level of configuration. The settings defined here apply across your entire organization or Hotel-X Group. Check our documentation for more detailed information about [Hotel-X API Settings](/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings).

    ![apisettings_1](https://storage.travelgate.com/kbase/apisettings_1.png)

    :::info Can I set a default setting for a specific supplier or access?
    Yes, you can configure default settings at the supplier or access level. This will apply to accesses associated with that supplier or a specific access. For assistance, contact our [Customer Support](https://app.travelgate.com/support) team.
    :::

    - **Clients Tab**: This is where you can manage your Hotel-X clients, including creating new ones. Clients act as labels or tags to organize your traffic.

    ![apisettings_2](https://storage.travelgate.com/kbase/apisettings_2.png)

        * **Create a New Client**: To add a new client, click the **"Create New Client"** button.

        ![apisettings_3](https://storage.travelgate.com/kbase/apisettings_3.png)

        When creating a new client, it inherits all connection accesses by default. If you don’t specify any access in your Search query, all accesses will be applied:

        ![apisettings_4](https://storage.travelgate.com/kbase/apisettings_4.png)

        * **Customize Client Accesses**: To fine-tune accesses for a specific client, select the **"Edit Default Accesses"** option.

        ![apisettings_5](https://storage.travelgate.com/kbase/apisettings_5.png)

        Uncheck the default access box and use the access boxes to specify particular ones:

        ![apisettings_6](https://storage.travelgate.com/kbase/apisettings_6.png)

        * **Customize Default Settings for a Client**: To set specific defaults for a client, select **"Edit Default Settings"**. These settings will override the organization-level defaults.

        ![apisettings_7](https://storage.travelgate.com/kbase/apisettings_7.png)

        ![apisettings_8](https://storage.travelgate.com/kbase/apisettings_8.png)

    :::info Still Using our Legacy Pull Buyers API?
	Your clients (or 'hub users') come with an associated password. Retrieve it easily using the **"Get Password"** option:
    ![api-settings-new-updated-7](https://storage.travelgate.com/kbase/apisettings_9.png)
    :::


    - **Supplier Settings**: In this section, you can define default settings specifically for each supplier you’re connected to. These will apply to **all accesses** associated with that supplier. These configurations will override both **Organization** and **Client-level settings** for all accesses related to that supplier.

    - **Access Settings**: If you need full control over a specific access connection between a Buyer and a Supplier, you can request **Access-level settings**. These override all others settings and are the most specific (except if settings are defined at query/mutation level).



:::info Remember!

Settings defined at query or mutation level (in your API request) take **absolute precedence** over any default settings at any other level.

Query/Mutation > Access > Supplier > Client > Organization

:::
