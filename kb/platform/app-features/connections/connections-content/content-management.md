---
sidebar_position: 2
---

# Connections Content

Managing your content efficiently without relying on Travelgate helps you get to market faster and boost sales. We value transparency and believe in giving our partners the right tools to manage their static content.

In the **Connections Content** section, you can easily check and force updates for your connections' static content, like hotel lists. This allows for timely updates and better market responsiveness, making your operations smoother and more effective.

## How Can I Check My Connections Content?

1. **Log into** [our Platform](https://www.travelgate.com/).

2. **Click on** "Connections" > **Connections Content**  

    ![tg_connections_content_1](https://storage.travelgate.com/kbase/tg_connections_content_1.jpg)

3. **Filter by Connection > Supplier > Access**, and click the "Get content" button to retrieve the corresponding portfolio. You can also filter by Country, Hotel Code, or Hotel Name using the "Filter results" panel on the left side of the screen.

    ![tg_connections_content_4](https://storage.travelgate.com/kbase/tg_connections_content_5.png)

4. On the **results screen**, you can review the following details:
    * Hotel Code
    * [FastX](/kb/platform/app-features/connections/fastx-codes) hotel code (if available)
    * Hotel name
    * Country
    * City
    * Latitude
    * Longitude
    * Last upload
5. Clicking on a hotel opens its **hotel profile**, which displays additional property-level information (general details and room types). For example:
    - Hotel Address
    - Supplier hotel code
    - Hotel Code
    - Giata ID
    - Phone
    - Fax
    - Email
    - Web
    - Category
    - Room types: list of all available rooms, as well as their room code, beds type and occupancies.

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


## Content blacklist

### What is the "Content blacklist" functionality?
This feature allows Sellers to **exclude specific hotels from their portfolio for a given Buyer credential** (Buyer Access Code). Even if their system returns the full list of properties, Sellers can control which hotels are visible to each Buyer by blacklisting selected hotels on their end.

### Who can use the "Content blacklist" functionality?
This functionality is **only available to Sellers** on the platform. If your organization operates with both Buyer and Seller profiles, ensure you access this section using your Seller profile.

### How can I use the "Content blacklist" functionality?

1. **Log in** to [Travelgate](https://www.travelgate.com/) and confirm you are browsing as a Seller.
2. **Go to the Connections Content** section and filter by the desired connection and access to view the list of hotels returned for those credentials.
3. Locate the "Blacklist hotels" button above the results table, next to the "Download CSV" button.

    ![tg_connections_content_blacklist_1](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_1.png)

4. **Click the "Content blacklist" button** to open the Configuration screen. Here you’ll see:
    - A summary of the selected connection/access
    - The current operation (currently only the blacklist option is available)
    - The "Upload CSV" button

    ![tg_connections_content_blacklist_2](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_2.png)

5. To exclude hotels from the list, **upload a CSV file** containing the hotel codes to be blacklisted.
The CSV file:
    - Does not require a specific file name
    - Must follow these formatting requirements:
        - Only includes hotel codes already present in the Buyer's portfolio for that access
        - Contains one column only
        - Uses no headers or delimiters
        - Includes one hotel code per row
6. After uploading, click **Continue** to begin validation.
    - If **validation fails**, an "Invalid CSV file" error will be shown.  

        ![tg_connections_content_blacklist_3](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_3.png)
    - **If validation succeeds**, you’ll proceed to the **"Validate list and confirm"** screen, where you can:
        - Review the uploaded data
        - Download or remove the file if needed
        - Confirm the changes
7. Once confirmed, the content blacklist will be applied to the selected access, and a notification will appear in the **notification bell** confirming the update. Note that the processing time will depend on the size of the blacklist file.

:::warning important
- The content blacklist functionality relies on the supplier hotel code as shown in our Marketplace. As a Seller, you can obtain the list of hotel codes for a Buyer's hotel list either by clicking on individual hotel codes or by [downloading the full portfolio as a CSV file](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-download-the-sellers-portfolio-in-csv) (hotelCode field).
- If you encounter errors, **ensure your CSV file meets the expected criteria:**
    - CSV format
    - A single column
    - No delimiters
    - One hotel code per row
    - Only hotel codes currently present in the portfolio for the selected connection
:::

### As a Seller, how can I edit or remove a content blacklist for one of my Buyers?
To edit or remove a content blacklist for a specific access, follow these steps:
1. Go to the Connections Content screen and **filter by the desired connection and access**.
2. Locate the **"Edit content blacklist"** button next to the "Download CSV" button, then click it to view the current blacklist configuration.

    ![tg_connections_content_blacklist_5](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_5.png)
3. To remove the blacklist, simply click **"Delete blacklist"**.
4. **To edit** the blacklist:
    - First, delete the existing blacklist using the step above.
    - Then, upload a new CSV file with the updated list of blacklisted hotel codes, following the same process outlined in the ["How can I use the 'Content blacklist' functionality?"](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-content-blacklist-functionality) section.
    
    ![tg_connections_content_blacklist_4](https://storage.travelgate.com/kbase/tg_connections_content_blacklist_4.png)

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
            To access the content of any Seller, including hotels, rooms, and destinations, you need to establish an agreement with them and request their activation via our [Connect Form](/kb/platform/app-features/connections/my-connections/quick-guide-to-auto-activations). Once the connection is established, you can access their content.
        </div>
    </div>
</details>

<details>
    <summary>What is a shared access?</summary>
    <div>
        <div>
            A shared access means that the hotel list for this access is **shared with other accesses from the same Supplier**. As a result, all hotel content management—such as hotel list updates and synchronization—is handled through the **parent access** that is being shared.

            This setup is used for accesses where the Seller provides exactly the same hotel list to multiple Buyers.

            Because the hotel list is shared, **Content features such as content blacklist are not available**, as they would affect all accesses that share the same hotel list.

            If you need an access to stop being shared, please contact our [Customer Support team](https://app.travelgate.com/support), and we will assist you with the request.
        </div>
    </div>
</details>




