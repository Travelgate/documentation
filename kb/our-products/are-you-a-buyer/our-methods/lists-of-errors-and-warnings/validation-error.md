---
sidebar_position: 20
---

# VALIDATION_ERROR

### What does a "VALIDATION_ERROR" mean?💡
A "VALIDATION_ERROR" occurs when the validation information provided in your Hotel-X request does not match the information set for your account or is not valid for that specific request.

### What can I do if I receive a "VALIDATION_ERROR" in my response?🔎
Since this error serves as an indication that there is a discrepancy or issue with the validation process, you should check the following information:

- **Verify access status**: You should check [My Connections](/kb/connections/my-connections/) in order to make sure that the access or accesses set in your request have already been configured for your account (status "working") and are active. If your access is not active: Please make sure you activate it in order to run requests via our Platform.
- **Verify access type (Test/Live)**: Verify that the "testMode" tag in your request matches the Test/Live settings for that specific access.
- **Verify Client**: The Client set in your request should be one of those configured for your account. More information on Hotel-X Clients can be found [here](/kb/connections/connections-settings/).
- **Verify Apikey**: The Apikey set in your request should be the one configured for your account. You will find more information on your API Settings [here](/kb/connections/connections-settings).
- **Verify Context**: The Context code set in your request should match the mapping expected in your request:
    - [Single Mode request](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/hotel-x-single-mode-and-multimode-search): you may either request with the Supplier context (you can check this information in [My Connections](/kb/connections/my-connections/), at an access level) or with your own Client context (Mapping uploaded to the SFTP).
    - [Multi-mode request](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/hotel-x-single-mode-and-multimode-search): You should use your own Client context.
- **Verify criteria**: Ensure that the criteria in your request are valid. For instance, do not set check-in and check-out dates that are in the past. Additionally, make sure that your request complies with the supplier's specifications as outlined in their [Metadata](/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query).


### VALIDATION_ERROR examples⚠️
1. **Incorrect Hotel-X credentials** (e.g. Access, Client, Apikey, etc.): **"ACCESS_ERROR"; "VALIDATION_ERROR"**

    ```
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

     ```
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

2. **Too many options to return** (in relation to the [optionsQuota](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-limit-and-filter-options-through-business-rules) value) - **"QUOTA_EXCEEDED"; "VALIDATION_ERROR"**

    ```
    {
        "data" : {
            "hotelX" : {
                "search" : {
                    "auditData" : null,
                    "context" : "xxx",
                    "options" : null,
                    "errors" : [
                        {
                            "code" : "QUOTA_EXCEEDED",
                            "type" : "VALIDATION_ERROR",
                            "description" : "description":"too many options to return"
                        }
                    ],
                    "warnings" : null
                }
            }
        }
    }
    ```

3. **Incorrect Search criteria** (e.g. invalid dates): **"WRONG_FIELD"; "VALIDATION_ERROR"**
```
{
    "data" : {
        "hotelX" : {
            "search" : {
                "auditData" : null,
                "context" : "xxx",
                "options" : null,
                "errors" : [
                    {
                      "code" : "WRONG_FIELD",
                        "type" : "VALIDATION_ERROR",
                      "description" : "description":"check-in date must be from now on"
                    }
                ],
                "warnings" : null
            }
        }
    }
}
```

:::tip
If you're still experiencing the error after going through the information mentioned above, don't hesitate to contact our Customer Support team. We are here to help you!🚀
:::