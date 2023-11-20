---
sidebar_position: 2
---

# General Rules

Distribution Rules files offer the ability to create a range of rules. In particular, through general rules, you gain the flexibility to customize rules and filters according to a diverse set of conditions. 


## Create and Upload your General Rules File

To get started, create your general rules file in the correct format and then upload it to your FTP account. We've provided a template file below ⬇️ to help you with this process. Just click on the file name, add your rules, save it in CSV format, and then upload it to the corresponding folder in your FTP.


```mdx-code-block
<BrowserWindow>

📁F0  _0000  
&nbsp;&nbsp;&nbsp;&nbsp; 📁HotelX  _0000  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📁Rules  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **📄[Rules_GeneralRules.csv](https://storage.travelgate.com/docs/Rules_GeneralRules.csv)** 

</BrowserWindow>
```


### File Format Specification

* **File Name:** Rules_GeneralRules.csv
* **Directory:** F0\_0000/HotelX\_0000/Rules
* **Delimiter:** Hashtag (`#`)
* **Data:**
   * **Rule Type (mandatory)**:
      * **`COM`**: Comission/Markup. To define a comission to a set of agencies.
      * **`DEF_MAR`**: Default/Fixed Market. To define a default/fixed market to a set of agencies.
      * **`SEL_REL`**: Selling Release. To define a selling release to a set of agencies.
      * **`RATE`**: Rate Type. To define the rate type filter to a set of agencies.
      * **`CLO_REL`**: Closing Release. To define a closing release to a set of agencies.
      * **`FIL_NRF`**: Filter NRF. To define the NRF/RF filter to a set of agencies.
      * **`ALW_CUR`**: Allowed Currencies. To define a list of allowed currencies to a set of agencies.
      * **`FRC_CUR`**: Force Currency. To define if the currency on the RQ has to be forced to a set of agencies.
      * **`FIL_BIND`**: Filter Binding. To define the binding filter to a set of agencies.
      * **`CUR_EXC`**: Allow Currency Exchange. To define if currency exchange is allowed or not, and to define a set of currencies to accomplish.
      * **`ADD_MRK_PRC`**: Add Markup to Pricing. To define if we add the markup to the price after the pricing rules.
      * **`MAX_TQ`**: Max Time to Quote. To define the maximum amount of minutes between Availability and Quote.
      * **`MAX_TB`**: Max Time to Book. To define the maximum amount of minutes between Quote and Book.
      * **`MIN_COM`**: Minimum Selling Pricing Rules: To define a Minimum Selling Price and how to act in sellings with lower pricing. It can choosen to set the Minimum Selling Price value or to discard the selling.
   * **Type of Operation (mandatory)**
      * **`U`**: Update. Updates the rule’s current value removing any previous definition.
      * **`D`**: Delete. Removes the rule’s current value and sets it to its default value.
   * **Value (mandatory)**: The data in this field is mandatory when updating a rule value and must be empty when deleting a rule.
      * **COM**: Decimal value.
      * **DEF_MAR**: String value. It is the market.
      * **SEL_REL**: Integer value.
      * **RATE**: Integer value that has to be one of the folllowing: `0` (All, no filter) , `1` (Only B2B rates), or `2` (Only B2C rates).
      * **CLO_REL**: Integer value.
      * **FIL_NRF**: Integer value that has to be one of the folllowing: `0` (All, no filter) , `1` (Only NRF), or `2` (Only RF).
      * **ALW_CUR**: List of string, separated with `;`. It is a list of currencies (at least one).
      * **FRC_CUR**: Boolean value (true/false).
      * **FIL_BIND**: Integer value that has to be one of the folllowing: `0` (All, no filter) , `1` (Only binding prices), or `2` (Only not binding prices).
      * **CUR_EXC**: Complex value, it is composed of a **Type**, a **List of currencies** and a **List of countries and their admitted currencies** separated with `|`:
         * **Type**: `0` (Allow any currency exchange (you don’t have to add the list of currencies and countries)) , `1` (Do not allow exchange and apply filters), or `2` (Allow currency exchange but only to the given currencies).
         * **List of admitted currencies**: Example of line: CUR_EXC#U#1|*;GBP;USD#LIST#Agency1;Agency2
         * **List of countries and their admitted currencies**: CUR_EXC#U#1|*;GBP;USD|ES;EUR#LIST#Agency1;Agency2
      * **ADD_MRK_PRC**: 
         * **Values when set for agencies**: `-1` (Add markup to pricing) , `0` (Use general definition, default value), or `1` (Do not add markup to pricing).
         * **Values when set in general**: `-1` (Add markup to pricing, default value) , or `1` (Do not add markup to pricing).
      * **MAX_TQ**:
         * **Values when set for agencies**: `-1` (Not limit) , `0` (Use organization limit, default value), or `>0` (Defines the limit, integer, represents minutes).
         * **Values when set in general**: `-1` (No limit, default value) , or `>0` (Defines the limit,integer, represents minutes).
      * **MAX_TB**: 
         * **Values when set for agencies**: `-1` (Not limit) , `0` (Use organization limit, default value), or `>0` (Defines the limit, integer, represents minutes).
         * **Values when set in general**: `-1` (No limit, default value) , or `>0` (Defines the limit,integer, represents minutes).
      * **MIN_COM**: Complex value, it is composed of a **Type** and a **Value** separated with `;`:
         * **Type**: 
             * **Values when set for agencies**: `-1` (Use Organization Setting) , `0` (Do not set minimum), `1` (Define minimum and discard selling with lower pricing), or `2` (Define a minimum and apply it for sellings with lower pricing).
             * **Values when set in general**: `0` (Do not set minimum), `1` (Define minimum and discard selling with lower pricing), or `2` (Define a minimum and apply it for sellings with lower pricing).
         * **Value** (for agencies and in general): It is a decimal. Example of line: MIN_COM#U#2;5.2 - Type 2 and it is set a minimum of 5.2.
   * **General Rule or for Concrete Agencies (mandatory)**
      * **`GEN`**: In general. The rule will be set on the general settings and will affect all agencies (ADD_MRK_PRC, MAX_TQ, MAX_TB, MIN_COM can be a GEN).
      * **`LIST`**: A list of concrete agencies. Te rule will be set only to these agencies (All rules can be a LIST).
   * **List of agencies (mandatory)**: If the operation is defined for a list of agencies, this field must contain a list (it cannot be empty). If the operation is defined in general, this field must be empty. Each agency of the list has to be separated using the ; as separator.
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

* If there is any problem with the file or its data then the load is cancelled and no rules are modified.
* If a rule is not referenced on the file then its value is not modified (only rules explicitly referenced on the file are affected).
* If you want to set the default value of a rule you just have to delete that rule.

:::
