﻿---
sidebar_position: 18
---

# "VALIDATION_ERROR"

### What does a "VALIDATION_ERROR" mean?💡
A "VALIDATION_ERROR" occurs when the validation information provided in your Hotel-X request does not match the information set for your account or is not valid for that specific request.

### What can I do if I receive a "VALIDATION_ERROR" in my response?🔎
Since this error serves as an indication that there is a discrepancy or issue with the validation process, you should check the following information:

- **Verify access**: You should check [My Connections](https://knowledge.travelgate.com/my-connections) in order to make sure that the access/es set in your request have already been configured for your account (status "working") and are active:
    - **If your access displays a "not working" status**: One or more processes in the activation have failed and our connectivity team needs to review it manually. You can [contact](https://knowledge.travelgate.com/the-auto-activation-process) our Activations Team if necessary via the [Auto-Activations ticket](https://knowledge.travelgate.com/tickets-status).
    - **If your access is not active**: Please make sure you activate it in order to run requests via our Platform.
- **Access type Test/Live**: Verify that the "testMode" tag in your request matches the Test/Live settings for that specific access.
- **Verify Client**: the Client set in your request should be one of those configured for your account. More information on Hotel-X Clients can be found [here](https://knowledge.travelgatex.com/api-settings).
- **Verify Apikey**: the Apikey set in your request should be the one configured for your account as Buyer. You will find more information on your account settings [here](https://knowledge.travelgatex.com/api-settings).
- **Verify Context**: the Context code set in your request should match the mapping expected in your request:
    - **[Single Mode request](https://knowledge.travelgate.com/hotel-x-search-single-mode-multimode)**: you may either request with the Supplier context (you can check this information in [My Connections](https://knowledge.travelgate.com/my-connections), at an access level) or with your own Client context (Mapping uploaded to the FTP).
    - **[Multi-mode request](https://knowledge.travelgate.com/hotel-x-search-single-mode-multimode)**: you should use your own Client context.
- **Verify criteria**: you should check the criteria in your request is valid. For example, do not set check-in and check-out dates from the past.


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

1. **Too many options to return** (in relation to your [optionsQuota](https://knowledge.travelgate.com/options-quota-business-rules)) - **"QUOTA_EXCEEDED"; "VALIDATION_ERROR"**

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

1. **Incorrect Search criteria** (e.g. invalid dates): **"WRONG_FIELD"; "VALIDATION_ERROR"**
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

:::note
If you're still experiencing the error after going through the information mentioned above, don't hesitate to contact our Customer Care team. We are here to help you!🚀
:::