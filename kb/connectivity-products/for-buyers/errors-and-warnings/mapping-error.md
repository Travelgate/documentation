---
sidebar_position: 23
---

# MAPPING_ERROR

## What Does a "MAPPING_ERROR" Mean?
A **"MAPPING_NOT_FOUND"** error occurs when our system cannot find a match between your own codes (hotel codes, room codes, board codes, etc.) and the Supplier's information. This can also happen when there is a mismatch between the context code used in your request and the context code or data configured in the mapping files uploaded to your SFTP (hotels, boards, rooms).

### Example:
```
[
    {
        "code" : "MAPPING_NOT_FOUND",
        "type" : "MAPPING_ERROR",
        "description" : "Access: 'xxx' couldn't process hotel codes [123456] due to not finding mapping codes for supplier context [xxx]"
    }
]
```

## What Can I Do If I Receive a "MAPPING_ERROR"?
Since this error indicates a discrepancy or issue with mapping validation, check the following:

1. **Hotel Codes**
   - Ensure the hotels in your request are returned through the Hotels Query for that specific Supplier.
2. **Context Codes (Content Codes)**
    - **Supplier Context**: Use the Supplier's context when requesting the Seller's hotel codes. You can find the context code in the '[My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details#additional-access-information)' section, at an Access Level.
    - **Buyer Context**: Use your [Buyer context](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#context) when requesting your own hotel codes (previously mapped and uploaded to your SFTP).
3. **SFTP Files and Mapping**
   - Ensure your [mapping file](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) includes the header row, as it is mandatory. Omitting it may result in mapping errors.
   - Verify that the requested hotel has been added to your mapping file and that the file was processed without errors.

:::tip
Don't forget to check our [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) for more details on the Hotel-X Mapping plugin! 🚀
:::
