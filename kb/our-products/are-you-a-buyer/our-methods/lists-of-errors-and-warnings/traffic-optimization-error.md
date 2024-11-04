---
sidebar_position: 24
---

# TRAFFIC_OPTIMIZATION_ERROR

### What does a "TRAFFIC_OPTIMIZATION_ERROR" mean?💡

"TRAFFIC_OPTIMIZATION_ERROR" errors occur when a connection or access have been activated in Traffic Optimizer, and the Buyer requests only blacklisted hotels.

**Example:**

```json
[
    {
        "code" : "BLACKLIST",
        "type" : "TRAFFIC_OPTIMIZATION_ERROR",
        "description" : "Access: xxx has no codes left after filter hotel codes."
    }
]
```

### What can I do if I receive a "TRAFFIC_OPTIMIZATION_ERROR" in my response?🔎

1. Check the Traffic Optimizer Dashboard and review the hotels blocked for the specific connection/access.
2. Examine the Traffic Optimizer criteria for the connection/access, and update it if it doesn't meet your needs.