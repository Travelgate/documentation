# AccumulativeLocation

Represents accumulative location information.

## Properties

| Name | Type | Description |
|------|------|-------------|
| **Address** | String | Address of the hotel. |
| **City** | String | City of the hotel. |
| **ZipCode** | String | Zip code of the hotel. |
| **Descriptions** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing location descriptions categorized by language. |
| **Indications** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), List&lt;String&gt;&gt; | Dictionary containing location indications categorized by language. |
| **Country** | [Iso2CountryTypeEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2countrytypeenum) | Country represented by ISO alpha-2.  |
| **Coordinates** | [AccumulativeCoordinates](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativecoordinates) | Coordinates of the hotel. |
| **Coordinates/Latitude** | Double | Latitude. |
| **Coordinates/Longitude** | Double | Longitude. |
| **MinimumDestination** | [AccumulativeHotelMinimumDestination](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativehotelminimumdestination) | The lowest-level destination associated with the hotel. This value should match the one returned by the Destination call. |
| **MinimumDestination/Code** | String | Destination code. |
| **MinimumDestination/Available** | Boolean | Indicates whether it is available to request in Search. |
| **MinimumDestination/Names** | Dictionary&lt;[Iso2LanguageEnum](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/iso2languageenum), String&gt; | Dictionary containing names categorized by language. |
| **Contact** | [AccumulativeContact](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativecontact) | Contact information of the hotel. |
| **Contact/Email** | String | Email address. |
| **Contact/Phone** | String | Phone number. |
| **Contact/Fax** | String | Fax number. |
| **Contact/Web** | String | Web address. |
| **Airports** | List&lt;[AccumulativeAirport](/docs/apis/for-sellers/connectors-pull-developers-api/api-reference/accumulativeairport)&gt; | Nearby airports. |
| **Airports/IATACode** | String | IATA code. |
| **State** | String | State where the hotel is located. |
