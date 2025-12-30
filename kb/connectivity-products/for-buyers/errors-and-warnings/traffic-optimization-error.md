---
sidebar_position: 24
---

# TRAFFIC_OPTIMIZATION_ERROR

### What Does a "TRAFFIC_OPTIMIZATION_ERROR" Mean? 
A **"TRAFFIC_OPTIMIZATION_ERROR"** occurs when a connection or access has been activated in Traffic Optimizer, and the Buyer requests only blacklisted hotels.

#### Example:
```json
"warnings": [
                    {
                        "external": null,
                        "type": "TRAFFIC_OPTIMIZATION_ERROR",
                        "code": "BLACKLIST",
                        "description": "Access: 'xxx' has no codes left after filter hotel codes"
                    }
                ]
```

### What Can I Do If I Receive a "TRAFFIC_OPTIMIZATION_ERROR"? 
1. **Check the Traffic Optimizer Dashboard**
   - Review the [hotels blocked](/kb/platform/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-activation#how-can-i-see-which-hotels-are-blocked) for the specific connection/access.
2. **Examine and Update Criteria**
   - Assess the [Traffic Optimizer criteria](/kb/platform/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-details#optimization-criteria) for the connection/access and modify it if it does not meet your needs.

:::tip
Don't forget to check our [Traffic Optimizer Documentation](/kb/platform/app-features/smart-traffic/traffic-optimizer/traffic-optimizer-activation) for more information🚀
:::
