---
sidebar_position: 25
---

# Connector Errors

When a Buyer request reaches a Seller through a Connector, the Connector trace can contain an
`AdviseMessage`. The Buyer API response exposes the same situation through a numeric error `type`
in HotelX or a Legacy error `code`. Use this page to translate Connector messages into the Buyer
API errors you receive and to identify the supplier details needed for troubleshooting.

## How to Read a Connector Message

Connector messages use these fields:

| Field           | Meaning                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| `code`          | The readable Connector message **name**, such as `SupplierTimeout`.         |
| `id`            | The numeric Connector identifier, such as `31104`.                      |
| `level`         | `Error`, `Warning`, or `Info`.                                          |
| `description`   | The standard human-readable explanation.                                |
| `legacyId`      | The corresponding Legacy error `code` and HotelX error `type`.          |
| `external`      | Supplier-specific details, when available.                              |
| `correlationId` | Identifier used to correlate the message with the operation or request. |

For example, `ItemNotAvailable` has Connector `id` `11301` and maps to Buyer error `301`:

```json
{
  "code": "ItemNotAvailable",
  "description": "Option not found in quote",
  "id": 11301,
  "legacyId": 301,
  "level": "Error",
  "external": {
    "httpStatusCode": 200,
    "message": "Option not found in quote: Parameters not found"
  }
}
```

## Connector-to-Buyer Error Mapping

Use the Connector `legacyId` to find the corresponding Buyer API error. For details and
resolution steps for a Buyer error, see the [Hotel Buyers API errors and warnings](/kb/connectivity-products/for-buyers/errors-and-warnings/overview).

| Connector `id` | Connector `code`                  | `level`   | `legacyId` | `description`                                          | `external`      |
| -------------: | --------------------------------- | ------- | ---------------------------------------: | ------------------------------------------------ | ------------- |
|          11102 | `SupplierError`                   | Error   |                                      102 | Supplier error                                   | Required      |
|          11207 | `SupplierBadRequest`              | Error   |                                      102 | Bad request to supplier                          | Optional      |
|          11205 | `SupplierSessionExpired`          | Error   |                                      102 | Supplier session expired                         | Optional      |
|          11206 | `SupplierResponseNotSerializable` | Error   |                                      102 | Supplier request or response cannot be processed | Optional      |
|          11304 | `PriceChanged`                    | Error   |                                      102 | Price changed                                    | Optional      |
|          11305 | `BookingNotFound`                 | Error   |                                      102 | Booking not found                                | Optional      |
|          12401 | `Unauthorized`                    | Error   |                                      102 | Unauthorized                                     | Optional      |
|          11204 | `SupplierNoResultsFound`          | Warning |                                      204 | No results found                                 | Optional      |
|          12207 | `BadRequest`                      | Error   |                                      207 | Request not accepted by supplier                 | Optional      |
|          12501 | `NotImplemented`                  | Info    |                                      207 | Operation not implemented                        | Not included  |
|          11301 | `ItemNotAvailable`                | Error   |                                      301 | Option not found in quote                        | Optional      |
|          11302 | `ItemNotFoundInContent`           | Error   |                                      302 | Hotel not found                                  | Not included  |
|          11303 | `SupplierBookingNotConfirmed`     | Error   |                                      303 | Booking not confirmed                            | Optional      |
|          22101 | `InternalError`                   | Error   |                                      101 | Internal error                                   | Optional      |
|          22105 | `ExtraOperationConnectionError`   | Error   |                                      105 | Internal connection error                        | Not included  |
|          22106 | `SupplierResponseMaxSizeExceeded` | Error   |                                      105 | Supplier response exceeded the maximum size      | Optional      |
|          22107 | `MaxOptionsExceeded`              | Error   |                                      101 | Maximum number of options exceeded               | Optional      |
|          31103 | `SupplierTooManyRequests`         | Error   |                                      103 | Too many requests to the supplier                | Required      |
|          31104 | `SupplierTimeout`                 | Error   |                                      104 | Connection timeout with supplier                 | Optional      |
|          31105 | `SupplierConnectionError`         | Error   |                                      105 | Communication error                              | Required      |
|          12106 | `RequestAbortedByClient`          | Error   |                                      106 | Request aborted by client                        | Not included  |
|          12290 | `InternalWarning`                 | Warning |                                        0 | Internal warning                                 | Optional      |
|          11291 | `SupplierWarning`                 | Warning |                                        0 | Supplier warning; check `external` for details   | Required      |

The common Buyer error meanings are:

| Buyer error | Meaning                                                       |
| ----------: | ------------------------------------------------------------- |
|           0 | No error code; used for warnings and informational messages.  |
|         101 | System or internal error                                      |
|         102 | Provider or supplier error                                    |
|         103 | Too many requests                                             |
|         104 | Connection timeout with provider                              |
|         105 | Communication error                                           |
|         106 | Request aborted by client                                     |
|         204 | No results found                                              |
|         207 | Request not accepted by supplier |
|         301 | Option not found in quote                                     |
|         302 | Hotel not found                                               |
|         303 | Booking not confirmed                                         |

## Supplier Details in `external`

The `external` object contains the supplier context behind a message. It can include:

| Field            | Meaning                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `code`           | Supplier-specific response or error code (optional). This is not a Connector code.                                      |
| `message`        | Descriptive, human-readable message returned by, or built from, the supplier response.                                                   |
| `httpStatusCode` | Supplier HTTP status code, such as `200`, `400`, or `500`; it defaults to `200` when no HTTP status applies. |

```json
{
  "code": "E9999.1",
  "message": "Supplier internal error",
  "httpStatusCode": 500
}
```

## Troubleshooting Connector Errors

1. Find the Connector `legacyId` in the Connector trace and use the mapping table to identify
   the Buyer error `type` or Legacy `code`.
2. Read the `description` to understand the standardized result.
3. For supplier-originated messages, inspect `external.message`, `external.code`, and
   `external.httpStatusCode`. These fields contain context that may not appear in the standard
   description.
4. Use the [Buyer error articles](/kb/connectivity-products/for-buyers/errors-and-warnings/overview) for resolution steps.
5. Include the `correlationId`, operation, access or connection, timestamp, Connector `id`, and
   relevant `external` values when contacting [Travelgate Support](https://app.travelgate.com/support).

:::warning
Do not treat the supplier-specific value in `external.code` as a Connector `code` or `legacyId`. Use the standardized Connector-to-Buyer mapping first, then use `external` to diagnose the
supplier response.
:::
