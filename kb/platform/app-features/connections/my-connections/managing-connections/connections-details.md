---
sidebar_position: 2
---

# Connections Details

Welcome to the **My Connections** section! This guide will help you track, activate, and manage your connections at Travelgate.  

## How to Check My Connections  

To view and manage your connections, follow these steps:  

1. **Log in** to the [Travelgate Platform](https://www.travelgate.com/).  
2. Ensure you are browsing as either a **Buyer** or a **Seller**, depending on your Partner type.  
   :::info
   You can switch between Buyer and Seller views at any time using the **“View data of this page as:”** selector on the left side of the screen. The selector is available **only** for organizations that are connected on the platform as both a Buyer and a Seller.
   :::
3. Click **Connections** in the top menu, then select **My Connections**.  

   ![myconnections_aug_1](https://storage.travelgate.com/kbase/myconnections_aug_1.jpg)  

## What Information Can I Find in My Connections?  

In the [My Connections](https://app.travelgate.com/connections/myconnections) section, you will find a list of all your connections and their respective access details.  

### **Filtering Your Connections**  
You can filter your connections using the following parameters:  

- **Access Status**:  
  - **Working**: The access is active and fully operational.  
  - **In Progress**: The automatic activation process is ongoing. If an issue arises, Travelgate's team will manually intervene.  
  - **Pending Seller's Feedback**: The access is in a validation phase, awaiting additional details from the Buyer or Seller.  

- **Access Type**:  
  - **Live**: Access using production credentials.  
  - **Test**: Access using test credentials.

      :::warning Important:
      The "Access Type" label (Test or Live) serves as a **visual indicator**. However, the actual live or test nature of an access is determined solely by the credentials agreed upon and managed by the Buyer and Seller. The access type is **editable**, and if an access is labeled "Test" but uses production credentials, any bookings made will be considered live bookings by the supplier.

      Additionally, when an access is labeled as "Test":
      - The `testMode` field in the request must be set to true.
      - The names of the passengers (paxes) in bookings made via this access will be displayed as placeholder names (e.g., "TestA", "test test").
      :::

- **Access Active Status**:  
  - **Yes**: The access is active and operational.  
  - **No**: The access is inactive, meaning no further HotelX requests will be processed. **Note**: Deactivating an access may take time to fully propagate through the system.  

   ![tg_filter_results](https://storage.travelgate.com/kbase/tg_filter_results.jpg)  

### **Additional Access Information**  
- **HotelX Access Code**: Unique identifier for the access.  
- **Supplier Code**: The Supplier's specific code for that access.  
- **Access Name**: Name identifier for the access.  
- **Partner Name**: The Partner connected via the access (Buyer or Seller).  
- **Updated & Created Date**: View the last modification date and the original creation date.  
- **Accommodations**: Number of properties available for that access.  
- **Context Code**: Check the [content codes](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#context) used.  

- **Supplier Connection Type**: In the access card, next to the **Supplier Code**, you can check whether the supplier is configured as **Pull**, **Push**, or **Push Hybrid**. This helps you understand where the credential is managed and how the integration is expected to behave.
- **Buyer Connection Type**: If you're a Seller, you can check if your Buyer is connected via the **HotelX API** or the **Legacy Pull Buyers API (deprecated)**. If using **HotelX**, a badge is displayed on the Buyer card. This badge helps you quickly identify whether the Buyer is using the newer HotelX setup or the Legacy flow.

   ![tg-my-connections-connection-type](https://storage.travelgate.com/kbase/tg-my-connections-connection-type.png)  
   ![tg-my-connections-fastx-supplier](https://storage.travelgate.com/kbase/tg-my-connections-fastx-supplier.png)

:::tip  
Still using our Legacy Pull Buyers API? **Upgrade to [HotelX API](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart)** to access enhanced features!  
:::  

:::info
In **My Connections**, you can identify the connection model directly from the card:

- **Supplier side**: look next to the **Supplier Code** to see whether the supplier is configured as **Pull**, **Push**, or **Push Hybrid**.
- **Buyer side**: look for the **HotelX / Legacy** badge on the Buyer card to confirm whether the Buyer is using the HotelX API or the Legacy Pull Buyers API.
:::

### Download CSV

Download a CSV file containing your connection data by clicking the **Download CSV** button at the top of the connections list. The file includes:

- Connection
- Access code
- Access name
- Supplier code
- Supplier name
- Supplier context
- Hotels
- Status
- Access type

![tg_my_connections_download-csv](https://storage.travelgate.com/kbase/tg_my_connections_download-csv.png)