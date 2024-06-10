---
sidebar_position: 10
---

# Option Identifiers (optionRefId)

### What is the id (optionRefId) of an option?💡
The "id" or "optionRefId" serves as a unique identifier for each option. It is important not to modify this identifier for any reason, as it is used extensively throughout the Booking Flow.

To ensure a seamless booking experience, it is essential to set the "id" or "optionRefId" of the previous Query response in your subsequent request:

* You should use the **"id" from Search response** in your Quote request.
* You should use the **"optionRefId" from Quote response** in your Book request.

### What is the lifetime of an OptionRefId?🕔

The lifetime of an OptionRefId does not have any specific time limit usage restrictions on TravelgateX side. However, it's important to note that **restrictions may vary depending on the Seller**. For instance, there might be limitations between methods, such as a maximum time gap of 5 minutes between Search and Quote.


### If I encounter an error in the Hotel-X QuoteRS, can I continue using the same Search "id" from Search?⚠️

In case you encounter an error in the Hotel-X Quote response, you should initiate a new Search request and restart the Booking Flow process. This ensures the generation of a fresh "id" for accurate identification.

### Is it possible to use the OptionRefId to implement any logic in my API?🛠️

You should not use the OptionRefId to implement any logic in your API. The OptionRefId is a unique identifier for an option and may differ among connections. It's best to avoid relying on it for implementing specific logic in your system.

### But what if I'm still using TravelgateX Hotel Buyers Legacy API?
If you are still connected to our Legacy API here's what you need to do:
* You will receive a tag called Parameters in Availability response. This tag and its content are crucial in order for the integration to work properly.
* Copy the parameters of the option selected from the Availability response, including the entire tag as it is returned.
* Paste the copied Parameters tag in the body of your Valuation request.
* Run the Valuation request method - If the Valuation is successful, you will receive the same Parameters tag in the ValuationRS. However, this time the content will be different.
* Follow the same steps as in the Availability phase and paste the Parameters tag from your Valuation response into the body of your Reservation request.

