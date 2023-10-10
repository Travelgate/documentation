---
sidebar_position: 2
---

# Booking flow

### Error List

| Code                 | Type             | Description                       | Explanation                                                                                                                                                                                                                                                      |
|----------------------|------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ACCESS_ERROR         | VALIDATION_ERROR | No valid accesses found           | The access is not found or it has no permission, or you are using a test access and you need to add the testMode.                                                                                                                                                |
| MISSING_FIELD        | VALIDATION_ERROR | According to the case             | Some mandatory fields are missing in input                                                                                                                                                                                                                       |
| INTERNAL_ERROR       | API_ERROR        | According to the case             | Covers any unexpected error or errors due to internal service                                                                                                                                                                                                    |
| ALL_PROCESSES_FAILED | PROCESS_ERROR    | See warnings for more information | This occurs when no options are returned for all accesses after applying a plugin (blacklist, filter, mapping code), commission, etc., it may also be caused by a wrong default setting, In the warning node you will find detailed information about the cause. |
| TIMEOUT              | CONNECTION_ERROR | According to the case             | This occurs due to a connection timeout                                                                                                                                                                                                                          |
| REFERENCE_NOT_EXISTS | BOOKING_ERROR    | According to the case             | This occurs when the booking reference provided is not available in the supplier system                                                                                                                                                                          |

### Warning List

There are two types of warnings, Hotel-X warnings and Connection warnings.

#### Hotel-X warnings

| Code                 | Type             | Description           | Explanation                                                                                                                                                                                                         |
|----------------------|------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| WRONG_FIELD          | VALIDATION_ERROR | According to the case | A field or fields in the request are not correct                                                                                                                                                                    |
| INTERNAL_ERROR       | MAPPING_ERROR    | According to the case | Error produced when mapping codes, it usually happens regarding hotel mapping                                                                                                                                       |
| COMMISSION_NOT_FOUND | API_ERROR        | According to the case | This occurs when the options are discarded because the supplier returns options with a negative commission that does not allow the calculation of the net price. You need to upload the commission file to solve it |
| WRONG_FIELD          | PLUGIN_ERROR     | According to the case | It occurs when the input of the plugin is misintroduced or misconstructed                                                                                                                                           |
| BLACKLIST            | PLUGIN_ERROR     | According to the case | It occurs when the hotels or accesses are blacklisted                                                                                                                                                               |

#### Connection warnings

| Code | Description                                                                                                                                                          |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 101  | Unspecified Error (Exception not controlled or not classified as controlled error). This could be caused by an integration error or an unexpected supplier response. |
| 102  | Supplier Error.                                                                                                                                                      |
| 103  | Too many requests to the supplier.                                                                                                                                   |
| 104  | Timeout (Timeout during the execution of an operation (look in the common attribute timeout )).                                                                      |
| 105  | Communication Error.                                                                                                                                                 |
| 204  | Supplier returns 0 results in availability.                                                                                                                          |
| 205  | The Supplier doesn’t accept the distribution RQ.                                                                                                                     |
| 206  | The Supplier doesn’t accept the dates RQ.                                                                                                                            |
| 207  | The Supplier doesn’t accept the request RQ.                                                                                                                          |
| 301  | Option not found in policies.                                                                                                                                        |
| 302  | Hotel Not Found in DescriptiveInfo.                                                                                                                                  |
| 303  | Booking not confirmed in the supplier’s system.                                                                                                                      |