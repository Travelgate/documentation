---
sidebar_position: 22
---

# PLUGIN_ERROR - Commission Files

## Why Do I Receive This Warning in My Hotel-X Response?
You will receive a commission warning **"some of the options have been discarded because we don't know if price is gross or net"** when a Supplier does not return the price commission via the integration (it has been established at a contractual level).

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

### What Can I Do If I Receive a Commission (Some Options Discarded) Warning in my Response?
To resolve this issue, you should **upload the SFTP commission file** (`RequestContext_sequential_commission.csv`) by following the instructions in our [Commission Plugin](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commission) and [Format Files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview) documentation.
