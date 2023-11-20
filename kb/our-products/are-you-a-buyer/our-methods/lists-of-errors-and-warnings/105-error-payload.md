---
sidebar_position: 7
---

# 105 error - Payload too high

### What does a 105 - "Payload to high" error mean?💡
This error is returned whenever the size of the response by the Seller surpasses the size limitation established on our side for optimal performance (20000 options or 15MB).


**Legacy Pull Buyers API example:**

```
<applicationErrors>
    <type>105</type>
    <description>Payload too high, received 21097.201171875 KB</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>

```

**Hotel-X Pull Buyers API example:**


```
    "errors": [
                    {
                        "code": "ALL_PROCESSES_FAILED",
                        "type": "PROCESS_ERROR",
                        "description": "See warnings for more information"
                    }
                ],
                "warnings": [
                    {
                        "code": "",
                        "type": "105",
                        "description": "Access `xxx` returned:  Payload too high, received 122000.3818359375 KB"
                    }
                ]
```
 
### What can I do if I receive a 105 - "Payload to high" error in my response?✔️
1. If you detect an increase of these errors, you should **contact the Seller** directly in order to check this information on their side and reduce the number of options/size of their responses.
1. Should you need further support after checking this information with the Seller, do not hesitate to contact us again through a [ticket](https://app.travelgatex.com/tickets) in our Portal and our team will be happy to help.