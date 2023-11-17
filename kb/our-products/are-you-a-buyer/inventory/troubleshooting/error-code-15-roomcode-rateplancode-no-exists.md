---
sidebar_position: 4
---

# Error code 15 - RoomCode or RateplanCode no exists in hotel

### What does a 15 error code mean?💡
When Channel Managers encounter a "code 15" error stating "RoomCode or RateplanCode does not exist in the hotel xxx" while loading a product into the Inventory, it means that the setup has been modified without informing the Channel. As a result, they are attempting to load a product for a room or rateplan that does not actually exist.

```
<Errors>
  <Error Language="en" ShortText="Invalid id" Code="15">RoomCode 'STD' or RateplanCode 'RO' no exists in hotel xxx.</Error>
</Errors>
```

### What can I do if I receive a 15 error code in my RS?
To address this issue, you should follow the following steps:

1. Examine your setup and verify if the roomCode or rateplanCode exists.
1. If the roomCode or rateplanCode is not found, contact the Channel Manager and request them to remap the roomCode or rateplanCode.
1. Once the remapping is done, the Channel Manager should be able to load the product without encountering any errors.