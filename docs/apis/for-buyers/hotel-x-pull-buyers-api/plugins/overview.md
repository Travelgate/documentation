---
sidebar_position: 1
---

# Overview

Hotel-X offers customizable Plugins that allow you to incorporate your own business logic without separate implementation. With Plugins, customize your requests and responses effortlessly as your business expands, and forget about aggregating responses from multiple suppliers. Just upload the required files to our FTP and configure the Plugins to suit your specific requirements.

Furthermore, there is an option to load default plugins into our database. Currently, the exclusive method for doing so involves reaching out to our dedicated Customer Care team. These default plugins will automatically execute in all the Queries and Mutations defined above when no filters are specified.

## FTP Files

### FTP Endpoint

```
ftp://ftp.xmltravelgate.com
```

Upon receiving your Onboarding Welcome Pack, you will be granted access credentials to the FTP server. In the event that you need assistance or have not received your credentials, kindly raise a ticket on our [Help Center](https://app.travelgatex.com/tickets) to obtain your FTP credentials and initiate your journey.

### Directory Format

The structure of the directory should be in the below format, all files should be inside this directory:

```
/F0_0000/HotelX_0000/
```

F[Folder code]_[Unique code]
* Folder code: corresponds to the folder number.
* Unique code: corresponds to the folder unique code in our system.

HotelX_[Unique code]
* Unique code: corresponds to the HotelX unique code in our system.

Example: 
````
/F0_1781/HotelX_1790
```` 

### Update FTP Data

To update an FTP file, follow these simple steps:

1. **Upload the File:**
   - Upload the file with the correct name, depending on its purpose.

2. **Wait for Processing:**
   - Once you've uploaded the file, our system will take care of the rest.
   - We'll automatically add the "_processed" tagline to the end of the file name when the processing is complete.

   For example, if you uploaded a file for hotel mapping with the name:
   ```
   SourceContext_DestinationContext_hotel_map_.csv
   ```

   After our system processes it, it will look like this:
   ```
   SourceContext_DestinationContext_hotel_map_processed.csv
   ```

3. **Updating the File:**
   - If you need to update the information in the file, simply delete the old file.
   - Upload the new file with the updated information, using the correct name.
   - You don't need to add the "_processed" tagline to the name; we'll take care of that on our end.

That's it! Updating FTP files is as easy as that.


### Delete FTP Data

To delete all the information stored in our system, follow these straightforward steps:

1. Prepare an empty file:

- Create a new file with empty content, including only the headers.
- Ensure that the file structure, such as column headers, remains intact.

2. Load the empty file in the FTP folder.

That's it! By replacing the existing data with an empty file containing headers only, you effectively delete all the information previously loaded into our system.


## How to execute a plugin

A plugin execution can be specified in any request’s HotelSettingsInput and it must specify in which step it should be executed. The plugin type and name are mandatory in order to identify a plugin instance.

[ añadir ejemplo ]