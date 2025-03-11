# Price

Namespace: Connectors.Core.Domain

Represents pricing details, including currency, net price, gross price, and additional pricing attributes.

```csharp
public class Price
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Price](./connectors.core.domain.price)

**Remarks:**

This class defines various components of pricing:
 - [Price.Currency](./connectors.core.domain.price#currency) specifies the currency in ISO 4217 format (e.g., USD, EUR).
 - [Price.Net](./connectors.core.domain.price#net) is the price paid by the buyer to the seller.
 - [Price.Gross](./connectors.core.domain.price#gross) includes the net price plus the buyer's commission.
 - [Price.MinimumSellingPrice](./connectors.core.domain.price#minimumsellingprice) defines the lowest price at which the product can be sold.
 Additional attributes determine whether the price is binding and if the net price is explicitly specified.

## Properties

### <a id="properties-binding"/>**Binding**

Indicates whether the price is binding.

```csharp
public bool Binding { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

If set to `true`, the price must be adhered to, meaning it is mandatory to sell 
 at or above the specified amount, either the gross price or the minimum selling price, if provided.

### <a id="properties-currency"/>**Currency**

The currency of the price, represented in ISO 4217 format (e.g., USD, EUR).

```csharp
public Currency Currency { get; set; }
```

#### Property Value

[Currency](./connectors.core.domain.currency)<br />

**Remarks:**

The [Price.Currency](./connectors.core.domain.price#currency) property defines the currency code for the pricing details 
 in compliance with the ISO 4217 standard.

### <a id="properties-gross"/>**Gross**

The gross price, which includes the net price and the buyer's commission.

```csharp
public double Gross { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

If the net and gross prices are equal, it indicates no commission is applied.

### <a id="properties-minimumsellingprice"/>**MinimumSellingPrice**

The minimum selling price.

```csharp
public double MinimumSellingPrice { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

This represents the lowest allowable price at which the buyer can sell the supplier's product 
 to their customers. It ensures compliance with supplier pricing rules.

### <a id="properties-net"/>**Net**

The net price paid by the buyer to the seller.

```csharp
public double Net { get; set; }
```

#### Property Value

[Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />

**Remarks:**

This represents the cost without including any commissions or markups.

### <a id="properties-netspecified"/>**NetSpecified**

Indicates whether the net price is explicitly specified.

```csharp
public bool NetSpecified { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

This flag is used to determine if the [Price.Net](./connectors.core.domain.price#net) value has been provided in the pricing details.

## Constructors

### <a id="constructors-.ctor"/>**Price(Currency, Boolean, Double, Double, Boolean, Double)**

Initializes a new instance of the [Price](./connectors.core.domain.price) class with specified details.

```csharp
public Price(Currency currency, bool binding, double net, double gross, bool netSpecified, double minimumSellingPrice)
```

#### Parameters

`currency` [Currency](./connectors.core.domain.currency)<br />
The currency of the price.

`binding` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the price is binding.

`net` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The net price.

`gross` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The gross price.

`netSpecified` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />
Indicates whether the net price is specified.

`minimumSellingPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

#### Exceptions

[ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentexception)<br />
Thrown when:
 - The net price is greater than the gross price.
 - Binding is true but the minimum selling price is 0.

## Methods

### <a id="methods-buildgrossunknownnetprice"/>**BuildGrossUnknownNetPrice(Currency, Double, Double)**

Creates a price instance with a gross price, minimum selling price, and an unknown net price.

```csharp
public static Price BuildGrossUnknownNetPrice(Currency currency, double gross, double minimumPrice)
```

#### Parameters

`currency` [Currency](./connectors.core.domain.currency)<br />
The currency of the price.

`gross` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The gross price.

`minimumPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

#### Returns

A new [Price](./connectors.core.domain.price) instance.

### <a id="methods-buildgrosswithcommissionprice"/>**BuildGrossWithCommissionPrice(Currency, Double, Double, Double, Double)**

Creates a price instance with a gross price, commission, minimum selling price, and included surcharges.

```csharp
public static Price BuildGrossWithCommissionPrice(Currency currency, double gross, double commission, double minimumPrice, double priceSurchargesIncluded)
```

#### Parameters

`currency` [Currency](./connectors.core.domain.currency)<br />
The currency of the price.

`gross` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The gross price.

`commission` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The commission as a fraction (0-1).

`minimumPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

`priceSurchargesIncluded` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
Optional. The additional surcharges included in the gross price.

#### Returns

A new [Price](./connectors.core.domain.price) instance.

#### Exceptions

[ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/system.argumentexception)<br />
Thrown when the commission is not between 0 and 1.

### <a id="methods-buildnetgrossprice"/>**BuildNetGrossPrice(Currency, Double, Double, Double)**

Creates a price instance with specified net, gross, and minimum selling prices.

```csharp
public static Price BuildNetGrossPrice(Currency currency, double net, double gross, double minimumPrice)
```

#### Parameters

`currency` [Currency](./connectors.core.domain.currency)<br />
The currency of the price.

`net` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The net price.

`gross` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The gross price.

`minimumPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

#### Returns

A new [Price](./connectors.core.domain.price) instance.

### <a id="methods-buildnetprice"/>**BuildNetPrice(Currency, Double, Double)**

Creates a price instance with a specified net price and minimum selling price.

```csharp
public static Price BuildNetPrice(Currency currency, double net, double minimumPrice)
```

#### Parameters

`currency` [Currency](./connectors.core.domain.currency)<br />
The currency of the price.

`net` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The net price.

`minimumPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

#### Returns

A new [Price](./connectors.core.domain.price) instance.

### <a id="methods-calculatebindingfromminimumprice"/>**CalculateBindingFromMinimumPrice(Double)**

Determines whether the price is binding based on the minimum selling price.

```csharp
internal static bool CalculateBindingFromMinimumPrice(double minimumPrice)
```

#### Parameters

`minimumPrice` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The minimum selling price.

#### Returns

True if the price is binding; otherwise, false.

### <a id="methods-calculatenetfromgrossandcommission"/>**CalculateNetFromGrossAndCommission(Double, Double)**

Calculates the net price from a given gross price and commission.

```csharp
public static double CalculateNetFromGrossAndCommission(double gross, double commission)
```

#### Parameters

`gross` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The gross price.

`commission` [Double](https://docs.microsoft.com/en-us/dotnet/api/system.double)<br />
The commission as a fraction (0-1).

#### Returns

The calculated net price.
