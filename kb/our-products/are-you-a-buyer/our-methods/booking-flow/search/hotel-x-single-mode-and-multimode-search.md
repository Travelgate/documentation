---
sidebar_position: 2
---

# Hotel-X Single Mode and Multimode Search
## Exploring the Features of Single mode and Multimode Search in Hotel-X API

Our Hotel-X Pull Buyers API is packed with lots of features and one of them is the possibility to chose between searching in a single mode vs searching in a multi mode.

### Single Mode Search🌟

<ins>**What does Single Mode mean?**</ins>💡  
In Hotel-X, Single Mode refers to the capability for Partners to conduct a single search per Seller at any given time (default mode).  

<ins>**How does Hotel-X Single Mode work?**</ins>🔎  
1. Check the tags added to your Hotel- X Search Query and make sure you include the **HotelXFilterSearchInput**. You will find more detailed information on how to filter your searches by Hotel-X access code [here](https://knowledge.travelgate.com/filter-search).
1. **Add the access code** of the desired Seller you wish to query in your HotelXFilterSearchInput.
>**Note that you should use the [Seller context](https://knowledge.travelgate.com/hotel-x-credentials) in your Search requests unless you have previously uploaded your [mapping files to our FTP](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/).**

### Multimode Search🚀
<ins>**What does Multimode mean?**</ins>💡
In Hotel-X, Multimode refers to the capability for Partners to search multiple Sellers at the same time in just one request.

<ins>**How does Hotel-X Multimode work?**</ins>🔎  
1. To search in Multimode, you should start by uploading your [hotel mapping files](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/) to your FTP.
1. Once the files are processed, you'll have the ability to search multiple Sellers simultaneously by using your [own context](https://knowledge.travelgate.com/hotel-x-credentials) and hotel codes. You can search Multimode in two ways:  
    - **Specifying the Hotel-X access codes** in your the filterSearch node: the query will only be sent to the accesses specified:    
   
        ```

            "filterSearch": {

                    "access": {

                        "includes": [

                            "xx",

                            "xxx",

                            "xxxx"

                        ]

                    }

                }

        ```
 
 
    - **Not specifying any access codes**: The Query will be sent to all the accesses connected to your account as Buyer, taking into account the following information:
        - The request will be sent only to the Sellers' accesses for whom you have already uploaded the [mapping file](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/mapping/).
    
        - This query will also check the value of the "testMode" tag in your Query in order to request only the test or production accesses.
    