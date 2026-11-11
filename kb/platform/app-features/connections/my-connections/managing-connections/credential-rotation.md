---
sidebar_position: 8
description: Best practices for handling and rotating the credentials stored in your Travelgate accesses, including recommended cadence and responsibilities by connection model and organization type.
---

# Credential Security and Rotation Best Practices

Credentials give direct access to your connections, so protecting them is essential for Buyers and Sellers alike. This article explains how to handle credentials securely, how often to rotate the ones stored in your [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access), and who is responsible for each rotation.

## Handle Credentials Securely

Never share credentials or passwords through any of the following channels:

- **Email.** Use the HotelX Access Code instead: it identifies the access without exposing the underlying credentials.
- **Chat.** Instant messaging and chat tools are not a secure channel for secrets.
- **Logs, traces or Legacy requests.** Do not include credentials or passwords in logs, traces or Legacy Pull Buyers API requests.

:::tip
If a credential has been shared through any of these channels, treat it as compromised and [rotate it immediately](#rotation-cadence).
:::

## Rotation Cadence

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
