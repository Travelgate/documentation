---
sidebar_position: 7
---

# 105 Error - Payload Too High

## What Does a 105 - "Payload Too High" Error Mean?
This error occurs when the Seller's response size exceeds the Travelgate limit for optimal performance. The current limits are **20,000 options or 15MB**.

### Error Examples

#### **Legacy Pull Buyers API**
```xml
<applicationErrors>
    <type>105</type>
    <description>Payload too high, received 21097.201171875 KB</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>
```

#### **Hotel-X Pull Buyers API**
```json
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
        "description": "Access `xxx` returned: Payload too high, received 122000.3818359375 KB"
    }
]
```

## How to Handle a 105 - "Payload Too High" Error
#### 1. **Contact the Seller**  

If you notice an increase in these errors, reach out to the Seller to request a reduction in the number of options or the response size.

#### 2. **Request Additional Support**  

If the issue persists after consulting the Seller, contact us through our [Support Portal](https://app.travelgate.com/support). Our team will be happy to assist you.
