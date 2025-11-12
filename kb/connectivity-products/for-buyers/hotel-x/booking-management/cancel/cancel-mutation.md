---
sidebar_position: 2
---

# Cancel Mutation

You can use the Hotel-X Cancel Mutation to easily cancel a booking made through Travelgate.

## How Can I Cancel a Booking?

You have two options to cancel a reservation:

1. Using the **booking reference**.
2. Using the **bookingID**.

## What Information Can I Expect in the Cancel Response?

The information returned in the Cancel response may vary between Sellers. Please refer to our API Reference to include the [fields](/api/types/objects/hotel-cancel-detail) relevant to your needs. Additionally, check the Sellers' [Metadata](/kb/connectivity-products/for-buyers/hotel-x/content/metadata) for details on their specifications and data returned.

```json
type HotelCancelDetail {
  reference: Reference
  cancelReference: String
  status: BookStatusType
  price: Price
  booking: HotelBookingDetail
  paymentInfo: GeneratedPaymentInfo
}
```

**Some of the fields returned after a booking is canceled include:**

- **Booking status**
- **Reference**
- **Price**
- **Holder**

## How Are Cancellation Costs Calculated and Displayed?

Depending on the Seller’s specifications, cancellation costs can be calculated using three different penalty types. It is important to note that a booking may have more than one penalty type associated with it.

- **NIGHTS:** Indicates the number of nights to be penalized.
- **PERCENT:** Specifies the percentage to pay based on the option price (values between 0 and 100).
- **IMPORT:** Provides the exact amount payable.

:::warning Important  
- Travelgate does *not* process reservations or cancellations on behalf of our Partners. These actions must be handled directly by the Partner.  
- For seamless billing, **all cancellations should be processed through our API.**  

If you encounter any issues, feel free to contact our [Customer Support team](https://app.travelgate.com/support) for assistance. Additionally, please remember to cancel any test bookings with Sellers and verify that these bookings are refundable.  
:::

:::tip
Don't forget to check our [Hotel-X API Playground](/playground) and [Documentation](/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel) for further information on Cancel Mutation. Interested in learning more about cancellation penalties? Explore our in-depth [articles](/kb/faqs/faqs-cancel-policies/deadline-cases) on the topic!🚀
:::

