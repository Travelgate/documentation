# FromRoomsGeneratorFactoryOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for the [FromRoomsGeneratorFactoryOptions](./connectors.pull.hotel.domain.options.fromroomsgeneratorfactoryoptions).

```csharp
public class FromRoomsGeneratorFactoryOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [FromRoomsGeneratorFactoryOptions](./connectors.pull.hotel.domain.options.fromroomsgeneratorfactoryoptions)

**Remarks:**

Configures how policies are handled during room generation for search and quote processes,
 specifically whether they are based on gross or net amounts.

## Properties

### **SearchOptionsPoliciesWithGross**

Indicates that search option policies are based on gross amounts rather than net amounts.

```csharp
public bool SearchOptionsPoliciesWithGross { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

### **QuoteOptionsPoliciesWithGross**

Indicates that quote option policies are based on gross amounts rather than net amounts.

```csharp
public bool QuoteOptionsPoliciesWithGross { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

## Constructors

### **FromRoomsGeneratorFactoryOptions()**

```csharp
public FromRoomsGeneratorFactoryOptions()
```
