# Option

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents an option for a hotel accommodation in search responses.

```csharp
public class Option
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Option](./connectors.pull.hotel.domain.contracts.search.response.option)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

An option includes details such as pricing, rooms, payment types, and additional parameters. 
 It may also include cancellation policies, promotions, rate rules, and more.

## Properties

### **FormId**

Internal field for form test. Not serialized. DO NOT USE!

```csharp
public string FormId { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Status**

Indicates the availability status of the option.

```csharp
public Status Status { get; set; }
```

#### Property Value

[Status](./connectors.pull.hotel.domain.contracts.common.status)<br />

**Remarks:**

Possible values for [Option.Status](./connectors.pull.hotel.domain.contracts.search.response.option#status):

- - OK: The option is available for sale.
- - RQ: The option is on request and requires confirmation from the supplier.
- - Unknown: The status is undefined or not specified.

### **Price**

The price details associated with the option, including net, gross and minimum selling price.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

### **PaymentTypes**

Specifies the accepted payment types for the option.

```csharp
public IEnumerable<PaymentType> PaymentTypes { get; set; }
```

#### Property Value

[IEnumerable\<PaymentType\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

**Remarks:**

The  enumeration defines how the client can pay for this option:

- - LaterPay: Payment is made directly at the hotel; requires a credit card.
- - MerchantPay: Buyer and seller settle payments periodically; payments are not processed through Travelgate.
- - CardBookingPay: Payment is made using a virtual card at the time of booking.
- - CardCheckInPay: Payment is made using a virtual card at check-in.
- - PayX: Deprecated payment method.

### **Rooms**

The list of rooms included with the option, including type, description, and price.

```csharp
public IEnumerable<Room> Rooms { get; set; }
```

#### Property Value

[IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Parameters**

Parameters for transferring data between operations, such as from `Search` to `Quote` or `Quote` to `Book`.

```csharp
public IEnumerable<Parameter> Parameters { get; set; }
```

#### Property Value

[IEnumerable\<Parameter\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **CancelPolicy**

The cancellation policy associated with the option, detailing penalties and conditions.

```csharp
public OptionCancelPolicy CancelPolicy { get; set; }
```

#### Property Value

[OptionCancelPolicy](./connectors.pull.hotel.domain.contracts.common.optioncancelpolicy)<br />

### **Promotions**

The promotions applied to the option, such as discounts or special offers.

```csharp
public IEnumerable<Promotion> Promotions { get; set; }
```

#### Property Value

[IEnumerable\<Promotion\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **RateRules**

The rate rules for the option, specifying sales restrictions such as "Senior Discount" or "Resident Rate."

```csharp
public IEnumerable<RateRule> RateRules { get; set; }
```

#### Property Value

[IEnumerable\<RateRule\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Remarks**

Additional remarks associated with the option, such as special conditions or information.

```csharp
public IEnumerable<Remark> Remarks { get; set; }
```

#### Property Value

[IEnumerable\<Remark\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Surcharges**

Surcharges applied to the option, such as mandatory fees or taxes.

```csharp
public IEnumerable<Surcharge> Surcharges { get; set; }
```

#### Property Value

[IEnumerable\<Surcharge\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Amenities**

Amenities included with the option, such as "Free Wi-Fi" or "Parking."

```csharp
public IEnumerable<Amenity> Amenities { get; set; }
```

#### Property Value

[IEnumerable\<Amenity\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **Supplements**

Supplements available with the option, such as activity passes.

```csharp
public IEnumerable<Supplement> Supplements { get; set; }
```

#### Property Value

[IEnumerable\<Supplement\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />

### **AddOns**

Internal field for passing additional information across layers.

```csharp
public Dictionary<string, string> AddOns { get; set; }
```

#### Property Value

[Dictionary\<String, String\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br />

## Constructors

### **Option(Status, Price, IEnumerable\<PaymentType\>, IEnumerable\<Room\>)**

Initializes a new instance of the [Option](./connectors.pull.hotel.domain.contracts.search.response.option) class with the specified parameters.

```csharp
public Option(Status status, Price price, IEnumerable<PaymentType> paymentTypes, IEnumerable<Room> rooms)
```

#### Parameters

`status` [Status](./connectors.pull.hotel.domain.contracts.common.status)<br />
The status of the option, such as "OK" or "RQ".

`price` Price<br />
The price associated with the option, including net, gross, and margin details.

`paymentTypes` [IEnumerable\<PaymentType\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The available payment types for the option.

`rooms` [IEnumerable\<Room\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
The list of rooms included in the option.

#### Exceptions

[ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentnullexception)<br />
Thrown if `price`, `paymentTypes`, or `rooms` is null.
