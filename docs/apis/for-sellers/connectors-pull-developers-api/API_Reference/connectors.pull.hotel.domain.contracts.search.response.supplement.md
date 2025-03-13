# Supplement

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents a supplementary service or feature in a hotel search response event access.

```csharp
public sealed class Supplement
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement)<br />
Attributes [SerializableAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.serializableattribute), DataContractAttribute

**Remarks:**

A supplement provides additional options for a booking, which may be optional or mandatory, and can have specific pricing, date ranges, and types.

## Properties

### **Code**

The unique code identifying the supplement.

```csharp
public string Code { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Name**

The descriptive name of the supplement.

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Description**

An optional textual description providing additional details about the supplement.

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **Mandatory**

Indicates whether the supplement is mandatory for the booking.

```csharp
public bool Mandatory { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **Price**

The [Supplement.Price](./connectors.pull.hotel.domain.contracts.search.response.supplement#price) associated with the supplement, including details such as currency and net price.

```csharp
public Price Price { get; set; }
```

#### Property Value

Price<br />

### **SupplementType**

The specific [Supplement.SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplement#supplementtype) of the supplement (e.g., meal plan, additional service).

```csharp
public SupplementType SupplementType { get; set; }
```

#### Property Value

[SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplementtype)<br />

### **ChargeType**

Defines how the supplement is charged using [Supplement.ChargeType](./connectors.pull.hotel.domain.contracts.search.response.supplement#chargetype) (e.g., per person, per stay).

```csharp
public ChargeType ChargeType { get; set; }
```

#### Property Value

[ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />

### **DurationType**

Specifies whether the supplement applies to a specific duration ([DurationType.Open](./connectors.pull.hotel.domain.contracts.search.response.durationtype#open) or [DurationType.Range](./connectors.pull.hotel.domain.contracts.search.response.durationtype#range)).

```csharp
public DurationType DurationType { get; set; }
```

#### Property Value

[DurationType](./connectors.pull.hotel.domain.contracts.search.response.durationtype)<br />

### **Quantity**

The quantity of the supplement included in the booking.

```csharp
public uint Quantity { get; set; }
```

#### Property Value

[UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

### **StartDate**

The start date for the supplement (if applicable).

```csharp
public string StartDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This value is parsed and validated against the format specified in .

### **StartDateAsDateTime**

The start date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object for easier manipulation.

```csharp
public Nullable<DateTime> StartDateAsDateTime { get; private set; }
```

#### Property Value

[Nullable\<DateTime\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

### **EndDate**

The end date for the supplement (if applicable).

```csharp
public string EndDate { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This value is parsed and validated against the format specified in .

### **EndDateAsDateTime**

The end date as a [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime) object for easier manipulation.

```csharp
public Nullable<DateTime> EndDateAsDateTime { get; private set; }
```

#### Property Value

[Nullable\<DateTime\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1)<br />

### **Resort**

The associated [Supplement.Resort](./connectors.pull.hotel.domain.contracts.search.response.supplement#resort) where the supplement applies.

```csharp
public Resort Resort { get; set; }
```

#### Property Value

[Resort](./connectors.pull.hotel.domain.contracts.search.response.resort)<br />

### **Unit**

Specifies the unit of time for the supplement (e.g., per day, per stay) using [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype).

```csharp
public UnitTimeType Unit { get; set; }
```

#### Property Value

[UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype)<br />

## Constructors

### **Supplement(String, String, Price, SupplementType, ChargeType, Resort, UInt32, UnitTimeType)**

Initializes a new instance of the [Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement) class with the specified parameters.

```csharp
public Supplement(string code, string name, Price price, SupplementType supplementType, ChargeType chargeType, Resort resort, uint quantity, UnitTimeType unit)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The unique code identifying the supplement.

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />
The name of the supplement.

`price` Price<br />
The [Supplement.Price](./connectors.pull.hotel.domain.contracts.search.response.supplement#price) associated with the supplement.

`supplementType` [SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplementtype)<br />
The [Supplement.SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplement#supplementtype) of the supplement (e.g., meal, event, etc.).

`chargeType` [ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />
The [Supplement.ChargeType](./connectors.pull.hotel.domain.contracts.search.response.supplement#chargetype) defining how the supplement is billed (e.g., per person, per stay).

`resort` [Resort](./connectors.pull.hotel.domain.contracts.search.response.resort)<br />
The [Supplement.Resort](./connectors.pull.hotel.domain.contracts.search.response.supplement#resort) where the supplement applies.

`quantity` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />
The quantity of the supplement purchased.

`unit` [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype)<br />
The [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype) applicable to the supplement (e.g., per day, per night).

#### Exceptions

[ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentexception)<br />
Thrown when required parameters are invalid (e.g., null or empty).

## Methods

### **BuildWithOpenDateRange(String, String, Price, SupplementType, ChargeType, Resort, UInt32, UnitTimeType)**

Creates a supplement with an open-ended date range.

```csharp
public static Supplement BuildWithOpenDateRange(string code, string name, Price price, SupplementType supplementType, ChargeType chargeType, Resort resort, uint quantity, UnitTimeType unit)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`price` Price<br />

`supplementType` [SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplementtype)<br />

`chargeType` [ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />

`resort` [Resort](./connectors.pull.hotel.domain.contracts.search.response.resort)<br />

`quantity` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

`unit` [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype)<br />

#### Returns

[Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement)<br />

### **BuildWithDateRange(String, String, Price, SupplementType, ChargeType, Resort, String, String, UInt32, UnitTimeType)**

Creates a supplement with a defined date range.

```csharp
public static Supplement BuildWithDateRange(string code, string name, Price price, SupplementType supplementType, ChargeType chargeType, Resort resort, string startDate, string endDate, uint quantity, UnitTimeType unit)
```

#### Parameters

`code` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`name` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`price` Price<br />

`supplementType` [SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplementtype)<br />

`chargeType` [ChargeType](./connectors.pull.hotel.domain.contracts.common.chargetype)<br />

`resort` [Resort](./connectors.pull.hotel.domain.contracts.search.response.resort)<br />

`startDate` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`endDate` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

`quantity` [UInt32](https://docs.microsoft.com/en-us/dotnet/api/system.uint32)<br />

`unit` [UnitTimeType](./connectors.pull.hotel.domain.contracts.common.unittimetype)<br />

#### Returns

[Supplement](./connectors.pull.hotel.domain.contracts.search.response.supplement)<br />
