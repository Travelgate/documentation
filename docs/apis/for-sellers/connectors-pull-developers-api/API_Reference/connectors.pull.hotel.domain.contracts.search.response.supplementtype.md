# SupplementType

Namespace: Connectors.Pull.Hotel.Domain.Contracts.Search.Response

Represents the types of supplements that can be associated with a hotel booking.

```csharp
public enum SupplementType
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [ValueType](https://docs.microsoft.com/en-us/dotnet/api/system.valuetype) → [Enum](https://docs.microsoft.com/en-us/dotnet/api/system.enum) → [SupplementType](./connectors.pull.hotel.domain.contracts.search.response.supplementtype)<br />
Implements [IComparable](https://docs.microsoft.com/en-us/dotnet/api/system.icomparable), [ISpanFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.ispanformattable), [IFormattable](https://docs.microsoft.com/en-us/dotnet/api/system.iformattable), [IConvertible](https://docs.microsoft.com/en-us/dotnet/api/system.iconvertible)

**Remarks:**

Supplements provide additional services or options to enhance a booking, such as meals, activities, or special events.
 These types categorize the various kinds of supplements available.

## Fields

| Name | Value | Description |
| --- | --: | --- |
| SkiPass | 0 | Represents a ski pass supplement, which grants access to ski facilities or services. |
| Lessons | 1 | Represents lessons or instructional services, such as ski or diving lessons, as a supplement. |
| Meals | 2 | Represents meal-related supplements, such as breakfast, lunch, or dinner packages. |
| Equipment | 3 | Represents equipment rental or purchase as a supplement, such as ski or diving gear. |
| Ticket | 4 | Represents ticket-based supplements, such as access to events, attractions, or shows. |
| Transfers | 5 | Represents transportation or transfer services as a supplement, such as airport pickups or local shuttles. |
| Gala | 6 | Represents gala or special event supplements, such as dinner galas or themed parties. |
| Activity | 7 | Represents activity-based supplements, such as guided tours, excursions, or adventure activities. |
| Other | 8 | Represents any other type of supplement not covered by the specific categories listed. |
