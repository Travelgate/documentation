---
sidebar_position: 8
description: Best practices for handling and rotating the credentials stored in your Travelgate accesses, including recommended cadence and responsibilities by connection model and organization type.
---

# Credential Security and Rotation Best Practices

Credentials give direct access to your connections, so protecting them is essential for Buyers and Sellers alike. These are recommended practices for handling the credentials associated with your [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access), keeping them aligned across systems, and rotating them before they become a security risk.

## Rotation Cadence

- Rotate credentials **at least once a year**.
- Rotate **immediately** if you suspect a compromise, if a credential was exposed in logs or chat, or if a team member leaves the project.

:::info
This article covers the credentials stored in your accesses. To manage your Travelgate API keys, see [Manage API Keys](/kb/platform/app-features/account-settings/api-keys/manage-api-keys).
:::

## Who Rotates the Credentials

### Quick Summary

| Role | Connection type | Typical responsibility | Recommended action |
| --- | --- | --- | --- |
| **Buyer** | **Legacy Buyer + Push Supplier** | **Travelgate** | No separate Buyer-side rotation is usually required beyond validating the updated flow. |
| **Buyer** | **Legacy Buyer + Pull / Push Hybrid** | **Buyer** | Rotate the credential in your own system, keep the request configuration aligned with the new value, and also update the credentials in the access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access). |
| **Buyer** | **HotelX Buyer + Push Supplier** | **Travelgate** | No action is typically required in the Buyer's system. |
| **Buyer** | **HotelX Buyer + Pull / Push Hybrid** | **Buyer or Seller** | Update the relevant access in My Connections, or request the other party to do it and share the new value securely when required. |
| **Seller** | **Push** | **Travelgate** | No manual credential rotation is usually required from the Seller or Buyer side. |
| **Seller** | **Pull / Push Hybrid** | **Seller** | Rotate the credential in your own system and keep the corresponding access updated. If the counterparty uses Legacy, share the new value securely so both sides remain aligned. |


### Seller

- **With a Push integration:** Travelgate generally handles the credential rotation, so manual action is usually not required from either party.
- **With a Pull or Push Hybrid integration:** the Seller should rotate the credential in its own system and keep the corresponding access updated in My Connections. **If the Buyer uses Legacy API:** the new value should be shared securely with them so both sides remain aligned.

### Buyer connected with Legacy API

- **With a Supplier Push connection:** Travelgate typically manages the credential in the push flow, so the Buyer does not normally need to rotate it manually.
- **With a Pull or Push Hybrid connection:** the credentials are usually included in the request payload, so the Buyer should rotate them in its own system and keep the request configuration aligned with the new value. The Buyer must also update the credentials in the access in My Connections.
- **As a practical rule:** updating the access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access) is not always enough for Legacy integrations if the credential is also stored in the system that sends the request.

### Buyer connected with HotelX API

- **With a Push connection:** the credential is managed in the Travelgate access and usually does not require any manual action from the Buyer.
- **With a Pull or Push Hybrid connection:** the credential is typically stored as a Travelgate access, so the access should be updated in My Connections. The other party may also rotate it on their side and share the new value securely if needed.
- **As a practical rule:** in HotelX, the secret is usually stored as an access in Travelgate rather than embedded in the request payload, so the change is generally made in My Connections.


### Legacy vs HotelX in practice

- **Buyer Legacy API:** the credential is commonly sent in the request, so both the client system and the Travelgate configuration must stay aligned.
- **Buyer HotelX API:** the credential is usually stored in the Travelgate access, so updating that access is sufficient.

## How to Update a Rotated Credential

- **HotelX access stored in Travelgate:** update the credential in the relevant access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access).
- **Legacy Buyer integration:** Buyer must also update the credential in its own system and in the relevant request configuration. Editing the access in My Connections alone is not enough when the credentials are embedded in the request payload.


## Best Practices for a Safe Rotation

Follow this sequence whenever you rotate a credential:

1. **Confirm ownership.** Identify who owns the secret and which access or system it belongs to before generating a replacement.
2. **Generate a fresh secret.** Never reuse an old password or API key. Create a new credential with the correct scope for the relevant environment.
3. **Validate in a controlled window.** Do not rotate credentials without validating the receiving system. A replacement secret that was never tested can create a silent outage or block production traffic unexpectedly.
4. **Keep the old credential active only briefly.** Leave a short overlap window only when needed for zero-downtime migration, and remove the old secret as soon as validation is complete.

### If You Suspect a Compromise

1. Rotate and revoke the old credential right away, without an overlap window. For Inventory (Push) accesses, [submit an urgent case](/kb/platform/support-portal/how-to-submit-case) through the Support Portal.
2. Confirm in the [Logging App](/kb/platform/app-features/monitoring-tools/logging/logging-details) that traffic uses the new credential.
3. Review recent logs for activity you don't recognize.
4. Rotate any other access or system that shares the same password.

## Recommendations On How To Handle Credentials Securely

Never share credentials or passwords through any of the following channels:

- **Email.** Use the HotelX Access Code instead: it identifies the access without exposing the underlying credentials.
- **Chat.** Instant messaging and chat tools are not a secure channel for secrets.
- **Logs, traces or shared request samples.** Do not include credentials or passwords in logs or traces, and redact them from Legacy Pull Buyers API request samples before sharing them with Partners.

Store credentials in a secure secret manager or an approved internal vault, not in source code, spreadsheets, shared documents, or ticket comments. 

Limit credential visibility to the users who need it and review access when people change role or leave. Also check places where secrets tend to leak: repositories, screenshots of My Connections or the Logging App, and spreadsheets or tickets.

:::tip
If a credential has been shared through any of these channels, treat it as compromised and [rotate it immediately](#rotation-cadence).
:::
