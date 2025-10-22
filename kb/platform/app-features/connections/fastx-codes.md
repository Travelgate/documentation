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
* **In Group:** Select multiple pairings with checkboxes and apply actions with the buttons above the table.
* **Bulk via CSV:** Download the hotel data and mapping, add a validation column, and upload for processing.

### Important Notes

* Always review data carefully before validating; you are responsible for confirmed mappings.
* If unsure, leave the status as **Pending** rather than invalidating.
* Check both hotel and board mappings.
* New hotels or significant updates in your hotel list information automatically set the status to **Pending** and require re-validation.

### FAQs


<details>
    <summary>Where does the portfolio of hotels and boards in the FastX section come from?</summary>
    <div>
         <div>
         The hotel and board portfolio you see in the FastX section is compiled by Travelgate. It includes all the hotels and board types that you, as a Seller, have made available to Buyers through our marketplace. We aggregate this portfolio based on the hotels shared with all your connected Buyers, as long as each hotel includes the minimum required information (name, country, address, and coordinates). Every two weeks, when we run the FastX process, we retrieve your latest hotel content and add any new hotels that are detected. If some of your hotels have updated information, this will also be taken into account. If the changes are significant — for example, a hotel name change — the system may suggest a new FastX code for that property with the status pending for your validation.
        </div>
    </div>
</details>


## For Buyers

Buyers use this section to **visualize the FastX master hotel and board list** and monitor Supplier mappings.

### Features

* See which Suppliers are mapped to each FastX hotel and board code.
* Check validation status for each Supplier (validated or pending).
* Filter by hotel, country, or status to monitor mapping completeness.
* Export reports to CSV for analysis or auditing.

Buyers benefit from consistent FastX codes across all Suppliers, simplifying product aggregation and ensuring faster, more efficient access to travel inventory.

### Filters and Search 🔎

* **Status:** Validated or Pending.
* **Name or Code:** Search for hotels or boards.
* **Country:** Filter by location.

### Export to CSV 📄

* Filter by supplier and use **Download CSV**.
* Includes Travelgate master data and Supplier portfolio.
* Applies active filters to the exported file.