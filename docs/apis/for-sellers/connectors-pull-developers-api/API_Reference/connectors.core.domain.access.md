# Access

Namespace: Connectors.Core.Domain

Represents access credentials and related information required for a connection.

```csharp
public class Access
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Access](./connectors.core.domain.access)

**Remarks:**

This class encapsulates the details needed to establish a connection between a client and a supplier,
 including authentication credentials, URLs, and optional parameters.

## Properties

### <a id="properties-apikey"/>**ApiKey**

The API key used for authentication or authorization.

```csharp
public string ApiKey { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field is included but currently not used in the connection process.

### <a id="properties-code"/>**Code**

The unique code identifying the access configuration.

```csharp
public int Code { get; set; }
```

#### Property Value

[Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br />

**Remarks:**

This code is a required field and serves as the identifier for the access setup.

### <a id="properties-parameters"/>**Parameters**

Additional parameters related to the connection.

```csharp
public AccessParameters Parameters { get; set; }
```

#### Property Value

[AccessParameters](./connectors.core.domain.accessparameters)<br />

**Remarks:**

This is a key-value collection that can store any custom configuration for the connection.

### <a id="properties-password"/>**Password**

The password used for authentication with the supplier.

```csharp
public string Password { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

The password is stored securely and is required for supplier authentication.

### <a id="properties-urls"/>**Urls**

The URLs associated with the access configuration.

```csharp
public Urls Urls { get; set; }
```

#### Property Value

[Urls](./connectors.core.domain.urls)<br />

**Remarks:**

These URLs define the endpoints for connecting to the supplier's services.

### <a id="properties-user"/>**User**

The username used for authentication with the supplier.

```csharp
public string User { get; set; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br />

**Remarks:**

This field stores the username required for logging into the supplier's system.

## Constructors

### <a id="constructors-.ctor"/>**Access()**

```csharp
public Access()
```
