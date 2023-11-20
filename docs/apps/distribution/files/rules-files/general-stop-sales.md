---
sidebar_position: 4
---

# General Stop Sales

Distribution Rules files offer the ability to create a range of rules. In particular, through general stop sales rules, you will be able to define general stop sales by differente conditions. 


## Create and Upload your General Stop Sales Rules File

To get started, create your general stop sales rules file in the correct format and then upload it to your FTP account. We've provided a template file below ⬇️ to help you with this process. Just click on the file name, add your rules, save it in CSV format, and then upload it to the corresponding folder in your FTP.


```mdx-code-block
<BrowserWindow>

📁F0  _0000  
&nbsp;&nbsp;&nbsp;&nbsp; 📁HotelX  _0000  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📁Rules  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **📄[Rules_GeneralStopSales.csv](https://storage.travelgate.com/docs/Rules_GeneralStopSales.csv)**  

</BrowserWindow>
```


### File Format Specification

* **File Name:** Rules_GeneralStopSales.csv
* **Directory:** F0\_0000/HotelX\_0000/Rules
* **Delimiter:** Hashtag (`#`)
* **Data:**
   * **Entity of the Stop Sale (mandatory)**: Defines the entity of the stop sale. It may be one of the following types:
      * **`PRV`**: Provider Blacklist. If you wish to discard all the product of one or more providers.
      * **`MRK`**: Market Blacklist. If you wish to prevent the sales for specific markets (Country ISO-2).
      * **`CHA`**: Chain Blacklist. If you wish to prevent the sales for specific chains.
      * **`COU`**: Country Blacklist. If you wish to prevent the sales for specific countries (Country ISO-2).
      * **`CIT`**: City Blacklist. If you wish to prevent the sales for specific cities.
      * **`HOT`**: Hotel Blacklist. If you wish to prevent the sales for specific hotels.
      * **`DES`**: Destination Blacklist. If you wish to prevent the sales for specific destinations.
      * **`DESGR`**: Destination Group Blacklist. If you wish to prevent the sales for specific destination groups.
   * **Type of Operation (mandatory)**: 
      * **`U`**: Update, updates the blacklist setting the new values (and removing any previous BL definition).
      * **`D`**: Delete, removes the blacklist from the system.
   * **Entities Included into the blacklist (mandatory)**: The data in this field is mandatory when updating a rule value and must be empty when deleting a rule.
      * **PRV**: In the case that the rule is applied for the entity Provider, then in this field there are 2 specific values that can be used:
          * @ALLDIRECT@: Rule is applied for all direct providers.
          * @ALLEXTERNAL@: Rule is applied for all external providers.
   * **For All or Concrete Agencies (mandatory)**: Defines if the blacklist is applied over all the agencies or only for a list of agencies.
      * **`ALL`**: All the agencies.
      * **`LIST`**: A list of concrete agencies.
   * **List of Agencies (mandatory)**: List of agencies for with the blacklist is applied. If the operation is performed for a specific set of agencies, this field must contain a list; If the operation is executed for all agencies, this field must be empty.
* **Note:**
   * The first line is not a header line: it contains data directly.
   * The data of the fields is not encapsulated by " or any other character.
   * Each line represents a room.
   * Any blank line will be skipped.
   * If a field’s data is not mandatory and we don’t want to set it then we just keep it empty: e.g. …##…
   * The file and its data have to be encoded using UTF-8. Otherwise there can be stored strange characters.

<details>
    <summary>📹 Learn how to change the format of the csv file in order to edit and save it</summary>
    <div>
        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
</details>


:::tip TAKE INTO CONSIDERATION

* If all the data on the file is correct then the existing definition of General Stop Sales is removed and file’s data is inserted into the system to define the new General Stop Sales.
* If there is any problem with the file or its data then the load is cancelled and the existing definition of “General Stop Sales” is not removed.

:::
