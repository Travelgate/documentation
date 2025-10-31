---
sidebar_position: 4
---

# FastX Codes

FastX codes are unique identifiers used across Travelgate’s Marketplace for hotels, boards, and rooms. They provide a standardized system that connects Buyers and Sellers efficiently:

* **For Buyers**: FastX codes allow you to access all Suppliers’ products through a single, consistent set of identifiers, simplifying searches, aggregation, and integration.

* **For Sellers**: FastX codes let you validate your portfolio with Travelgate’s master database, ensuring your hotels and boards are correctly represented to all Buyers.

The **FastX Codes tool** helps manage these matches, letting Sellers validate their mappings and Buyers track which Suppliers are matched to each FastX code. Working with FastX codes ensures the marketplace operates faster, more reliably, and with fewer errors.

## For Sellers

Sellers use this section to **validate or invalidate suggested mappings** between their own hotel and board codes and Travelgate’s master FastX codes.

![fastx-seller-mode](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode.png)

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
![fastx-seller-validation-individually](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode_validation1.png)

* **In Group:** Select multiple pairings with checkboxes and apply actions with the buttons above the table.
![fastx-seller-validation-group](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode_validation2.png)

* **Bulk via CSV:** Use the "Bulk Hotel Validation" button and download the hotel data and mapping, change the 'status' column to validate or invalidate, and upload for processing.
![fastx-seller-validation-bulk-csv](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode_validation3.png)

### Important Notes

* Always review data carefully before validating; you are responsible for confirmed mappings.
* If unsure, leave the status as **Pending** rather than invalidating.
* New hotels or significant updates in your hotel list information automatically set the status to **Pending** and require re-validation.
* Check both hotel and board mappings.

![fastx-seller-mode-boards](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_seller_mode_boards.png)


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
    <summary>Are the hotels I validate available to all Buyers using FastX codes?</summary>
    <div>
        <div>
        Yes, as long as the hotel is included in the Buyer’s access hotel list. Once you validate the mapping between your hotel and the FastX hotel code, that validation becomes available to any Buyer using FastX to connect with you via Travelgate. This makes the process much more efficient, as you only need to verify the mapping and validate your portfolio once, and then control which hotels you want to sell to each Buyer using the hotel list (just like with any other Buyer in Travelgate).
        </div>
    </div>
</details>


<details>
    <summary>How can I control which hotels or boards I sell to a specific Buyer?</summary>
    <div>
        <div>
        Even if you validate your full portfolio, that doesn’t mean all hotels are automatically available to every Buyer. What you offer to each Buyer is managed through the hotel list of each access (you can check this in the [Connections Content](https://app.travelgate.com/connections/content) section). 
        
        If your system doesn’t support separate hotel or board lists per access , don’t worry — just create a ticket to our Customer Care team and request filtering your portfolio for a specific access. Please include a CSV file with the hotel codes you want to allow.
        </div>
    </div>
</details>


<details>
    <summary>How often is the FastX portfolio updated? What if some hotels are missing?</summary>
    <div>
        <div>
        Our FastX codes are updated every two weeks. If you’ve added new hotels recently, they will appear as “Pending” in your FastX list once included. If you notice missing hotels, simply open a case with our [Customer Care](https://app.travelgate.com/support) team and we’ll review it for you.
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


## For Buyers

Buyers use this section to **visualize the FastX master hotel and board list** and monitor Supplier mappings.

### Step-by-Step Guide

1. **Log in** to the Travelgate Portal.
2. Switch to **Buyer mode** and navigate to the [FastX Codes section](https://app.travelgate.com/connections/mapping).
3. Select a Client from your organization to see the mapping content.

![fastx-buyer-mode](https://stplaformwe.blob.core.windows.net/kbase/fastx_codes_buyer_mode.png)


### Features

* See which Suppliers are mapped to each FastX hotel and board code.
* Check validation status for each Supplier (validated or pending).
* Filter by hotel, country, or status to monitor mapping completeness.
* Export reports to CSV for analysis or auditing.

Buyers benefit from consistent FastX codes across all Suppliers, simplifying product aggregation and ensuring faster, more efficient access to travel inventory.

### Filters and Search

* **Status:** Validated or Pending.
* **Name or Code:** Search for hotels or boards.
* **Country:** Filter by location.

### Export to CSV

* Filter by supplier and use **Download CSV**.
* Includes Travelgate master data and Supplier portfolio.
* Applies active filters to the exported file.