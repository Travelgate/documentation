---
sidebar_position: 20
---

# VALIDATION_ERROR

## What Does a "VALIDATION_ERROR" Mean? 
A **"VALIDATION_ERROR"** occurs when the validation information provided in your Hotel-X request does not match the information set for your account or is invalid for that specific request.

## What Can I Do If I Receive a "VALIDATION_ERROR"? 
Since this error indicates a discrepancy or issue with the validation process, check the following:

- **Verify Access Status**
  - Check [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details) to ensure the access set in your request has been configured for your account (status "working") and is active. If inactive, activate it before running requests via our platform.
- **Verify Access Type (Test/Live)**
  - Ensure that the "testMode" tag in your request matches the Test/Live settings for that specific access.
- **Verify Client**
  - The Client set in your request should be one configured for your account. More details on Hotel-X Clients can be found [here](/kb/platform/app-features/connections/api-settings/).
- **Verify API Key**
  - Ensure the API key in your request matches the one configured for your account. You can find more information on your API settings [here](/kb/platform/app-features/connections/api-settings/).
- **Verify Context**
  - The context code in your request should match the expected mapping:
    - **[Single Mode request](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-query#single-mode-and-multimode)**: Use the Supplier context (available in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/connections-details)) or your own Client context (uploaded mapping to SFTP).
    - **[Multi-mode request](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/search-query#single-mode-and-multimode)**: Use your own Client context.
- **Verify Criteria**
  - Ensure your request criteria are valid. For example, do not set check-in and check-out dates in the past. Also, ensure compliance with the supplier's specifications as outlined in their [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata).

### VALIDATION_ERROR Examples 

### 1. Incorrect Hotel-X Credentials (e.g., Access, Client, API Key)
- **"ACCESS_ERROR"; "VALIDATION_ERROR"**
```json
{
    "data": {
        "hotelX": {
            "search": {
                "auditData": {
                    "transactions": []
                },
                "context": "xxxx",
                "options": null,
                "errors": [
                    {
                        "code": "ACCESS_ERROR",
                        "type": "VALIDATION_ERROR",
                        "description": "No valid accesses found"
                    }
                ],
                "warnings": null
            }
        }
    }
}
```
```json
{
    "data" : {
        "hotelX" : {
            "search" : {
                "auditData" : null,
                "context" : "xxx",
                "options" : null,
                "errors" : [
                    {
                        "code" : "ACCESS_ERROR",
                        "type" : "VALIDATION_ERROR",
                        "description" : "this group does not have execution permission over src"
                    }
                ],
                "warnings" : null
            }
        }
    }
}
```

### 2. Too Many Options to Return (Quota Exceeded)
- **"QUOTA_EXCEEDED"; "VALIDATION_ERROR"** (more information about OptionsQuota [here](/kb/connectivity-products/for-buyers/hotel-x/booking-flow/search/business-rules))
```json
{
    "data": {
        "hotelX": {
            "search": {
                "auditData": null,
                "context": "xxx",
                "options": null,
                "errors": [
                    {
                        "code": "QUOTA_EXCEEDED",
                        "type": "VALIDATION_ERROR",
                        "description": "Too many options to return"
                    }
                ],
                "warnings": null
            }
        }
    }
}
```

### 3. Incorrect Search Criteria
- **"WRONG_FIELD"; "VALIDATION_ERROR"** (e.g., Invalid Dates)
```json
{
    "data": {
        "hotelX": {
            "search": {
                "auditData": null,
                "context": "xxx",
                "options": null,
                "errors": [
                    {
                        "code": "WRONG_FIELD",
                        "type": "VALIDATION_ERROR",
                        "description": "Check-in date must be from now on"
                    }
                ],
                "warnings": null
            }
        }
    }
}
```

:::tip
If you continue experiencing this error after reviewing the above information, contact our Customer Support team. We are here to help! 🚀
:::