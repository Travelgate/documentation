---
sidebar_position: 3
---

# HotelRatePlanNotif

The HotelRatePlanNotif message contains information about rate prices and supplements. No rate information will be returned except Code, currency and status.

## Frequently asked questions

<details>
    <summary>For the standard occupancy calculation, should the data from `Quantities` `StandardNumBeds` or `BaseByGuestAmt` `NumberOfGuests` be consumed?</summary>
    <div>
        <div>If this is set as true, the type of Min/Max LOS is on arrival for that specific day. For this type, the values for Min/Max LOS on arrival, only apply if it is applied to the check-in day. If this is set as false, it’s a normal Min/Max LOS.</div>
    </div>
</details>

<details>
    <summary>Both tax `ChargeFrequency` and `ChargeUnit` are optional bits of information. So, what happens if they are not returned in a push message? Is need to re-calculate the price from `HotelRatePlanNotif` (if have tax elements are returned), or is it possible to assume `AmountAfterTax` in the final price?</summary>
    <div>
        <div>If these elements are not returned, then a fixed amount will be returned as a tax if you have set it up in the SetUp part of the extranet and depending on the type of tax you have set up. You always have to calculate the price that is returned in this tag with the tax.</div>
    </div>
</details>

<details>
    <summary>If I set up an additional tax (i.e. per pax and per night), should I add up or subtract it from `AmountAfterTax` attribute?</summary>
    <div>
        <div>The `AmountAfterTax` attribute inside the `RatePlanNotify` does not include the taxes you will set up (it might include any taxes the channel has loaded on their end if they have done so). The `AmountAfterTax` at the time of booking (the Reservation RS logs) will include the taxes indicated by you.</div>
    </div>
</details>

<details>
    <summary>Referring to the RatePlan message, there are `Supplement`. Understanding price is for meal basis, should I require calculation to add with `AmountAfterTax`? The purpose of this is an extra cost for supplement in case there are `AdditionalGuest` applied.</summary>
    <div>
        <div>The Supplement tag is for MealPlans, not for additional paxes. The price indicated in there, shows the price of the supplement.</div>
    </div>
</details>

<details>
    <summary>What happens if more than one price type is loaded for the same day/range of days and for the same room/rooms?</summary>
    <div>
        <div>All price types can be loaded at the same time (or at different times without overwriting). This isn’t usually the case and almost never is there more than 1 price type loaded at a time. If all price types are loaded at the same time, or only two are loaded at the same time, at the time of the Availability search the price that is returned is the cheapest one.</div>
    </div>
</details>