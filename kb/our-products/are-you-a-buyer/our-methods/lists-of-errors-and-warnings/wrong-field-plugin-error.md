---
sidebar_position: 22
---

# PLUGIN_ERROR - Commission Files

### Why do I receive this warning in my Hotel-X response?

You will receive a commission warning **"some of the options have been discarded because we don't know if price is gross or net"** in those cases a Seller does not return the price commission via the integration (it has been established at contractual level).

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

### What can I do if I receive a commission (some options discarded) warning?

To resolve this issue, you should **upload the SFTP commission file** (RequestContext_sequential_commission.csv) following the instructions in both our [Commission Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision) and [Format Files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) documentation.