---
sidebar_position: 5
---

# RoomCode or RateplanCode Does Not Exist in Hotel

### What Does an Error Code 15 Mean? 
An Error Code 15 (RoomCode or RateplanCode Does Not Exist in Hotel) occurs when Channel Managers attempt to load a product into the Inventory, but the relevant data cannot be found in the Client's Setup. This typically means that the Setup has been modified without informing the Channel Manager, leading them to attempt loading a product for a room or rate plan that no longer exists.

#### Example Response:
```xml
<Errors>
  <Error Language="en" ShortText="Invalid id" Code="15">RoomCode 'STD' or RateplanCode 'RO' no exists in hotel xxx.</Error>
</Errors>
```

### What Can I Do If I Receive an Error Code 15 in My Response?
To resolve this issue, follow these steps:

1. **Verify Your Setup**
   - Check whether the `roomCode` or `rateplanCode` exists in your Inventory Setup.
2. **Contact the Channel Manager**
   - If the `roomCode` or `rateplanCode` is missing, request the Channel Manager to **remap** your Setup.
3. **Confirm Remapping Completion**
   - Once the remapping is completed, the Channel Manager should be able to load the product without encountering any errors.
