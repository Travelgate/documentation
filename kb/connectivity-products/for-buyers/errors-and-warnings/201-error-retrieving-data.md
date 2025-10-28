---
sidebar_position: 8
---

# 201 Error - Error Retrieving Data

## What Does a 201 Error Mean?
A **201 error** will appear in your content method response when **your static content data needs to be updated**.

### Error Example
```xml
<applicationErrors>
    <type>201</type>
    <description>Error retrieving data</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```


## How to Resolve a 201 Error

To resolve a 201 error, start by **checking whether the method you're requesting is implemented by the Supplier** by reviewing their Metadata. Make sure to include the `implemented`and `languages` fields in your Metadata query request, as outlined in our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata).
- **If the method is not implemented:** Contact the Seller directly to discuss adding that method.
- **If the method is implemented:**
    1. Verify your credentials and API Request Compliance.
    2. Access our Platform and navigate to the Connections section and click on [Connections Content](/kb/platform/app-features/connections/connections-content/content-management). Then, [force an update](/kb/platform/app-features/connections/connections-content/content-management#how-can-i-use-the-force-update-now-functionality) to ensure you’re retrieving the latest data from the Seller.
    5. Check whether the error persists after the update.
    6. If the issue continues, contact our [Customer Support](https://app.travelgate.com/support) team for further assistance.