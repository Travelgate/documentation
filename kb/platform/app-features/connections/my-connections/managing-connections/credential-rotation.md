---
sidebar_position: 8
description: Recommended cadence and responsibility split for rotating the credentials stored in your Travelgate accesses, by connection model and organization type.
---

# Credential Rotation Best Practices

Rotating the credentials stored in your [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access) reduces the risk of unauthorized use. This article explains how often to rotate them and who is responsible, depending on your connection model.

## Recommendation

- Rotate credentials **at least once a year**.
- Rotate **immediately** if you suspect a compromise, regardless of the annual cycle.

:::info
This article covers the credentials stored in your accesses. To manage your Travelgate API keys, see [Manage API Keys](/kb/platform/app-features/account-settings/api-keys/manage-api-keys).
:::

## Who Rotates the Credentials

### For Buyers

| Connection model | Supplier Push | Supplier Pull (including Push Hybrid) |
| --- | --- | --- |
| **Legacy** | Rotated by Travelgate. Travelgate notifies the Buyer so they sync the new credentials on their side. | Rotated by the Buyer. |
| **HotelX** | Rotated by Travelgate. | Can be rotated by the Buyer or the Seller. Sellers are recommended not to share secrets externally. |

### For Sellers

| Connection model | Supplier Push | Supplier Pull (including Push Hybrid) |
| --- | --- | --- |
| **Buyer Legacy** | Rotated by Travelgate. Travelgate notifies the Buyer so they sync the new credentials on their side. | Recommended that the Buyer manages it (credential sync on the Buyer side). |
| **Buyer HotelX** | Rotated by Travelgate. | Can be rotated by the Buyer or the Seller. Sellers are recommended not to share secrets externally. |

### Notes

- **Legacy** and **HotelX** refer to the Buyer's connection generation. Legacy Buyers connect through the [Legacy Pull Buyers API](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access#connections-via-legacy-pull-buyers-api).
- **Push:** Travelgate holds and manages the credential in the push flow. When Travelgate performs the rotation for Legacy Buyers, it notifies the Buyer to sync the updated credentials on their side.
- **Pull (including Push Hybrid):** the credential is managed on the counterparty side and rotated by whoever the table assigns.

## How to Update a Rotated Credential

- **Pull connections:** edit the access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access).
- **Legacy Buyers:** also update the credentials in your own system. Editing the access in My Connections is not enough.
