---
sidebar_position: 18
---

# ProviderNotActivated Warning

## What Does a ProviderNotActivated Warning Mean?
This warning appears in the Legacy Pull Buyers API response when the connection with the Supplier has not yet been established. Before proceeding, ensure that you have a commercial agreement with them and have [requested their activation](/kb/platform/app-features/connections/my-connections/guick-guide-to-auto-activations).

### Example Response:
```
<warnings>
    <Warning>
        <warning>ProviderNotActivated:[Supplier_code]</warning>
    </Warning>
</warnings>
```

### What Can I Do If I Receive a ProviderNotActivated warning in my Response?
To resolve this issue:
1. **Verify Provider Code**
   - Ensure that you have included the correct provider code in your request.
   - The provider code should match the one provided during activation.

![Provider Not Activated](https://storage.travelgate.com/kbase/provided_not_actived.jpg)

:::tip
If the warning persists after verifying the details above, please contact our [Customer Support team](https://app.travelgate.com/support).
:::
