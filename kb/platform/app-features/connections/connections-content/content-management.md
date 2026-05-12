---
sidebar_position: 2
---

# Connections Content

Managing your content efficiently without relying on Travelgate helps you get to market faster and boost sales. We value transparency and believe in giving our partners the right tools to manage their static content.

In the **Connections Content** section, you can easily check and force updates for your connections' static content, like hotel lists. This allows for timely updates and better market responsiveness, making your operations smoother and more effective.

## How Can I Check My Connections Content?

1. **Log into** [our Platform](https://www.travelgate.com/).

2. **Click on** "Connections" > **Connections Content**  

3. **Filter by Connection > Supplier > Access**, and click the "Get content" button to retrieve the corresponding portfolio. You can also filter by Country, Hotel code, or Hotel Name using the "Filter results" panel on the left side of the screen.

    ![tg_connections_content_4](https://storage.travelgate.com/kbase/tg_connections_content_5.png)

    :::info Missing Access in the Connections Content Dropdown?
    **Only active accesses** from [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) appear in the Connections Content dropdown. If the access is missing, ensure it is set to "Active" in the "My Connections" section.

    **Note:** If no active accesses exist for a connection, the dropdown will be disabled with the message "No active accesses available for this supplier." If necessary, make the corresponding access-level revisions in the "My Connections" section.

    <img src="https://storage.travelgate.com/kbase/tg-connections-content-2.png" alt="tg-connections-content-2" width="500" />
    :::

4. On the **results screen**, you can review the following details:
    * Hotel code
    * [FastX](/kb/platform/app-features/connections/fastx-codes) hotel code (or '_Processing_' if a FastX code has not been assigned yet to that supplier hotel code).
    * Hotel name
    * Country
    * City
    * Latitude
    * Longitude
    * Last upload
5. Clicking on a hotel opens its **hotel profile**, which displays additional property-level information (general details and room types). For example:
    - Hotel Address
    - Hotel code
    - Original supplier hotel code (if applicable)
    - Giata ID
    - Phone
    - Fax
    - Email
    - Web
    - Category
    - Room types: list of all available rooms, as well as their room code, bed types and occupancies.  

    :::info
    Travelgate displays the **"Hotel code"** as the primary hotel identifier. This is the operational code used by the Buyer during Travelgate's booking flow within the Supplier context.

    To ensure full traceability, the **"Original supplier hotel code"** (the Seller’s native hotel code) is also displayed if it differs from the hotel code. If both identifiers are identical, the original supplier code is hidden to avoid redundancy.

    When reviewing **portfolio content for FastX**, the FastX hotel code and Original supplier hotel code columns are excluded because **the primary Hotel code field already displays the required FastX identifier**.
    :::

    ![tg_connections_content_4](https://storage.travelgate.com/kbase/tg_connections_content_4.png)

:::info Missing Hotel Details
The information displayed on the Connections Content screen **depends on the data provided by each supplier**. As a result, we cannot guarantee that all fields will be complete or available for every property. If a field is missing information, please contact the Seller so they can assess the possibility of including it through the integration.
:::


## How Can I Download the Seller's Portfolio in CSV?

1. Access the "My Connections Content" section (follow the steps above) and filter by access.
2. Look for the **"Download CSV"** option next to the **Get Content** button on the screen.
3. **Click on "Download CSV"**.

    ![tg_download_portfolio1](https://storage.travelgate.com/kbase/tg_download_portfolio1.jpg)

4. Wait for a confirmation message that the CSV is being processed.
5. Monitor the bell notification in the top-right corner for updates on the CSV status.
6. Once processed, the file will be ready for download.

    ![tg_download_portfolio2](https://storage.travelgate.com/kbase/tg_download_portfolio2.jpg)

7. The CSV file includes these fields (if available by the Seller):
    - Hotel code
    - Original supplier hotel code
    - FastX hotel code
    - Hotel name
    - Country
    - Latitude
    - Longitude
    - Address
    - City
    - Category code
    - Giata ID
    - Last Update


## Customize hotel list

### What is the "Customize hotel list" functionality?
This feature allows Sellers to **exclude or include specific hotels from their portfolio for a given Buyer credential** (Buyer Access Code). Even if the Seller’s system returns the full property list, they can control which hotels are visible to each Buyer by explicitly filtering out selected hotels at their end.

### Who can use the "Customize hotel list" functionality?
This functionality is **only available to Sellers** on the platform. If your organization operates with both Buyer and Seller profiles, ensure you access this section using your Seller profile.

### How can I use the "Customize hotel list" functionality?

1. **Log in** to [Travelgate](https://www.travelgate.com/) and confirm you are browsing as a **Seller**.
   :::info
   You can switch between Buyer and Seller views at any time using the **“View data of this page as:”** selector on the left side of the screen. The selector is available **only** for organizations that are connected on the platform as both a Buyer and a Seller.
   :::
2. **Go to the Connections Content** section and filter by the desired connection and access to view the list of hotels returned for those credentials.
3. Locate the "Customize hotel list" button above the results table, next to the "Download CSV" button.

    ![tg_connections_content_blacklist_1](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_1.png)

4. **Click the "Customize hotel list" button** to open the Configuration screen. Here you’ll see:
    - A summary of the selected connection/access
    - The Operation list (Blacklist or Whitelist)
    - The "Upload CSV" button

    ![tg-customize-hotel-list-0](https://storage.travelgate.com/kbase/tg-customize-hotel-list-0.png)

5. To exclude or include hotels from the list, **upload a CSV file** containing the hotel codes to be blacklisted or whitelisted (according to the chosen operation).
The CSV file:
    - Does not require a specific file name
    - Must follow these formatting requirements:
        - Only includes hotel codes already present in the Buyer's portfolio for that access
        - Contains one column only
        - Uses no headers or delimiters
        - Includes one hotel code per row
6. After uploading, click **Continue** to begin validation.
    - If **validation fails**, an "Invalid CSV file" error will be shown.  

    - **If validation succeeds**, you’ll proceed to the **"Validate list and confirm"** screen, where you can:
        - Review the uploaded data
        - Download or remove the file if needed
        - Confirm the changes


7. Once confirmed, the Customize hotel list will be applied to the selected access, and a notification will appear in the **notification bell** confirming the update. Note that the processing time will depend on the size of the hotel list file.

<img src="https://storage.travelgate.com/kbase/tg-customize-hotel-list-2.png" alt="tg-customize-hotel-list-2" width="500" />

    ![tg-customize-hotel-list-7](https://storage.travelgate.com/kbase/tg-customize-hotel-list-7.png)

:::warning important
- The Customize hotel list functionality relies on the hotel codes as shown in our Marketplace. As a Seller, you can obtain the list of hotel codes for a Buyer's hotel list either by clicking on individual hotel codes or by [downloading the full portfolio as a CSV file](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-download-the-sellers-portfolio-in-csv) (Hotel code field).
- If you encounter errors, **ensure your CSV file meets the expected criteria:**
    - CSV format
    - A single column
    - No delimiters
    - One hotel code per row
    - Only hotel codes currently present in the portfolio for the selected connection
- Hotel codes not included in the supplier's portfolio will be ignored. If your hotel list appears empty after uploading, verify that the Operation is correct and the Hotel Codes in the CSV are valid.
:::

### As a Seller, how can I edit or remove a Customize hotel list for one of my Buyers?
To edit or remove a Customize hotel list for a specific access, follow these steps:
1. Go to the Connections Content screen and **filter by the desired connection and access**.
2. Locate the **"Edit Customize hotel list"** button next to the "Download CSV" button, then click it to view the current hotel list configuration.

    ![tg_connections_content_blacklist_5](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_5.png)
3. To remove the hotel list, simply click **"Delete hotel list"**.
4. **To edit** the customized hotel list:
    - First, delete the existing customized hotel list using the step above.
    - Then, upload a new CSV file with the updated list of hotel codes, following the same process outlined in the ["How can I use the 'Customize hotel list' functionality?"](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-customize-hotel-list-functionality) section.

    <img src="https://storage.travelgate.com/kbase/tg-customize-hotel-list-9.png" alt="tg-customize-hotel-list-9" width="500" />
    

## How Can I Use the "Force Update Now" Functionality?

Both **Buyers and Sellers** can force an update of static content, which is **applied across all content methods**. To do so, just follow these steps:

1. Start by checking whether the requested method is implemented by running a [Metadata query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) and review the value of the `implemented` field. If the method is not implemented, contact the Seller directly to discuss the possibility of adding it. Note that **no content will be returned for methods that haven’t been implemented by the Supplier**.
2. Access the "My Connections Content" section (follow the steps above) and filter by access/Seller credentials.
3. Filter a specific connection and access, ensuring you are browsing as a Seller or Buyer.
4. **Click on 'Force Update Now'** to trigger the content update. The time taken will depend on the content size and processing time.

    ![tg_force_update](https://storage.travelgate.com/kbase/tg_force_update.jpg)

:::info Force Content Updates
When using 'Force Content Now' to refresh a Seller's static content, note that the update duration **depends on the content size**. The update is processed through a **queue system** and will begin once it reaches its turn. This could take anywhere from a few minutes to 72 hours.

- If the update hasn't completed after 72 hours, you may attempt the update again.
- Updates within the 72-hour window are considered normal, and there’s no need to contact support until this period has passed.
- **Large updates** (e.g., updating multiple accesses for a Supplier across all Buyers) will result in a longer queue and may take additional time.

If you've followed all the steps and still do not have the most up-to-date content, feel free to [contact our Support Team](/kb/platform/support-portal/case-guidelines). We’re here to ensure you have the best possible experience!
:::

## Frequently Asked Questions

<details>
    <summary>Is the Seller's content stored in Travelgate's database?</summary>
    <div>
        <div>Yes, we store the Seller's static content in our database to enhance response times and performance.</div>
    </div>
</details>

<details>
    <summary>How often is a Seller's portfolio updated?</summary>
    <div>
        <div>
            Static content updates occur every 7-14 days, depending on the method. Our system adds new hotels to a Seller's portfolio every 7-14 days, while hotels that are no longer available are removed every 30 days. For example, for a portfolio of 100K hotels:
            <ul>
                <li>If the Seller adds 50K hotels, they will be added within 7-14 days.</li>
                <li>If the Seller removes 50K hotels, they will be removed within 30 days.</li>
            </ul>
        </div>
    </div>
</details>

<details>
    <summary>Can I see the content of a Supplier before requesting its activation?</summary>
    <div>
        <div>
            To access the content of any Seller, including hotels, rooms, and destinations, you need to establish an agreement with them and request their activation via our [Connect Form](/kb/platform/app-features/connections/my-connections/guick-guide-to-auto-activations). Once the connection is established, you can access their content.
        </div>
    </div>
</details>


<details>
    <summary>What is a shared access?</summary>
    <div>
        <div>
            A **Shared Access** is an optimization feature designed for Sellers who provide the same hotel portfolio to multiple Buyers. It allows for more efficient delivery of static content and reduces the technical load on infrastructure.

            In this setup, Travelgate uses a dedicated set of credentials (the **Parent Access**) exclusively to request static data such as hotel lists, property details, and destinations. This data is then automatically distributed to all associated Buyers.

            **Key details to consider:**
            <ul>
                <li>**Optimization:** Instead of each Buyer pulling updates individually, Travelgate makes a single request, reducing server load and ensuring all Buyers receive the same updated content.</li>
                <li>**Usage:** These credentials are strictly for **static content synchronization** and are never used for availability or booking requests.</li>
                <li>**Limitations:** Because the hotel list is shared, features like *"Customize hotel list"* are not available, as any change would affect all Buyers in the group.</li>
            </ul>

            **How to manage:**

            If you want to activate this feature to optimize your content delivery, or if you need an access to stop being shared, please contact our [Customer Support team](https://app.travelgate.com/support). To enable it, you will need to provide a dedicated set of static content credentials and the list of Buyers to be included.
        </div>
    </div>
</details>


