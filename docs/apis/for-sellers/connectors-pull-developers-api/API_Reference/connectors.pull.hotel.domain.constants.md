# Constants

Namespace: Connectors.Pull.Hotel.Domain

Contains constant values used throughout the Hotel Domain.
 These constants define formatting rules and limits commonly applied in various operations.

```csharp
public static class Constants
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [Constants](./connectors.pull.hotel.domain.constants)

## Fields

### **DeadLineDateFormat**

The date format string for deadline dates.
 This format follows the ISO 8601 standard and is used to represent dates and times in UTC.
 Example: `2023-01-01T15:30:00Z`.

```csharp
public static string DeadLineDateFormat;
```

### **MaxOptionsQuotaAllowed**

The maximum number of options allowed in a quota.
 This value is used in search operations to filter options and represents the maximum 
 number of options per meal plan per hotel.

```csharp
public static int MaxOptionsQuotaAllowed;
```

### **DateFormat**

Specifies the standard date format used in the application.

```csharp
public static string DateFormat;
```

**Remarks:**

The format follows the pattern "yyyy-MM-dd", which represents a four-digit year, 
 a two-digit month, and a two-digit day (e.g., 2025-01-10).
