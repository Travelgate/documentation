---
sidebar_position: 22
---

# PLUGIN_ERROR - Commission Files

### Why do I receive this warning in my Hotel-X response?

You will receive a **commission warning "some of the options have been discarded because we don't know if price is gross or net"** in those cases a Seller does not return the price commission via the integration (it has been established at contractual level).

### What can I do if I receive a commission (some options discarded) warning?🛠️

In these cases, the Buyer should upload the SFTP commission file in order to avoid the following warning in the response:

```json
{
    "warnings" : [
        {
            "code" : "WRONG_FIELD",
            "type" : "PLUGIN_ERROR",
            "description" : "some options [x] of access xxxx have been discarded because we don't know if price is gross or net. Please, load your commission file in FTP"
        }
    ]
}
```

### How do I upload the commission file to the SFTP?🚀

You will find more information on how to create and upload your SFTP commission file on our [Commission Plugin Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision) and how to update, delete and create file in gneeral in our Plugins - [Format Files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) documentation.

:::info
"RequestContext" on the file name depends on the context you use in your query:
- If you use your own **Buyer context** (multi mode search) you only need to load 1 file with your context in the name (BuyerContext_sequential_commission.csv).
- If you use the **Supplier context** (single mode search) you will need to load 1 file for each supplier with the Supplier context in the name (SupplierContext_sequential_commission.csv). 
:::