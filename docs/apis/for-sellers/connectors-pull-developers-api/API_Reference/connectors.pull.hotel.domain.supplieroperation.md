# SupplierOperation

Namespace: Connectors.Pull.Hotel.Domain

Represents the various operations that can be performed by a hotel supplier.

```csharp
public enum SupplierOperation
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [SupplierOperation](./connectors.pull.hotel.domain.supplieroperation)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

## Fields

| Name | Value | Description |
| --- | --: | --- |
| NoOperation | -1 | Indicates no operation is to be performed. |
| Search | 0 | Represents a search operation for hotel availability. |
| Quote | 1 | Represents a quote operation to get pricing details. |
| Book | 2 | Represents a booking operation to reserve a hotel room. |
| Cancel | 3 | Represents a cancellation operation for an existing booking. |
| CheckBookingsByReference | 4 | Represents an operation to check bookings by a reference number. |
| CheckBookingsByDate | 5 | Represents an operation to check bookings by a specific date. |
| AmendBookingPaxesSimulate | 6 | Represents a simulation of amending passenger details in a booking. |
| AmendBookingPaxes | 7 | Represents an operation to amend passenger details in a booking. |
| AmendBookingDatesSimulate | 8 | Represents a simulation of amending booking dates. |
| AmendBookingDates | 9 | Represents an operation to amend booking dates. |
| AmendBookingRemarksSimulate | 10 | Represents a simulation of amending booking remarks. |
| AmendBookingRemarks | 11 | Represents an operation to amend booking remarks. |
| AmendBookingBoardSimulate | 12 | Represents a simulation of amending the board type in a booking. |
| AmendBookingBoard | 13 | Represents an operation to amend the board type in a booking. |
| AmendBookingRoomSimulate | 14 | Represents a simulation of amending the room type in a booking. |
| AmendBookingRoom | 15 | Represents an operation to amend the room type in a booking. |
