---
sidebar_position: 12
---

# 207 Error - Request XML Not Accepted by Supplier

## What Does a 207 Error Mean?
A **207 error** occurs when a Buyer's request does not conform to the Supplier's specifications.

#### Example:
```xml
    <applicationErrors>
      <type>207</type>
      <description>Request XML not accepted by supplier</description>
      <httpStatusCode>0</httpStatusCode>
    </applicationErrors>
```

### What Can I Do as a Buyer if I Receive a 207 Error?
If you receive a 207 error in your response, follow these steps:

1. **Verify Request Compliance:** Ensure that your request adheres to Travelgate's API specifications and aligns with the Supplier’s requirements. If you encounter a 207 error, review the Seller's [Metadata](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata) for that method to ensure your request complies with the established limitations, and if applicable, verify that the hotel codes in your request exactly match those returned by Travelgate in the 'hotelCode' field.

    :::warning Important
    Remember that when a Supplier’s hotels are returned via Travelgate with a concatenated format (hotelCode field), you must always use the full concatenated code when making any API request (e.g., Search, Hotels, Booking, etc.).
    :::

2. **Metadata Alignment:** If you find inconsistencies between the Supplier’s metadata and the specifications they have confirmed, contact the Seller directly. They should address the issue through our Support Portal and provide their latest API documentation, allowing our IT team to review and update their metadata as needed.

:::tip
Remember to **check the limitations set by the Seller for each method** using our [Metadata Query](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) to avoid errors and unnecessary traffic.
:::
