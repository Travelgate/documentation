# ShoppingElement

Namespace: Connectors.Hotel.Metadata.Domain.Shopping

Represents a shopping element in the hotel metadata domain.

```csharp
public class ShoppingElement : Connectors.Hotel.Metadata.Domain.Common.MetadataValidableElement, System.ComponentModel.DataAnnotations.IValidatableObject
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [MetadataValidableElement](./connectors.hotel.metadata.domain.common.metadatavalidableelement) → [ShoppingElement](./connectors.hotel.metadata.domain.shopping.shoppingelement)<br />
Implements IValidatableObject

## Properties

### **Languages**

Gets or sets the languages element.

```csharp
public LanguagesElement Languages { get; set; }
```

#### Property Value

[LanguagesElement](./connectors.hotel.metadata.domain.common.languageselement)<br />

### **Currencies**

Gets or sets the currencies element.

```csharp
public CurrenciesElement Currencies { get; set; }
```

#### Property Value

[CurrenciesElement](./connectors.hotel.metadata.domain.common.currencieselement)<br />

### **Price**

Gets or sets the price element.

```csharp
public PriceElement Price { get; set; }
```

#### Property Value

[PriceElement](./connectors.hotel.metadata.domain.common.priceelement)<br />

### **Nationalities**

Gets or sets the nationalities element.

```csharp
public NationalitiesElement Nationalities { get; set; }
```

#### Property Value

[NationalitiesElement](./connectors.hotel.metadata.domain.common.nationalitieselement)<br />

### **Markets**

Gets or sets the markets element.

```csharp
public MarketsElement Markets { get; set; }
```

#### Property Value

[MarketsElement](./connectors.hotel.metadata.domain.common.marketselement)<br />

### **PaymentTypes**

Gets or sets the payment types element.

```csharp
public PaymentTypesElement PaymentTypes { get; set; }
```

#### Property Value

[PaymentTypesElement](./connectors.hotel.metadata.domain.common.paymenttypeselement)<br />

### **AccommodationTypes**

Gets or sets the accommodation types element.

```csharp
public AccommodationTypeElement AccommodationTypes { get; set; }
```

#### Property Value

[AccommodationTypeElement](./connectors.hotel.metadata.domain.common.accommodationtypeelement)<br />

### **RateRules**

Gets or sets the rate rules element.

```csharp
public RateRulesElement RateRules { get; set; }
```

#### Property Value

[RateRulesElement](./connectors.hotel.metadata.domain.common.rateruleselement)<br />

### **Operations**

Gets or sets the operations element.

```csharp
public OperationsElement Operations { get; set; }
```

#### Property Value

[OperationsElement](./connectors.hotel.metadata.domain.shopping.operationselement)<br />

### **ImplementsCombination**

Gets or sets the boolean element indicating whether combination is implemented.

```csharp
public BoolElement ImplementsCombination { get; set; }
```

#### Property Value

[BoolElement](./connectors.hotel.metadata.domain.basetypes.boolelement)<br />

### **TimeZone**

Gets or sets the time zone element.

```csharp
public TimeZoneElement TimeZone { get; set; }
```

#### Property Value

[TimeZoneElement](./connectors.hotel.metadata.domain.common.timezoneelement)<br />

## Constructors

### **ShoppingElement()**

```csharp
public ShoppingElement()
```

## Methods

### **Validate(ValidationContext)**

Validates the shopping element.
 The validation context.

```csharp
public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
```

#### Parameters

`validationContext` ValidationContext<br />

#### Returns

[IEnumerable\<ValidationResult\>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)<br />
