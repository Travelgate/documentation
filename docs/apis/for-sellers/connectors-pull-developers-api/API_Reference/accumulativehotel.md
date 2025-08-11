# AccumulativeHotel

Represents an accumulative hotel object.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Code** | String | Hotel code. This code may have concatenated information. |
| **NativeSupplierCode** | String | Native supplier code, without any concatenations. This code will be used to retrieve Giata information. |
| **Name** | String | Hotel name. |
| **CategoryCode** | String | Category code. |
| **ChainCode** | String | Hotel chain code. |
| **ExclusiveDeal** | Boolean | Indicates whether the hotel has an exclusive deal. |
| **Location** | [AccumulativeLocation](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativelocation) | Location of the hotel. |
| **Location/Address** | String | Address of the hotel. |
| **Location/City** | String | City of the hotel. |
| **Location/ZipCode** | String | Zip code of the hotel. |
| **Location/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing location descriptions categorized by language. |
| **Location/Indications** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing location indications categorized by language. |
| **Location/Country** | [Iso2CountryTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2countrytypeenum) | Country represented by ISO alpha-2.  |
| **Location/Coordinates** | [AccumulativeCoordinates](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativecoordinates) | Coordinates of the hotel. |
| **Location/Coordinates/Latitude** | Double | Latitude. |
| **Location/Coordinates/Longitude** | Double | Longitude. |
| **Location/MinimumDestination** | [AccumulativeHotelMinimumDestination](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativehotelminimumdestination) | The lowest-level destination associated with the hotel. This value should match the one returned by the Destination call. |
| **Location/MinimumDestination/**<br />**Code** | String | Destination code. |
| **Location/MinimumDestination/**<br />**Available** | Boolean | Indicates whether it is available to request in Search. |
| **Location/MinimumDestination/**<br />**Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Dictionary containing names categorized by language. |
| **Location/Contact** | [AccumulativeContact](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativecontact) | Contact information of the hotel. |
| **Location/Contact/Email** | String | Email address. |
| **Location/Contact/Phone** | String | Phone number. |
| **Location/Contact/Fax** | String | Fax number. |
| **Location/Contact/Web** | String | Web address. |
| **Location/Airports** | List&lt;[AccumulativeAirport](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeairport)&gt; | Nearby airports. |
| **Location/Airports/IATACode** | String | IATA code. |
| **Location/State** | String | State where the hotel is located. |
| **Amenities** | List&lt;[AccumulativeAmenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeamenity)&gt; | List of amenities. |
| **Amenities/Code** | String | Code of the amenity. |
| **Amenities/Type** | [ApplicationAreaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/applicationareatypeenum) | Type of the application area. |
| **Amenities/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Descriptions of the amenity, keyed by language. |
| **Amenities/Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Names of the amenity, keyed by language. |
| **CardTypes** | List&lt;[CreditCardType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/creditcardtype)&gt; | List of accepted credit card types. |
| **Descriptions** | [AccumulativeDescriptions](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativedescriptions) | Descriptions of the hotel. |
| **Descriptions/Pool** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing pool descriptions categorized by language. |
| **Descriptions/Activities** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing activities descriptions categorized by language. |
| **Descriptions/Restaurants** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing restaurants descriptions categorized by language. |
| **Descriptions/General** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing general descriptions categorized by language. |
| **Descriptions/Rooms** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing room descriptions categorized by language. |
| **Descriptions/Amenities** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing amenities descriptions categorized by language. |
| **Medias** | List&lt;[AccumulativeMedia](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativemedia)&gt; | List of medias. |
| **Medias/Code** | String | Code of the media. |
| **Medias/Url** | String | URL of the media. |
| **Medias/Type** | [MediaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/mediatypeenum) | Type of the media. |
| **Medias/Order** | String | Order of the media. Should be ordered from 1 onward. |
| **Medias/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Descriptions of the media, keyed by ISO 2 language code. |
| **Rooms** | List&lt;[AccumulativeRoom](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeroom)&gt; | List of rooms. |
| **Rooms/Code** | String | Gets or sets the code of the room. |
| **Rooms/Area** | Double | Gets or sets the area of the room. |
| **Rooms/Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Gets or sets the names of the room in different languages. |
| **Rooms/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Gets or sets the descriptions of the room in different languages. |
| **Rooms/RoomOccupancy** | [AccumulativeRoomOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeroomoccupancy) | Gets or sets the room occupancy information. |
| **Rooms/RoomOccupancy/Adults** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeminmaxoccupancy) | Accumulative occupancy for adults. |
| **Rooms/RoomOccupancy/Adults/Min** | Integer | Minimum occupancy. |
| **Rooms/RoomOccupancy/Adults/Max** | Integer | Maximum occupancy. |
| **Rooms/RoomOccupancy/Children** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeminmaxoccupancy) | Accumulative occupancy for children. |
| **Rooms/RoomOccupancy/Children/**<br />**Min** | Integer | Minimum occupancy. |
| **Rooms/RoomOccupancy/Children/**<br />**Max** | Integer | Maximum occupancy. |
| **Rooms/RoomOccupancy/Infants** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeminmaxoccupancy) | Accumulative occupancy for infants. |
| **Rooms/RoomOccupancy/Infants/**<br />**Min** | Integer | Minimum occupancy. |
| **Rooms/RoomOccupancy/Infants/**<br />**Max** | Integer | Maximum occupancy. |
| **Rooms/RoomOccupancy/Total** | [AccumulativeMinMaxOccupancy](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeminmaxoccupancy) | Accumulative total occupancy. |
| **Rooms/RoomOccupancy/Total/Min** | Integer | Minimum occupancy. |
| **Rooms/RoomOccupancy/Total/Max** | Integer | Maximum occupancy. |
| **Rooms/Beds** | List&lt;[AccumulativeBed](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativebed)&gt; | Gets or sets the list of beds in the room. |
| **Rooms/Beds/NumberOfBeds** | Integer | Gets or sets the number of beds. |
| **Rooms/Beds/Type** | String | Gets or sets the type of bed. |
| **Rooms/Amenities** | List&lt;[AccumulativeAmenity](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeamenity)&gt; | Gets or sets the list of amenities in the room. |
| **Rooms/Amenities/Code** | String | Code of the amenity. |
| **Rooms/Amenities/Type** | [ApplicationAreaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/applicationareatypeenum) | Type of the application area. |
| **Rooms/Amenities/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), List&lt;String&gt;&gt; | Descriptions of the amenity, keyed by language. |
| **Rooms/Amenities/Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Names of the amenity, keyed by language. |
| **Rooms/Medias** | List&lt;[AccumulativeMedia](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativemedia)&gt; | Gets or sets the list of media associated with the room. |
| **Rooms/Medias/Code** | String | Code of the media. |
| **Rooms/Medias/Url** | String | URL of the media. |
| **Rooms/Medias/Type** | [MediaTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/mediatypeenum) | Type of the media. |
| **Rooms/Medias/Order** | String | Order of the media. Should be ordered from 1 onward. |
| **Rooms/Medias/Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Descriptions of the media, keyed by ISO 2 language code. |
| **Rooms/Views** | List&lt;[AccumulativeView](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativeview)&gt; | Gets or sets the list of views from the room. |
| **Rooms/Views/Code** | String | Gets or sets the code. |
| **Rooms/Views/Description** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Gets or sets the description. |
| **PropertyType** | [AccumulativePropertyType](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativepropertytype) | Property type. |
| **PropertyType/Code** | String | Property type code. |
| **PropertyType/Name** | String | Property type name. |
| **MandatoryFees** | List&lt;[AccumulativeMandatoryFee](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativemandatoryfee)&gt; | Mandatory fees. |
| **MandatoryFees/Code** | String | Fee code. |
| **MandatoryFees/Description** | String | Fee description. |
| **MandatoryFees/Name** | String | Fee name. |
| **MandatoryFees/Scope** | String | Fee scope. |
| **MandatoryFees/Duration** | String | Duration of the fee. |
| **MandatoryFees/NetAmount** | Double | Net amount of the fee. |
| **MandatoryFees/Currency** | [Currency](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/currency) | Currency of the fee represented by ISO_4217. |
| **MandatoryFees/Included** | Boolean | Indicates whether the fee is included or not. |
| **MandatoryFees/Refund** | Boolean | Indicates whether the fee is refundable or not. |
| **CheckInData** | [AccumulativeCheckData](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativecheckdata) | Check-in data for the hotel. |
| **CheckInData/Instructions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Dictionary containing check-in/check-out instructions categorized by language. |
| **CheckInData/**<br />**SpecialInstructions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Dictionary containing special check-in/check-out instructions categorized by language. |
| **CheckInData/MinAge** | Integer | Minimum age for check-in/check-out. |
| **CheckInData/BeginTime** | [TimeOnlyModel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/timeonlymodel) | Begin time for check-in/check-out. |
| **CheckInData/BeginTime/Time** | String | Gets or sets the time. |
| **CheckInData/EndTime** | [TimeOnlyModel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/timeonlymodel) | Ending time for check-in/check-out. |
| **CheckInData/EndTime/Time** | String | Gets or sets the time. |
| **CheckOutData** | [AccumulativeCheckData](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/accumulativecheckdata) | Check-out data for the hotel. |
| **CheckOutData/Instructions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Dictionary containing check-in/check-out instructions categorized by language. |
| **CheckOutData/**<br />**SpecialInstructions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/iso2languageenum), String&gt; | Dictionary containing special check-in/check-out instructions categorized by language. |
| **CheckOutData/MinAge** | Integer | Minimum age for check-in/check-out. |
| **CheckOutData/BeginTime** | [TimeOnlyModel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/timeonlymodel) | Begin time for check-in/check-out. |
| **CheckOutData/BeginTime/Time** | String | Gets or sets the time. |
| **CheckOutData/EndTime** | [TimeOnlyModel](/docs/apis/for-sellers/connectors-pull-developers-api/API_Reference/timeonlymodel) | Ending time for check-in/check-out. |
| **CheckOutData/EndTime/Time** | String | Gets or sets the time. |
