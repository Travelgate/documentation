---
sidebar_position: 4
---

# FastX Codes

:::info 🚀 FastX: The New Standard for Buyers

**FastX** delivers to Buyers all their Sellers' content — fully mapped at **Hotel**, **Room**, and **Board** levels. One clean connection, faster activations, full transparency, and no additional cost.

👉 **From 1 January 2026**, FastX will be the mandatory connection mode for all new Buyers. Existing Buyers using HotelX can continue as-is, but those facing mapping or data issues are encouraged to migrate to FastX for improved stability and content quality.

:::

FastX codes are unique identifiers used across Travelgate’s Marketplace for hotels, boards, and rooms. They provide a standardized system that connects Buyers and Sellers efficiently:

* **For Buyers**: FastX codes allow you to access all Suppliers’ products through a single, consistent set of identifiers, simplifying searches, aggregation, and integration.

* **For Sellers**: FastX codes let you validate your portfolio with Travelgate’s master database, ensuring your hotels and boards are correctly represented to all Buyers.

The **FastX Codes tool** helps manage these matches, letting Sellers validate their mappings and Buyers track which Suppliers are matched to each FastX code. Working with FastX codes ensures the marketplace operates faster, more reliably, and with fewer errors.

**FastX Diagram**:

![Hotel-X FastX Mode](https://stplaformwe.blob.core.windows.net/kbase/hotelx_fastx_mode.gif)

## For Sellers

Sellers use this section to **validate or invalidate suggested mappings** between their own hotel and board codes and Travelgate’s master FastX codes.

![tg-fastx-sellers-1](https://stplaformwe.blob.core.windows.net/kbase/tg-fastx-sellers-1.png)

### Step-by-Step Guide

1. **Log in** to the Travelgate Portal.
2. Switch to **Seller mode** and navigate to the [FastX Codes section](https://app.travelgate.com/connections/mapping).
3. Select a Supplier from your organization to review suggested mappings.
4. View the table with paired hotel or board data:
   * **Top row:** Travelgate master hotel data (code, name, country, address, geolocation).
   * **Bottom row:** Supplier’s matching data.
   * **Extra info:** Number of bookings since February 2023.
5. Decide if the pairing is correct:
   * **Validate:** Confirms the match.
   * **Invalidate:** Indicates no match.

### Ways to Validate or Invalidate

* **Individually:** Use buttons in the status column for each pairing.
  ![tg-fastx-sellers-2](https://stplaformwe.blob.core.windows.net/kbase/tg-fastx-sellers-2.png)

* **In Group:** Select multiple pairings with checkboxes and apply actions with the buttons above the table.
  ![tg-fastx-sellers-3](https://stplaformwe.blob.core.windows.net/kbase/tg-fastx-sellers-3.png)

* **Bulk via CSV:** Use the "Bulk Hotel Validation" button and download the hotel data and mapping, change the 'status' column to validate or invalidate, and upload for processing.
  ![fastx-seller-validation-bulk-csv](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode_validation3.png)

### Important Notes

* Always review data carefully before validating; you are responsible for confirmed mappings.
* If unsure, leave the status as **Pending** rather than invalidating.
* New hotels or significant updates in your hotel list information automatically set the status to **Pending** and require re-validation.
* Check both hotel and board mappings.

![tg-fastx-sellers-4](https://stplaformwe.blob.core.windows.net/kbase/tg-fastx-sellers-4.png)


### FAQs


<details>
    <summary>Where does the portfolio of hotels and boards in the FastX section come from?</summary>
    <div>
         <div>
         The hotel and board portfolio you see in the FastX section is compiled by Travelgate. It includes all the hotels and board types that you, as a Seller, have made available to Buyers through our marketplace. We aggregate this portfolio based on the hotels shared with all your connected Buyers, as long as each hotel includes the minimum required information (name, country, address, and coordinates). 
         
         Every two weeks, when we run the FastX process, we retrieve your latest hotel content and add any new hotels that are detected. If some of your hotels have updated information, this will also be taken into account. If the changes are significant — for example, a hotel name change — the system may suggest a new FastX code for that property with the status pending for your validation.
        </div>
    </div>
</details>

<details>
    <summary>Why does my hotel not appear on the FastX website?</summary>
    <div>
        <div>
        To successfully match a hotel with a FastX code, the following information is required: **name, address, country, and coordinates**.
        If you are already providing this information in your connection with us and your hotel still does not appear in the FastX section, it may be due to one of the following reasons:

        1. **The content data has not yet been synchronized with FastX.**  
        Even if your hotel already appears in the Content section, the FastX code may still not be available.  
        This can happen because it may take a few days for us to synchronize the new data and run our matching algorithm to link it with a FastX code.  
        This process typically takes a few days and never more than **one week** after the hotel is detected.

        2. **We detected your new hotel, but the matching algorithm could not find a suitable match.**  
        Please ensure that the hotel’s **name, address, country, and coordinates** are accurate and complete.

        If none of the above apply to your case, please open a case with our [Customer Support team](https://app.travelgate.com/support), and we will review the issue for you.
        </div>
    </div>
</details>

<details>
    <summary>What happens if the hotel information in my portfolio changes?</summary>
    <div>
        <div>
        We automatically download your hotel list every 15 days. If we detect changes in your hotel data, our FastX system will evaluate whether the current mapping is still valid. If there’s a significant difference and a match with the new information can’t be confirmed, the hotel will be unlinked from its current FastX code and linked to a new one, which will require your validation again.
        </div>
    </div>
</details>

<details>
    <summary>Are the hotels I validate available to all Buyers using FastX codes?</summary>
    <div>
        <div>
        Yes, as long as the hotel is included in the Buyer’s access hotel list. Once you validate the mapping between your hotel and the FastX hotel code, that validation becomes available to any Buyer using FastX to connect with you via Travelgate. This makes the process much more efficient, as you only need to verify the mapping and validate your portfolio once, and then control which hotels you want to sell to each Buyer using the hotel list (just like with any other Buyer in Travelgate).
        </div>
    </div>
</details>


<details>
    <summary>How can I control which hotels I sell to a specific Buyer?</summary>
    <div>
        <div>
        Even if you validate your full portfolio, it doesn't mean all hotels are automatically available to every Buyer. What you offer to each Buyer is managed through the hotel list of each access (you can check this in the [Connections Content](https://app.travelgate.com/connections/content) section). 
        
        If your system doesn't support separate hotel lists per access, don't worry — you can use the [**Customize hotel list**](/kb/platform/app-features/connections/connections-content/content-management#customize-hotel-list) feature to exclude specific hotels from a particular Buyer's access. This gives you full control: even if your system returns the entire property list, you can determine which hotels each Buyer can access by filtering them at the access level.
        </div>
    </div>
</details>





## For Buyers

Buyers use this section to **visualize the FastX master hotel and board list** and monitor Supplier mappings.

:::warning Want to use FastX Codes?

These codes are available **exclusively via the HotelX Pull Buyers API**. If you're currently on the Legacy API, now is the perfect time to upgrade to [HotelX](/kb/connectivity-products/for-buyers/hotel-x/why-develop-hotel-x-explained) to enjoy our latest features, richer content, and a smoother integration!

Already using HotelX? If you're a Buyer connected to Travelgate via our HotelX Pull Buyers API and want to start using [FastX Codes](/docs/apis/for-buyers/hotel-x-pull-buyers-api/upgrade-to-fastx), simply contact our team via sales.support@travelgate.com to manage the upgrade and get your FastX access.

**Contact our team at sales.support@travelgate.com to get started!**
:::

### Step-by-Step Guide

1. **Log in** to the Travelgate Portal.
2. Switch to **Buyer mode** and navigate to the [FastX Codes section](https://app.travelgate.com/connections/mapping).
3. Select a FastX access from your organization to see the mapping content.

![tg-fastx-buyers-5](https://stplaformwe.blob.core.windows.net/kbase/tg-fastx-buyers-5.png)


### Features

* See which Suppliers are mapped to each FastX hotel and board code.
* Check validation status for each Supplier (validated or pending).
* Filter by hotel, country, or status to monitor mapping completeness.
* Export reports to CSV for analysis or auditing.

Buyers benefit from consistent FastX codes across all Suppliers, simplifying product aggregation and ensuring faster, more efficient access to travel inventory.

:::info FastX Codes, now easier than ever!
In our [Network](/kb/welcome-to-travelgate/network-essentials) section, Suppliers with **over 80% of their portfolio validated in FastX** now receive a dedicated FastX Badge. This badge helps you identify standardized content that is ready for immediate, seamless integration.  

Check our Network today to find your next badge-validated partner!

![tg-fastx-verification-badge](https://storage.travelgate.com/kbase/tg-fastx-verification-badge.png)
:::

### Filters and Search

* **Status:** Validated or Pending.
* **Name or Code:** Search for hotels or boards.
* **Country:** Filter by location.

### Export to CSV

* Click on the **Download CSV** button to export data in a CSV file.
* Includes Travelgate master data and suppliers portfolio.
* Applies active filters to the exported file.

:::note Remember
Here you can check which FastX hotel and board codes are **validated**, **pending**, or **invalidated** by each Seller.  
By default, your booking flow will allow traffic for both **validated** and **pending** codes. However, if you prefer to work exclusively with **validated** codes, you can configure this in the [API Settings](https://app.travelgate.com/connections/settings) section.

Invalidated codes are **never allowed** in the booking flow — Travelgate will automatically block any traffic that uses FastX codes that have been invalidated by the Seller.
:::

