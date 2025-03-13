# QuoteRequired

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents the requirements for quoting in the hotel domain.

```csharp
public class QuoteRequired
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [QuoteRequired](./connectors.pull.hotel.domain.options.quoterequired)

## Properties

### **When**

Specifies the condition that determines when a quote is required.

```csharp
public QuoteRequiredWhen When { get; set; }
```

#### Property Value

[QuoteRequiredWhen](./connectors.pull.hotel.domain.options.quoterequiredwhen)<br />

**Remarks:**

The [QuoteRequiredWhen](./connectors.pull.hotel.domain.options.quoterequiredwhen) enumeration defines the specific conditions under
 which a quote is necessary, such as always, on expiration, or in case of errors.

### **QuoteUrl**

The URL endpoint used to obtain a quote.

```csharp
public string QuoteUrl { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This property specifies the API endpoint or service URL where the quoting process
 can be initiated to retrieve up-to-date pricing and availability information.

## Constructors

### **QuoteRequired()**

```csharp
public QuoteRequired()
```
