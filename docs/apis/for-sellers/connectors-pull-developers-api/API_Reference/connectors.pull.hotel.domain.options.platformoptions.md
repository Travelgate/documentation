# PlatformOptions

Namespace: Connectors.Pull.Hotel.Domain.Options

Represents options for platform-related operations in the hotel domain.

```csharp
public class PlatformOptions
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [PlatformOptions](./connectors.pull.hotel.domain.options.platformoptions)<br />
Attributes [RequiredMemberAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.requiredmemberattribute)

**Remarks:**

This class centralizes the configuration for various operations, including search, quote,
 booking, cancellations, and amendments. It is required for all integrations, as it provides
 the foundational settings needed by the framework to function correctly.
 Integrators must ensure that [PlatformOptions](./connectors.pull.hotel.domain.options.platformoptions) is configured properly in every integration.

## Properties

### **Search**

Options for search operations.

```csharp
public SearchOptions Search { get; set; }
```

#### Property Value

[SearchOptions](./connectors.pull.hotel.domain.options.searchoptions)<br />

**Remarks:**

Configures settings for search-related processes, including expiration times and maximum results.
 See [SearchOptions](./connectors.pull.hotel.domain.options.searchoptions) for details.

### **Quote**

Options for quote operations.

```csharp
public QuoteOptions Quote { get; set; }
```

#### Property Value

[QuoteOptions](./connectors.pull.hotel.domain.options.quoteoptions)<br />

**Remarks:**

Determines how quotes are handled, including conditions for refreshing quote data.
 See [QuoteOptions](./connectors.pull.hotel.domain.options.quoteoptions) for details.

### **Book**

Options for booking operations.

```csharp
public BookOptions Book { get; set; }
```

#### Property Value

[BookOptions](./connectors.pull.hotel.domain.options.bookoptions)<br />

**Remarks:**

Configures settings for the booking process, including quote requirements.
 See [BookOptions](./connectors.pull.hotel.domain.options.bookoptions) for details.

### **Cancel**

Options for cancellation operations.

```csharp
public CancelOptions Cancel { get; set; }
```

#### Property Value

[CancelOptions](./connectors.pull.hotel.domain.options.canceloptions)<br />

**Remarks:**

Determines how booking cancellations are processed, including optional booking checks by reference.
 See [CancelOptions](./connectors.pull.hotel.domain.options.canceloptions) for details.

### **CheckBookings**

Options for checking bookings.

```csharp
public CheckBookingsOptions CheckBookings { get; set; }
```

#### Property Value

[CheckBookingsOptions](./connectors.pull.hotel.domain.options.checkbookingsoptions)<br />

**Remarks:**

Configures settings for verifying booking information, such as by reference or date.
 See [CheckBookingsOptions](./connectors.pull.hotel.domain.options.checkbookingsoptions) for details.

### **AmendBookingPaxes**

Options for amending booking passengers.

```csharp
public AmendBookingPaxesOptions AmendBookingPaxes { get; set; }
```

#### Property Value

[AmendBookingPaxesOptions](./connectors.pull.hotel.domain.options.amendbookingpaxesoptions)<br />

**Remarks:**

Configures how passenger details in a booking can be modified.
 See [AmendBookingPaxesOptions](./connectors.pull.hotel.domain.options.amendbookingpaxesoptions) for details.

### **AmendBookingDates**

Options for amending booking dates.

```csharp
public AmendBookingDatesOptions AmendBookingDates { get; set; }
```

#### Property Value

[AmendBookingDatesOptions](./connectors.pull.hotel.domain.options.amendbookingdatesoptions)<br />

**Remarks:**

Configures how booking dates can be modified.
 See [AmendBookingDatesOptions](./connectors.pull.hotel.domain.options.amendbookingdatesoptions) for details.

### **AmendBookingRemarks**

Options for amending booking remarks.

```csharp
public AmendBookingRemarksOptions AmendBookingRemarks { get; set; }
```

#### Property Value

[AmendBookingRemarksOptions](./connectors.pull.hotel.domain.options.amendbookingremarksoptions)<br />

**Remarks:**

Configures how additional notes or remarks in a booking can be amended.
 See [AmendBookingRemarksOptions](./connectors.pull.hotel.domain.options.amendbookingremarksoptions) for details.

### **AmendBookingBoard**

Options for amending the board in a booking.

```csharp
public AmendBookingBoardOptions AmendBookingBoard { get; set; }
```

#### Property Value

[AmendBookingBoardOptions](./connectors.pull.hotel.domain.options.amendbookingboardoptions)<br />

**Remarks:**

Configures how the meal plan or board type in a booking can be amended.
 See [AmendBookingBoardOptions](./connectors.pull.hotel.domain.options.amendbookingboardoptions) for details.

### **AmendBookingRoom**

Options for amending the room in a booking.

```csharp
public AmendBookingRoomOptions AmendBookingRoom { get; set; }
```

#### Property Value

[AmendBookingRoomOptions](./connectors.pull.hotel.domain.options.amendbookingroomoptions)<br />

**Remarks:**

Configures how the room type in a booking can be amended.
 See [AmendBookingRoomOptions](./connectors.pull.hotel.domain.options.amendbookingroomoptions) for details.

### **FromRoomsGeneratorFactoryOptions**

Options for the [PlatformOptions.FromRoomsGeneratorFactoryOptions](./connectors.pull.hotel.domain.options.platformoptions#fromroomsgeneratorfactoryoptions).

```csharp
public FromRoomsGeneratorFactoryOptions FromRoomsGeneratorFactoryOptions { get; set; }
```

#### Property Value

[FromRoomsGeneratorFactoryOptions](./connectors.pull.hotel.domain.options.fromroomsgeneratorfactoryoptions)<br />

**Remarks:**

Provides configuration for handling room-related policies during search and quote processes.

### **IgnoreMarketsInRequest**

If `true`, skips market validation in the request. This is specific to certain connectors.

```csharp
public bool IgnoreMarketsInRequest { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

Useful for cases where market restrictions are not relevant to the business logic of the connector.

### **IgnoreNationalityInRequest**

If `true`, skips nationality validation in the request. This is specific to certain connectors.

```csharp
public bool IgnoreNationalityInRequest { get; set; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br />

**Remarks:**

Useful for cases where nationality restrictions are not relevant to the business logic of the connector.

## Constructors

### **PlatformOptions()**

#### Caution

Constructors of types with required members are not supported in this version of your compiler.

---

```csharp
public PlatformOptions()
```
