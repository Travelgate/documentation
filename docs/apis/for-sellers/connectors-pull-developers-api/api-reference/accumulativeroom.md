# AccumulativeRoom

Represents an accumulative room.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Code** | String | Gets or sets the code of the room. |
| **Area** | Double | Gets or sets the area of the room. |
| **Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Gets or sets the names of the room in different languages. |
| **Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Gets or sets the descriptions of the room in different languages. |
| **RoomOccupancy** | [AccumulativeRoomOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeroomoccupancy) | Gets or sets the room occupancy information. |
| **RoomOccupancy/Adults** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeminmaxoccupancy) | Accumulative occupancy for adults. |
| **RoomOccupancy/Adults/Min** | Integer | Minimum occupancy. |
| **RoomOccupancy/Adults/Max** | Integer | Maximum occupancy. |
| **RoomOccupancy/Children** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeminmaxoccupancy) | Accumulative occupancy for children. |
| **RoomOccupancy/Children/Min** | Integer | Minimum occupancy. |
| **RoomOccupancy/Children/Max** | Integer | Maximum occupancy. |
| **RoomOccupancy/Infants** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeminmaxoccupancy) | Accumulative occupancy for infants. |
| **RoomOccupancy/Infants/Min** | Integer | Minimum occupancy. |
| **RoomOccupancy/Infants/Max** | Integer | Maximum occupancy. |
| **RoomOccupancy/Total** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeminmaxoccupancy) | Accumulative total occupancy. |
| **RoomOccupancy/Total/Min** | Integer | Minimum occupancy. |
| **RoomOccupancy/Total/Max** | Integer | Maximum occupancy. |
| **Beds** | List&lt;[AccumulativeBed](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativebed)&gt; | Gets or sets the list of beds in the room. |
| **Beds/NumberOfBeds** | Integer | Gets or sets the number of beds. |
| **Beds/Type** | String | Gets or sets the type of bed. |
| **Amenities** | List&lt;[AccumulativeAmenity](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeamenity)&gt; | Gets or sets the list of amenities in the room. |
| **Amenities/Code** | String | Code of the amenity. |
| **Amenities/Type** | [ApplicationAreaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/applicationareatypeenum) | Type of the application area. |
| **Amenities/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), List&lt;String&gt;&gt; | Descriptions of the amenity, keyed by language. |
| **Amenities/Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Names of the amenity, keyed by language. |
| **Medias** | List&lt;[AccumulativeMedia](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativemedia)&gt; | Gets or sets the list of media associated with the room. |
| **Medias/Code** | String | Code of the media. |
| **Medias/Url** | String | URL of the media. |
| **Medias/Type** | [MediaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/mediatypeenum) | Type of the media. |
| **Medias/Order** | String | Order of the media. Should be ordered from 1 onward. |
| **Medias/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Descriptions of the media, keyed by ISO 2 language code. |
| **Views** | List&lt;[AccumulativeView](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeview)&gt; | Gets or sets the list of views from the room. |
| **Views/Code** | String | Gets or sets the code. |
| **Views/Description** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Gets or sets the description. |
