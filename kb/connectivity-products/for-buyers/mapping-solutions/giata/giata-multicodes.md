---
sidebar_position: 4
---

# GIATA Multicodes

### What is GIATA Multicodes?

GIATA Multicodes is a hotel mapping solution offered by GIATA, previously known as GIATA Universal Hotel Codes at Travelgate. There are no costs associated with accessing your GIATA hotel codes through Travelgate— all you need to provide are your GIATA credentials.

### Where Can I Expect to Receive GIATA Multicodes?

The **Hotel-X API** fully supports GIATA Multicodes in the **Hotel-X Hotels Query** response (available only at the hotel level).

### How to Activate GIATA Multicodes

The following steps must be completed by the **Buyer**:

1. **Establish a Commercial Agreement:** Reach a commercial agreement directly with GIATA to initiate the process.

2. **Submit a Support Request:** Open a case through our [Support Portal](https://app.travelgate.com/support), providing your GIATA credentials. This allows our system to verify your agreement with GIATA and proceed with the necessary configuration.

3. **Retrieve GIATA Codes:** Once the account is validated, GIATA codes become available in the [Connections Content](/kb/platform/app-features/connections/connections-content/content-management) section and in the [Hotels Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) response - Ensure you include `giataData` in your Hotels Query request to receive the information in your response.
    ```
    {
      hotelData {
        hotelCode
        hotelCodeSupplier
        hotelName
        giataData {
          id
          source
          href
        }
      }
    }
    ```

:::info FastX Codes in GIATA
Working with FastX Codes? Good news! GIATA mapping is now easier than ever. With Travelgate listed in GIATA’s system as **"travelgate"**, GIATA data is directly available for FastX Codes too.
:::

### Why are some hotels missing GIATA codes?
Not all hotels returned by suppliers through Travelgate are necessarily mapped in the GIATA system. Since Travelgate pulls data directly from GIATA’s database, any unmapped properties will not include a GIATA code. If you need GIATA data for those hotels, please **contact GIATA** to request mapping.

:::tip
**Interested in GIATA Hotel Directory as well?**
Follow the easy steps outlined in this [guide](/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes).
:::

