---
sidebar_position: 3
---

# Mapping

The mapping feature serves to convert either the supplier's native codes to the Buyer's codes or vice versa. This functionality encompasses the following types:

* Hotel Map
* Board Map
* Room Map
* Rate Map
* Amenity Map
* Promotion Map
* Room Description Map

### File format

The file (1 file for each supplier) should be in the following format:
* Encoding: UTF-8
* File Name: [Context Source]_[Context Destination]_[entity]_map.csv
   - Context Source: Client's context code
   - Context Destination: Supplier's context code
   - Entity:
     - Hotel: [Context Source]_[Context Destination]_hotel_map.csv
     - Board: [Context Source]_[Context Destination]_board_map.csv
     - Room: [Context Source]_[Context Destination]_room_map.csv
     - Rate: [Context Source]_[Context Destination]_rate_map.csv
     - Amenity: [Context Source]_[Context Destination]_amenity_map.csv
     - Promotion: [Context Source]_[Context Destination]\promotion_map.csv
     - Room Description: [Context Source]_[Context Destination]\roomdescription_map.csv
* Header Row: Code Source,Code Destination
   - Context Source: Client's context code
   - Context Destination: Supplier's context code
* Delimiter: Comma (“,”)
* Directory: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/[entity]/
   - Entity:
     - Hotel: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Hotel/
     - Board: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Board/
     - Room: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Room/
     - Rate: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Rate/
     - Amenity: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Amenity/
     - Promotion: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Promotion/
     - Room Description: /F[folder code]_[unique code]/HotelX_[unique code]/Maps/Room/


### Sample files

Example with the following client code and supplier code:

* Client code: GUE
* Supplier Code: BVJ

Name: GUE_BVJ_hotel_map.csv

[ añadir ejemplo ]

### How to execute Mapping plugin
