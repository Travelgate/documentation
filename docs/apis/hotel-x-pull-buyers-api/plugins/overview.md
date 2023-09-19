---
sidebar_position: 1
---

# Overview

Hotel-X offers customizable Plugins that allow you to incorporate your own business logic without separate implementation. With Plugins, customize your requests and responses effortlessly as your business expands, and forget about aggregating responses from multiple suppliers. Just upload the required files to our FTP and configure the Plugins to suit your specific requirements.

Furthermore, there is an option to load default plugins into our database. Currently, the exclusive method for doing so involves reaching out to our dedicated Customer Care team. These default plugins will automatically execute in all the Queries and Mutations defined above when no filters are specified.

### Ftp Files

#### Ftp Endpoint

ftp://ftp.xmltravelgate.com

Upon receiving your Onboarding Welcome Pack, you will be granted access credentials to the FTP server. In the event that you need assistance or have not received your credentials, kindly raise a ticket on our Help Center to obtain your FTP credentials and initiate your journey.

#### Directory Format

The structure of the directory should be in the below format, all files should be inside this directory

/F[Folder code]_[Unique code]/HotelX_[Unique code]/

F[Folder code]_[Unique code]
* Folder code: corresponds to the folder number.
* Unique code: corresponds to the folder unique code in our system.

HotelX_[Unique code]
* Unique code: corresponds to the HotelX unique code in our system.

Example: /F**0**\_**178**/HotelX\_**179**

#### Update Ftp Data

We have two options:

Reprocessing the same data by renaming the file and just removing “_processed”.

Example:
* SourceContext_DestinationContext_entity_map_processed.csv –> example.csv
* Changing the data by deleting the processed file and uploading a new one with new information.

#### Delete Ftp Data

Uploading a new file only with headers (no information).

Example: Code Source, Code Destination

### How to execute a plugin

A plugin execution can be specified in any request’s HotelSettingsInput and it must specify in which step it should be executed. The plugin type and name are mandatory in order to identify a plugin instance.

[ añadir ejemplo ]