---
sidebar_position: 24
---

# TRAFFIC_OPTIMIZATION_ERROR

### What Does a "TRAFFIC_OPTIMIZATION_ERROR" Mean? 
A **"TRAFFIC_OPTIMIZATION_ERROR"** occurs when a connection or access has been activated in Traffic Optimizer, and the Buyer requests only blacklisted hotels.

#### Example:
```json
[
    {
        "code" : "BLACKLIST",
        "type" : "TRAFFIC_OPTIMIZATION_ERROR",
        "description" : "Access: xxx has no codes left after filter hotel codes."
    }
]
```

### What Can I Do If I Receive a "TRAFFIC_OPTIMIZATION_ERROR"? 
1. **Check the Traffic Optimizer Dashboard**
   - Review the hotels blocked for the specific connection/access.
2. **Examine and Update Criteria**
   - Assess the Traffic Optimizer criteria for the connection/access and modify it if it does not meet your needs.
