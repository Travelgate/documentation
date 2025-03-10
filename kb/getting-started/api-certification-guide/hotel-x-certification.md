---
sidebar_position: 2
---

# Hotel-X Certification

### When to Apply
You should apply once you've completed implementing the relevant methods.

### What Information Will We Check?
The certification aims to verify that the Hotel-X API user makes requests correctly. This is done by reviewing request and response logs for the following methods:
1. Content: Hotels Query request and response.
2. Booking Flow:
   1. Search Query request and response.
   2. Quote Query request and response.
   3. Book Mutation request and response.
3. Booking Management: Cancellation Mutation request and response.

For the Booking Flow, we have three possible cases:
1. C1: Refundable Option.
2. C2: Non-Refundable Option.
3. C3: Direct Payment Option.

Travelgate has implemented an automated certification system to ensure the key points of the methods are correctly covered according to the Hotel-X Pull Buyers API. This system requires the certification files to be **uploaded in a specific name and format**: the format should be “.json”and the name should indicate the corresponding certification.

The following table outlines the names corresponding to each part of the certification process:

| Method                       | Request                  | Response              |
| ---------------------------- | ------------------------ | --------------------- |
| Content > hotels RQ and RS   | No required              | rs_hotels.json        |
| C1 Booking flow > search RQ and RS | rq_search_rf.json     | rs_search_rf.json     |
| C2 Booking flow > search RQ and RS | rq_search_nrf.json    | rs_search_nrf.json    |
| C3 Booking flow > search RQ and RS | rq_search_direct.json | rs_search_direct.json |
| C1 Booking flow > quote RQ and RS  | rq_quote_rf.json      | rs_quote_rf.json      |
| C2 Booking flow > quote RQ and RS  | rq_quote_nrf.json     | rs_quote_nrf.json     |
| C3 Booking flow > quote RQ and RS  | rq_quote_direct.json  | rs_quote_direct.json  |
| C1 Booking flow > book RQ and RS   | rq_book_rf.json       | rs_book_rf.json       |
| C2 Booking flow > book RQ and RS   | rq_book_nrf.json      | rs_book_nrf.json      |
| C3 Booking flow > book RQ and RS   | rq_book_direct.json   | rs_book_direct.json   |
| Booking management > cancelation RQ and RS | rq_cancel_rf.json | rs_cancel_rf.json     |

### Example of Query Body in JSON Format:

```js
{
    "query" : "query ($criteriaQuote: HotelCriteriaQuoteInput!, $settings: HotelSettingsInput) {\n  hotelX {\n    quote(criteria: $criteriaQuote, settings: $settings) {\n      warnings{\n        code\n        type\n        description\n      }\n      errors {\n        code\n        description\n        type\n      }\n      auditData{\n        transactions{\n          request\n          response\n          timeStamp\n        }\n        timeStamp\n        processTime\n      }\n      optionQuote {\n        optionRefId\n        status\n        price {\n          currency\n          binding\n          net\n          gross\n          markups {\n            channel\n            currency\n            binding\n            net\n            gross\n            exchange {\n              currency\n              rate\n            }\n            rules {\n              id\n              name\n              type\n              value\n            }\n          }\n        }\n        cancelPolicy {\n          refundable\n          cancelPenalties {\n            deadline\n            hoursBefore\n            penaltyType\n            currency\n            value\n          }\n        }\n        remarks\n         surcharges {\n          chargeType\n          description\n          price {\n            currency\n            binding\n            net\n            gross\n            exchange {\n              currency\n              rate\n            }\n            markups {\n              channel\n              currency\n              binding\n              gross\n              exchange {\n                currency\n                rate\n              }\n            }\n          }\n          mandatory\n          code\n        }\n        searchPrice{\n          currency\n          net\n          gross\n          binding\n        }\n        cardTypes\n        rooms{\n          occupancyRefId\n          legacyRoomId\n          code\n          supplierCode\n          description\n          features {\n            code\n          }\n        }\n      }\n    }\n  }\n}\n",
    "variables" : {
        "criteriaQuote" : {
            "optionRefId" : "13[%!03!~|3[%@231215!~|231216!~|1!~|1!~|0!~|ES!~|CN!~|en!~|EUR!~|0!~|4550!~|1!~|1!~|0!~|0!~|04121122!~|BAR[%@BAR!~|80[%@0[%@false[%@EUR[%@[%@0[%@10!~|1|30|1|2023-12-15|1|4132467|4132468|1|11|0!~|2269[%!2269!~|30!~|!~|Double Standard!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@16/12/2023!~|OK!~|Sith!~|0!~|",
            "language" : "es"
        },
        "settings" : {
            "context" : "HOTELTEST",
            "testMode" : true,
            "client" : "client1",
            "timeout" : 12500,
            "auditTransactions" : false
        }
    }
}
```

### Is It Necessary to Complete All Certification Cases?
No, you only need to complete the cases relevant to your business. However, Case 1 (Refundable Option) is always required.

### What Credentials and Connections Should I Use for Certification?
It is recommended to always use the [demo connections provided](/kb/connectivity-products/for-buyers/hotel-x/hotel-x-credentials) (Travelgate test and Smyrooms test) along with your client and API Key.

### Which Hotels Can I Use for Certification Cases?
For certification cases, you can use the following hotels:
- Hotels 1, 2, and 23 for Travelgate test supplier.
- Hotel 27 for Smyrooms test supplier.

Those hotels are recommended, but remember that any hotel showing availability in Travelgate and Smyrooms test suppliers is valid.