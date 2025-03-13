# ThreeDomainSecurity

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Book.Request

Represents the 3-D Secure authentication information for a hotel booking request.

```csharp
public class ThreeDomainSecurity
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ThreeDomainSecurity](./connectors.pull.hotel.domain.contracts.book.request.threedomainsecurity)<br />
Attributes DataContractAttribute

## Properties

### **ThreeDSVersion**

Gets or sets the version of 3-D Secure protocol used.

```csharp
public string ThreeDSVersion { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **DSTransactionID**

Gets or sets the Directory Server Transaction ID.

```csharp
public string DSTransactionID { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **XID**

Gets or sets the transaction identifier for 3-D Secure.

```csharp
public string XID { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **ECI**

Gets or sets the Electronic Commerce Indicator.

```csharp
public string ECI { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **CAVV**

Gets or sets the Cardholder Authentication Verification Value.

```csharp
public string CAVV { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **PARes**

Gets or sets the Payer Authentication Response.

```csharp
public string PARes { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **PAResStatus**

Gets or sets the status of the Payer Authentication Response.

```csharp
public PAResStatus PAResStatus { get; set; }
```

#### Property Value

[PAResStatus](./connectors.pull.hotel.domain.contracts.book.request.paresstatus)<br />

### **CardEnrolledStatus**

Gets or sets the enrollment status of the card in 3-D Secure.

```csharp
public EnrolledStatus CardEnrolledStatus { get; set; }
```

#### Property Value

[EnrolledStatus](./connectors.pull.hotel.domain.contracts.book.request.enrolledstatus)<br />

### **MerchantName**

Gets or sets the name of the merchant.

```csharp
public string MerchantName { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

### **SignatureStatus**

Gets or sets the status of the signature in the 3-D Secure process.

```csharp
public SignatureStatus SignatureStatus { get; set; }
```

#### Property Value

[SignatureStatus](./connectors.pull.hotel.domain.contracts.book.request.signaturestatus)<br />

## Constructors

### **ThreeDomainSecurity()**

```csharp
public ThreeDomainSecurity()
```
