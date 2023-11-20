---
sidebar_position: 5
---

# Specific Stop Sales

Distribution Rules files offer the ability to create a range of rules. In particular, through specific stop sales rules, you will be able to define specific stop sales by differente conditions. 


## Create and Upload your Specific Stop Sales Rules File

To get started, create your specific stop sales rules file in the correct format and then upload it to your FTP account. We've provided a template file below ⬇️ to help you with this process. Just click on the file name, add your rules, save it in CSV format, and then upload it to the corresponding folder in your FTP.


```mdx-code-block
<BrowserWindow>

📁F0  _0000  
&nbsp;&nbsp;&nbsp;&nbsp; 📁HotelX  _0000  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📁Rules  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **📄[Rules_SpecificStopSales.csv](https://storage.travelgate.com/docs/Rules_SpecificStopSales.csv)**  

</BrowserWindow>
```


### File Format Specification

* **File Name:** Rules_SpecificStopSales.csv
* **Directory:** F0\_0000/HotelX\_0000/Rules
* **Delimiter:** Hashtag (`#`)
* **Data:**
   * **For All or Specific Agencies (mandatory)**: Defines if the rule is specific for a list of concret agencies or if it applies to all agencies.
      * **`0`**: All agencies.
      * **`1`**: List of specific agencies, in this case it is mandatory to receive a list of items, a list of agency codes separated with `;`(e.g. 1|Agency1;Agency2#).
   * **Type of Cancellation Policies (mandatory)**: 
      * **`0`**: All (NRF + RF).
      * **`1`**: Only No refundable (NRF).
      * **`2`**: Only Refundable (RF).
   * **Rate Type (mandatory)**: 
      * **`0`**: All (B2C + B2B).
      * **`1`**: Only B2C.
      * **`2`**: Only B2B.
   * **For All, Direct, Third Party or Concrete providers (mandatory)**: Defines if the rule is specific for a list of concrete providers or if it applies to all providers or only to direct or third party providers. 
      * **`0`**: All providers.
      * **`1`**: List of concrete providers. In this case it is mandatory to receive a list of items, a list of provider codes separated with `;`(e.g. #1|Provider1;Provider2#).
      * **`2`**: Only all Third Party providers.
      * **`3`**: Only all Direct providers.
   * **For All or a List of Concrete Hotels (and from countries, cities, chains or destinations) (mandatory)**: Defines if the rule is specific for a list of concrete hotels (and from countries, cities, chains or destinations) or if it applies to all hotels. 
      * **`0`**: All hotels.
      * **`1`**: List of hotels. In this case it is mandatory to receive a list of items, a list of hotel codes separated with `;` (e.g. #1|Hotel1;Hotel2#).
      * **`2`**: Hotels from a list of countries. In this case it is mandatory to receive a list of items, a list of country codes separated with `;`. In ISO 3166-1 alpha-2 code format (e.g. #2|FR;PT#).
      * **`3`**: Hotels from a list of cities. In this case it is mandatory to receive a list of items, a list of city codes separated with `;` (e.g. #3|City1;City2#).
      * **`4`**: Hotels from a list of chains. In this case it is mandatory to receive a list of items, a list of chain codes separated with `;` (e.g. #4|Chain1;Chain2#).
      * **`5`**: Hotels from a list of destinations. In this case it is mandatory to receive a list of items, a list of destination codes separated with `;`. In ISO 3166-1 alpha-2 code format (e.g. #5|SP;PT#).
      * **`6`**: Hotels from a list of groups of destinations. In this case it is mandatory to receive a list of items, a list of group of destination codes separated with `;` (e.g. #6|Group1;Group2#).
   * **For All or a List of Concrete Markets (mandatory)**: Defines if the rule is specific for a list of concrete markets or if it applies to all markets. 
      * **`0`**: All markets.
      * **`1`**: List of markets. In this case it is mandatory to receive a list of items, a list of market codes separated with `;`(e.g. #1|ES;FR#).
   * **For All or Concrete Meal Plans (mandatory)**: Defines if the rule is specific for a list of concrete meal plans or if it applies to all meal plans.
      * **`0`**: All meal plans.
      * **`1`**: List of meal plans. In this case it is mandatory to receive a list of items, a list of meal plan codes separated with `;`(e.g. #1|MealPlan1;MealPlan2#).
   * **For Any or Concrete Check-in Dates (mandatory)**: Defines if the rule is specific for a concrete range of check-in dates or if it applies to any date.
      * **`0`**: All check-in dates.
      * **`1`**: Range of check-in dates. In this case it is mandatory to receive a list of items, a range of check-in dates, from - to, separated with `;`(e.g. #1|yyyy-mm-dd;yyyy-mm-dd#).
   * **For Any or Concrete Booking Dates (mandatory)**: Defines if the rule is specific for a concret range of booking dates or if it applies to any date.
      * **`0`**: All booking dates.
      * **`1`**: Range of booking dates. In this case it is mandatory to receive a list of items, a range of booking dates, from - to, separated with `;`(e.g. #1|yyyy-mm-dd;yyyy-mm-dd#).
   * **Description of the Rule (mandatory)**
   * **Release**: Defines the release. A zero value indicates that there is no release applied. By default it is considered 0 if this field does not exist or it is not defined.
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

* If all the data on the file is correct then the existing definition of Specific Stop Sales is removed and file’s data is inserted into the system to define the new Specific Stop Sales.
* If there is any problem with the file or its data then the load is cancelled and the existing definition of Specific Stop Sales is not removed.

:::