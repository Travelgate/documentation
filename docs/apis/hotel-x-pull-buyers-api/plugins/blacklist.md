---
sidebar_position: 2
---

# Blacklist

Blacklist plugin allows you to ignore specific hotel codes during search execution by discarding blacklisted options based on uploaded files. This implies that none of the hotels on the blacklist will be requested from the supplier. With the ability to exclude entire suppliers using customizable rules, you can streamline results and enhance query efficiency.

### File format



### Sample files

[ añadir ejemplo ]

### How to execute Blacklist plugin

In order to use the plugin, you should send the following json in the query variables.

	"plugins": [
			{
				"step": "REQUEST_ACCESS",
				"pluginsType": {
					"name": "blacklist",
					"type": "PRE_STEP"
				}
			}
		]

      
To apply specific rule, you should add client token in our request


	"settings": {
		"context": null,
		"client": "xtg",
		"auditTransactions": true,
		"testMode": true,
		"clientTokens": [
			"testToken"
		],
		"plugins": [
            {
				"step": "REQUEST_ACCESS",
				"pluginsType": {
					"name": "blacklist",
					"type": "PRE_STEP"
				}
			}
        ]
	}