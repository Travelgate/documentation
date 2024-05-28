---
sidebar_position: 2
---

# Hotel-X Single Mode and Multimode Search
## Exploring the Features of Single mode and Multimode Search in Hotel-X API

Our Hotel-X Pull Buyers API is packed with lots of features and one of them is the possibility to chose between searching in a single mode vs searching in a multi mode.

### Single Mode Search🌟

* **What does Single Mode mean?**  
  In Hotel-X, Single Mode refers to the capability for Partners to conduct a single search per Seller at any given time (default mode).
* **How does Hotel-X Single Mode work?**  
    1. Check the tags added to your Hotel- X Search Query and make sure you include the **HotelXFilterSearchInput**. You will find more detailed information on how to filter your searches by Hotel-X access code [here](/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests).
    1. **Add the access code** of the Seller you wish to query in your HotelXFilterSearchInput.
    
:::note
You should use the [Seller context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) in your Search requests unless you have previously uploaded your [mapping files to our FTP](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).
:::

### Multimode Search🚀

* **What does Multimode mean?**  
In Hotel-X, Multimode refers to the capability for Partners to search multiple Sellers at the same time in just one request.

* **How does Hotel-X Multimode work?**
    1. To search in Multimode, you should start by uploading your [hotel mapping files](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping) to your FTP.
    1. Once the files are processed, you'll have the ability to search multiple Sellers simultaneously by using your [own context](/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials) and hotel codes. You can search Multimode in two ways:
        1. **Specifying the Hotel-X access codes** in your the filterSearch node: the query will only be sent to the accesses specified:
            ```
                    "filterSearch": {
                            "access": {
                                "includes": [
                                    "xx"
                                ]
                            }
                        }
            ```
        1. **Not specifying any access codes**: The Query will be sent to all the accesses connected to your account as Buyer, taking into account the following information:
            + The request will be sent only to the Sellers' accesses for whom you have already uploaded the [mapping file](/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping).
           + This query will also check the value of the "testMode" tag in your Query in order to request only the test or production accesses.

