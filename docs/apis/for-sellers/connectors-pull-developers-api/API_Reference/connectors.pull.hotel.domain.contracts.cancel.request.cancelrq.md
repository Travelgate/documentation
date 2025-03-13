# CancelRq

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Cancel.Request

Represents the data structure for a hotel booking cancellation request, 
 encapsulating the necessary input details and configuration settings required for processing.

```csharp
public class CancelRq
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [CancelRq](./connectors.pull.hotel.domain.contracts.cancel.request.cancelrq)<br />
Attributes DataContractAttribute

## Properties

### **Input**

Gets or initializes the input details for the cancellation request, 
 including specific information about the booking to be canceled. 
 Such as the access, booking reference, and accommodation code.

```csharp
public CancelInput Input { get; set; }
```

#### Property Value

[CancelInput](./connectors.pull.hotel.domain.contracts.cancel.request.cancelinput)<br />

**Remarks:**

The [CancelInput](./connectors.pull.hotel.domain.contracts.cancel.request.cancelinput) class includes properties for capturing essential details
 like booking references, language, and accommodation information.

### **Settings**

Gets or initializes the platform-specific settings required for processing the cancellation request. 
 These settings include credentials, API endpoints, parameters, and details about the client, supplier, 
 and platform involved in the request.

```csharp
public Settings Settings { get; set; }
```

#### Property Value

[Settings](./connectors.pull.hotel.domain.contracts.common.settings)<br />

**Remarks:**

The [CancelRq.Settings](./connectors.pull.hotel.domain.contracts.cancel.request.cancelrq#settings) class provides configuration details needed for platform-specific
 operations, ensuring smooth integration with external systems.

## Constructors

### **CancelRq()**

```csharp
public CancelRq()
```
