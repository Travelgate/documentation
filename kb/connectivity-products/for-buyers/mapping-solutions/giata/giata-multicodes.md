---
sidebar_position: 4
---

# GIATA Multicodes

### What is GIATA Multicodes?

GIATA Multicodes is a hotel mapping solution offered by GIATA, previously known as GIATA Universal Hotel Codes at Travelgate. There are no costs associated with accessing your GIATA hotel codes through Travelgate— all you need to provide are your GIATA credentials.

### Where Can I Expect to Receive GIATA Multicodes?

The **Hotel-X API** fully supports GIATA Multicodes in the **Hotel-X Hotels Query** response (available only at the hotel level).

### How to Activate GIATA Multicodes

Follow these steps to activate GIATA Multicodes:

1. **Establish a Commercial Agreement:**
   - First, you need to reach a commercial agreement with GIATA.

2. **Contact Customer Support:**
   - Submit a request via our [Support Portal](https://app.travelgate.com/support), providing your GIATA credentials. Our Customer Support team will verify your agreement with GIATA.

3. **Retrieve GIATA Codes:**
   - Once your account is validated, you can retrieve GIATA codes in the [Connections Content](/kb/platform/app-features/connections/connections-content/content-management) section and in your [Hotels Query](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels) response.

Ensure you include `giataData` in your Hotels Query request to receive the information in your response.

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


### Why are some hotels missing GIATA codes?
Not all hotels returned by suppliers through Travelgate are necessarily mapped in the GIATA system. Since Travelgate pulls data directly from GIATA’s database, any unmapped properties will not include a GIATA code. If you need GIATA data for those hotels, please **contact GIATA** to request mapping.

:::tip
**Interested in GIATA Hotel Directory as well?**
Follow the easy steps outlined in this [guide](/kb/connectivity-products/for-buyers/mapping-solutions/giata/giata-multicodes).
:::

