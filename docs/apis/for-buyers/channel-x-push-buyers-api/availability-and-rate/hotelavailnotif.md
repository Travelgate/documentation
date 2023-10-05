---
sidebar_position: 2
---

# HotelAvailNotif

The HotelAvailNotif message contains information about rate availability and allotment conditions. No rate information will be returned except code.

## Frequently asked questions

<details>
    <summary>What does `LengthsOfStay` `ArrivalDateBased` mean? What’s different between the true and false values?</summary>
    <div>
        <div>If this is set as true, the type of Min/Max LOS is on arrival for that specific day. For this type, the values for Min/Max LOS on arrival, only apply if it is applied to the check-in day. If this is set as false, it’s a normal Min/Max LOS.</div>
    </div>
</details>

<details>
    <summary>Does Travelgate have a default maxmimum nights restriction (Ex. max 30 days) if `HotelAvailNotif` does not provide max LOS information for that rate?</summary>
    <div>
        <div>Travelgate does not have any restriction on default maximum nights.</div>
    </div>
</details>

<details>
    <summary>What does `ArrivalClose`, `DepartureClose`, `Master` mean?</summary>
    <div>
        <div>The Closed On Arrival means that the check-in day cannot be the same day as the one that has Closed On Arrival applied to it, but this day can be inside the Availability search range. The Closed On Departure means that the check-out day cannot be the same day as the one that has Closed On Departure applied, but this day can be in the Availability search range. Closed Master means that the hotel is closed that day. The Closed Master means that in the indicated dates, none of the days can be a check-in day, check-out day or a day inside the range of the search.</div>
    </div>
</details>