---
sidebar_position: 2
---

# 102 error - Provider error

### What does a 102 error mean?💡
The 102 error is classified as **provider error** and it occurs when a Seller returns a particular code/description for an error, which is then transmitted to you in our response.

If the Seller does not provide an error description, it will be typified as a 102 error type without description.

```
<applicationErrors>
    <code>provider_error_code</code>
    <type>102</type>
    <description>provider_error_description</description>
    <httpStatusCode>0</httpStatusCode>
</applicationErrors>

```

### Example of a 102 error description: "The start date must be a future date"🔎
"The start date must be a future date" means that the Buyer is searching for a date in the past and the Seller cannot respond with any availability for past dates. The solution here is to adjust the search to reflect dates in the future.

### What can I do if I receive a 102 error in my response?✔️
We strongly recommend you **contact your Seller** directly if the 102 error description is not clear for you and for further information regarding the cause of the error.

 