---
sidebar_position: 3
---

# Email

This method facilitates the retrieval of all the emails set up within your hotels.

## Request

```html
{
    "criteria": {
        "hotels": [
            "HotelCode1",
            "HotelCode2"
        ]
    },
    "settings": {
        "supplier": "INVENTORY SUPPLIER CODE",
        "client": "BUYER INVENTORY CODE",
        "authentication": {
            "userName": "***********",
            "password": "***********"
        },
        "timeout": "00:00:15"
    }
}
```

### Request Data Breakdown

|         Element         | Rel |     Type     |                                Description                                |
|-----------------------|---|------------|-------------------------------------------------------------------------|
| criteria                | 1   |              |                                                                           |
| criteria/hotels         | 1   | Array String | List of the hotel codes that you want to retrieve the emails information. |
| settings                | 1   |              |                                                                           |
| settings/supplier       | 1   | String       | The inventory supplier code that you want to get the information.         |
| settings/client         | 1   | String       | Your inventory client code.                                               |
| settings/authentication | 1   |              |                                                                           |
| authentication/userName | 1   | String       | Your inventory user name.                                                 |
| authentication/password | 1   | String       | Your inventory password.                                                  |
| settings/timeout        | 1   | Time         | The maximum time (“hh:mm:ss”) that you will wait for our response.        |


## Response

After each request, Travelgate will process the data and provide you with a response. The response options include either **success** or an **error**.

### Success

```html
{
    "hotels": [
        {
            "code": "HotelCode1",
            "name": "Hotel One Name",
            "isActive": true,
            "mustSendNotification": true,
            "email": "hotel1@email.es",
            "emailNotification": "hotel1@email.es",
            "emailNotificationCC": "CarbonCopy@email.es",
            "emailNotificationInfo": "FromAddress@email.es"
        },
        {
            "code": "HotelCode2",
            "name": "Hotel Two Name",
            "isActive": true,
            "mustSendNotification": true,
            "email": "hotel2@email.es",
            "emailNotification": "hotel2@email.es",
            "emailNotificationCC": "CarbonCopy@email.es",
            "emailNotificationInfo": "FromAddress@email.es"
        }
    ]
}
```

#### Success Data Breakdown

| Element	                  | Rel | Type | Description					                                             |
| ---------------------------- | ----- | ------ | --------------------------------------------------------------------- |
| hotels  	| 1 	    |		Array      | 						                                                 |
| hotels/code 	| 1 	    |	 String       | Hotel's Inventory code |
| hotels/name 	| 1 	    |	 String       | Hotel's name |
| hotels/isActive 	| 1 	    |	 Boolean       | The hotel is active (true) or not (false) in your Inventory. |
| hotels/mustSendNotification 	| 1 	    |	 Boolean       | Inventory system has to send an email notification or not.|
| hotels/email 	| 1 	    |	 Boolean       | Default list of emails between commas for this hotel.|
| hotels/emailNotification 	| 1 	    |	 String       | List of emails between commas where Inventory system send the notifications for the present hotel.|
| hotels/emailNotificationCC 	| 1 	    |	 String       | List of emails between commas where Inventory system send a carbon copy email of the notification for the present hotel.|
| hotels/emailNotificationInfo 	| 1 	    |	 String       | List of emails between commas that Inventory system use as email from address in the notifications.|


### Error

If an error occurs during the request, the response should appear as follows:

```html
{
    "adviseMessages": [
        {
            "code": "BadRequest",
            "level": "Error",
            "description": "The Timeout field is required."
        }
    ]
}
```
#### Error Data Breakdown

| Element	                  | Rel | Type | Description					                                             |
| ---------------------------- | ----- | ------ | --------------------------------------------------------------------- |
| adviseMessages | 1 | Array| |
| adviseMessages/code | 1 | String | Error code  |
| adviseMessages/level| 1 | String | The posible values are Warning, Error, Info |
| adviseMessages/description | 1 | String | Brief description of the error |

<details>
    <summary>Error codes you could receive in the response while setting up and loading the product</summary>
    <div>
        <div>
         <table>
				<thead>
					<tr>
						<th>
							<strong>Error Code</strong>
						</th>
						<th>
							<strong>Error Description</strong>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>BadRequest</td>
						<td>Something is wrong with the request</td>
					</tr>
					<tr>
						<td>InternalError</td>
						<td>Something unexpected happened in our system</td>
					</tr>
					<tr>
						<td>Unauthorized</td>
						<td>You are not authorized to use the service or your credentials are wrong</td>
					</tr>
				</tbody>
			</table>
        </div>
    </div>
</details>

