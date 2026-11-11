---
sidebar_position: 8
description: Best practices for protecting the credentials used in your Travelgate integrations, keeping them aligned across systems, and rotating them when necessary.
---

# Credential Security Best Practices

Credentials give direct access to your integrations, so protecting them is essential for Buyers and Sellers alike. This guide outlines recommended practices for handling the credentials associated with your [accesses](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials#access), keeping them aligned across systems, and responding quickly when a secret may have been exposed.

:::info
This article covers the credentials stored in your accesses. To manage your Travelgate API keys, see [Manage API Keys](/kb/platform/app-features/account-settings/api-keys/manage-api-keys).
:::

## Security Recommendations

Use these practices as a default baseline for every integration:

- **Store credentials in a secure secret manager.** Keep them out of source code, spreadsheets, shared documents, ticket comments, and personal notes.
- **Use unique credentials per environment or access whenever possible.** This limits the scope of exposure if one secret is compromised.
- **Rotate credentials periodically.** Even when there is no sign of compromise, rotating secrets on a regular schedule—such as once a year—is a recommended security practice for most integrations.
- **Avoid sharing secrets in insecure channels.** Never send credentials by email, chat, or ticket comments. Use an access code or secure internal workflow instead.
- **Reduce exposure in logs and traces.** Do not include credentials or passwords in logs, traces, or request samples. If a request must be shared for troubleshooting, redact secrets before sending it.
- **Keep systems aligned.** If one side stores a credential in a Travelgate access and another stores it in its own integration layer, both must be kept in sync.
- **Use least privilege.** Only grant the permissions needed for the specific integration or connection.

Never share credentials or passwords through any of the following channels:

- **Email.** Use the HotelX Access Code instead: it identifies the access without exposing the underlying credentials.
- **Chat.** Instant messaging and chat tools are not a secure channel for secrets.
- **Logs, traces or shared request samples.** Do not include credentials or passwords in logs or traces, and redact them from Legacy Pull Buyers API request samples before sharing them with Partners.

:::tip
If a credential has been shared through any of these channels, treat it as compromised and rotate it as soon as possible.
:::

## How to Rotate Credentials in Travelgate

The correct rotation flow depends on where the credential is stored and how the integration authenticates.

- **If the credential is stored in a HotelX access in Travelgate:** update the credential in the relevant access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access).
- **If the connection uses Legacy Buyer requests:** update the credential in the system that sends the request, as well as in the Travelgate configuration when required. Editing the access in My Connections alone is not enough when the credentials are embedded in the request payload.
- **If a Partner rotates a credential on their side:** share the new value securely with the other party so both integrations remain aligned.
- **After any rotation:** validate the connection, confirm the correct access is active, and remove any old values from local scripts, shared notes, or logs.

### 3.1. Who Rotates the Credentials

### Quick Summary

| Role | Connection type | Typical responsibility | Recommended action |
| --- | --- | --- | --- |
| **Buyer** | **Legacy Buyer + Push Supplier** | **Travelgate** | No separate Buyer-side rotation is usually required beyond validating the updated flow. |
| **Buyer** | **Legacy Buyer + Pull / Push Hybrid** | **Buyer** | Rotate the credential in your own system, keep the request configuration aligned with the new value, and also update the credentials in the access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access). |
| **Buyer** | **HotelX Buyer + Push Supplier** | **Travelgate** | No action is typically required in the Buyer's system. |
| **Buyer** | **HotelX Buyer + Pull / Push Hybrid** | **Buyer or Seller** | Update the relevant access in My Connections, or request the other party to do it and share the new value securely when required. |
| **Seller** | **Push** | **Travelgate** | No manual credential rotation is usually required from the Seller or Buyer side. |
| **Seller** | **Pull / Push Hybrid** | **Seller** | Rotate the credential in your own system and keep the corresponding access updated. If the counterparty uses Legacy, share the new value securely so both sides remain aligned. |

### Buyer connected with Legacy API

- **With a Supplier Push connection:** Travelgate typically manages the credential in the push flow, so the Buyer does not normally need to rotate it manually.
- **With a Pull or Push Hybrid connection:** the credentials are usually included in the request payload, so the Buyer should rotate them in its own system and keep the request configuration aligned with the new value. The Buyer must also update the credentials in the access in My Connections.
- **As a practical rule:** updating the access in [My Connections](/kb/platform/app-features/connections/my-connections/managing-connections/edit-access) is not always enough for Legacy integrations if the credential is also stored in the system that sends the request.

### Buyer connected with HotelX API

- **With a Push connection:** the credential is managed in the Travelgate access and usually does not require any manual action from the Buyer.
- **With a Pull or Push Hybrid connection:** the credential is typically stored as a Travelgate access, so the access should be updated in My Connections. The other party may also rotate it on their side and share the new value securely if needed.
- **As a practical rule:** in HotelX, the secret is usually stored as an access in Travelgate rather than embedded in the request payload, so the change is generally made in My Connections.

### Seller

- **With a Push integration:** Travelgate generally handles the credential rotation, so manual action is usually not required from either party.
- **With a Pull or Push Hybrid integration:** the Seller should rotate the credential in its own system and keep the corresponding access updated in My Connections.
- **If the counterparty uses Legacy:** the new value should be shared securely with them so both sides remain aligned.

### 3.2. Legacy vs HotelX

- **Legacy Buyer API:** the credential is sent in the request, so both the Buyer system and the Travelgate access configuration must stay aligned.
- **HotelX Buyer API:** the credential is  stored in the Travelgate access, so updating that access is sufficient.

### 3.3. Best Practices for Safe Rotation

There is no single fixed renewal deadline that fits every connection, but you should rotate a credential as soon as any of the following happens:

- a secret has been shared in an unsafe channel
- a team member leaves the project or changes responsibilities
- a credential may have been exposed in logs, traces, request samples, or messages
- the credential has not been rotated for a long time and the integration is high risk or highly exposed
- a security review or incident response process identifies the secret as potentially compromised

When you do rotate a credential:

1. **Confirm ownership.** Identify who owns the secret and which access or system it belongs to before generating a replacement.
2. **Generate a fresh secret.** Never reuse an old password or API key. Create a new credential with the correct scope for the relevant environment.
3. **Validate in a controlled window.** Do not rotate credentials without validating the receiving system. A replacement secret that was never tested can create a silent outage or block production traffic unexpectedly.
4. **Keep the old credential active only briefly.** Leave a short overlap window only when needed for zero-downtime migration, and remove the old secret as soon as validation is complete.
5. **Document the change.** Record the date, owner, and access involved so future audits are easier to manage.
