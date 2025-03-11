# Urls

Namespace: Connectors.Core.Domain

Represents a collection of URLs used for different operations in the Connectors framework.

```csharp
public class Urls
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Urls](./connectors.core.domain.urls)

**Remarks:**

This class defines the URLs required for various operations such as booking, searching, quoting, 
 and other generic purposes. Each URL is validated to ensure it conforms to a valid URL format.

## Properties

### <a id="properties-book"/>**Book**

The URL used for booking operations.

```csharp
public string Book { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This URL is invoked during the booking process to confirm reservations with the supplier.

### <a id="properties-generic"/>**Generic**

A generic URL for additional operations.

```csharp
public string Generic { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This URL can be used for any operation not explicitly covered by the other URLs, 
 such as retrieving metadata or custom supplier endpoints.

### <a id="properties-quote"/>**Quote**

The URL used for quote operations.

```csharp
public string Quote { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This URL is utilized to retrieve pricing details and validate availability before booking.

### <a id="properties-search"/>**Search**

The URL used for search operations.

```csharp
public string Search { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This URL is invoked to perform searches for availability, rates, and other relevant data.

## Constructors

### <a id="constructors-.ctor"/>**Urls()**

```csharp
public Urls()
```
