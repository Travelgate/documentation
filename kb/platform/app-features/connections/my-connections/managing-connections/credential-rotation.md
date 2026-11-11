---
sidebar_position: 8
description: Best practices for handling and rotating the credentials stored in your Travelgate accesses, including recommended cadence and responsibilities by connection model and organization type.
---

# Credential Security and Rotation Best Practices

Credentials give direct access to your connections, so protecting them is essential for Buyers and Sellers alike. This article explains how to handle credentials securely, how often to rotate the ones stored in your [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access), and who is responsible for each rotation.


## Rotation Cadence

- Rotate credentials **at least once a year**.
- Rotate **immediately** if you suspect a compromise, if a credential was exposed in logs or chat, or if a team member leaves the project.

:::info
This article covers the credentials stored in your accesses. To manage your Travelgate API keys, see [Manage API Keys](/kb/platform/app-features/account-settings/api-keys/manage-api-keys).
:::

## Who Rotates the Credentials

### Quick Summary

| Role | Connection type | Who rotates the credential | What you need to do |
| --- | --- | --- | --- |
| **Buyer** | **Legacy Buyer + Push Supplier** | **Travelgate** | No action required on your side beyond checking the updated flow if needed. |
| **Buyer** | **Legacy Buyer + Pull or Push Hybrid Supplier** | **Buyer** | Rotate the credential in your own system with the new one provided by the Seller. |
| **Buyer** | **HotelX Buyer + Push Supplier** | **Travelgate** | No action required. Travelgate handles it transparently. |
| **Buyer** | **HotelX Buyer + Pull or Push Hybrid Supplier** | **Buyer or Seller** | You can request the Seller to directly update it in MyConnections or they can share the new credentials with you and you can do the change in MyConnections. |
| **Seller** | **Push Supplier** | **Travelgate** | No action required from you or the Buyer. |
| **Seller** | **Pull / Push Hybrid Supplier** | **Seller** | Rotate the credential in your own system and in My Connections. If the Buyer uses the Legacy API, also share the new value securely so they can update their integration. |

### If you are a Buyer Legacy

- **If the connection is with a Supplier Push:** Travelgate rotates the credential internally in the push flow and notifies you if a sync is required.
- **If the connection is with a Pull or Push Hybrid Supplier:** the credentials are included in your request payload, so you must rotate them in your own system. The Seller must share the new credentials with you, and you must update the value in the integration code or configuration that sends the Legacy request.
- **Important:** a rotation is not complete just because the access was updated in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access). In Legacy integrations, as a Buyer, you must also update the secret in your own system.

### If you are a Buyer HotelX

- **If the connection is with a Push Supplier:** you do not need to do anything. Travelgate rotates the credential stored in the access and the change is transparent for you.
- **If the connection is with a Pull or Push Hybrid Supplier:** the credential is stored in the Travelgate access, so you must update the access in My Connections. The Seller may rotate it by its own in MyConnections, or they may provide the new credentials so you can update the access yourself.
- **Important:** for HotelX, the secret is stored in the Travelgate access and is not embedded in the request. That means the credential change is made in Travelgate, not in the request payload itself.

### If you are a Seller

- **If your integration is Push:** neither you nor the Buyer need to rotate anything manually. Travelgate manages the credential rotation for the push flow.
- **If your integration is Pull or Push Hybrid:** you must rotate the credentials on your side and update the corresponding access in My Connections. **Important exception:** if the counterparty is a Buyer using the Legacy API and you change the credential on your side, you must also share the new value with that Buyer so they can update the corresponding credential in their Travelgate integration as well.

### Detailed explanation: Legacy vs HotelX

- **Legacy Buyer API:** the actual credentials are usually sent in the request, so the Buyer must update them in its own system as well as in the Travelgate configuration when required.
- **HotelX Buyer API:** the credential is stored as an access in Travelgate, so updating the access in My Connections is sufficient. The request itself does not carry the secret.

## How to Update a Rotated Credential

- **HotelX access stored in Travelgate:** update the credential in the relevant access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access).
- **Legacy Buyer integration:** Buyer must also update the credential in its own system and in the relevant request configuration. Editing the access in My Connections alone is not enough when the credentials are embedded in the request payload.


## Best Practices for a Safe Rotation

Follow this sequence whenever you rotate a credential:

1. **Confirm ownership.** Identify who owns the secret and which access or system it belongs to before generating a replacement.
2. **Generate a fresh secret.** Never reuse an old password or API key. Create a new credential with the correct scope for the relevant environment.
3. **Validate in a controlled window.** Do not rotate credentials without validating the receiving system. A replacement secret that was never tested can create a silent outage or block production traffic unexpectedly.
4. **Keep the old credential active only briefly.** Leave a short overlap window only when needed for zero-downtime migration, and remove the old secret as soon as validation is complete.


## Recommendations On How To Handle Credentials Securely

Never share credentials or passwords through any of the following channels:

- **Email.** Use the HotelX Access Code instead: it identifies the access without exposing the underlying credentials.
- **Chat.** Instant messaging and chat tools are not a secure channel for secrets.
- **Logs, traces or Legacy requests.** Do not include credentials or passwords in logs, traces or Legacy Pull Buyers API requests that you send to Partners.

Store credentials in a secure secret manager or an approved internal vault, not in source code, spreadsheets, shared documents, or ticket comments. 

:::tip
If a credential has been shared through any of these channels, treat it as compromised and [rotate it immediately](#rotation-cadence).
:::
