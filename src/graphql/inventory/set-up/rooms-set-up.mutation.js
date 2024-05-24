export const updateRoomsSetUpMutation =
`mutation ($input: InventoryRoomsSetupUpdateInput!) {
  inventory {
    updateRoomsSetup(roomsSetupUpdateInput: $input) {
      rooms {
        code
        master {
            id
            code
            name
        }
        active
        externalCode
        standard
        uses {
            numberOfGuests
            paxType
        }
      }
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`

export const updateRoomsSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rateCode": "BAR",
        "rooms": [
            {
                "code": "STD",
                "standard": 3
            }
        ]
    }
}`

export const createRoomsSetUpMutation =
`mutation ($input: InventoryRoomsSetupCreateInput!) {
  inventory {
    createRoomsSetup(roomsSetupCreateInput: $input) {
      rooms {
        code
        master {
            id
            code
            name
        }
        active
        externalCode
        standard
        uses {
            numberOfGuests
            minAge
            maxAge
            paxType
        }
      }
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`

export const createRoomsSetUpVariables =
`{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rateCode": "BAR",
        "rooms": [
            {
                "code": "STD",
                "masterCode": "STD",
                "active": true,
                "standard": 2,
                "uses": [
                    [
                        {
                            "numberOfGuests": 1,
                            "paxType": "ADULT"
                        }
                    ],
                    [
                        {
                            "numberOfGuests": 2,
                            "paxType": "ADULT"
                        }
                    ],
                    [
                        {
                            "numberOfGuests": 1,
                            "paxType": "ADULT"
                        },
                        {
                            "numberOfGuests": 1,
                            "paxType": "CHILD"
                        }
                    ],
                    [
                        {
                            "numberOfGuests": 1,
                            "paxType": "ADULT"
                        },
                        {
                            "numberOfGuests": 1,
                            "paxType": "INFANT"
                        }
                    ],
                    [
                        {
                            "numberOfGuests": 1,
                            "paxType": "ADULT"
                        },
                        {
                            "numberOfGuests": 1,
                            "paxType": "CHILD"
                        },
                        {
                            "numberOfGuests": 1,
                            "paxType": "INFANT"
                        }
                    ]
                ]
            }
        ]
    }
}`

export const deleteRoomsSetUpMutation =
`mutation ($input: InventoryRoomSetupDeleteInput!) {
  inventory {
    deleteRoomsSetup(roomsSetupDeleteInput: $input) {
      success
      adviseMessages {
        code
        description
        level
        external {
          code
          message
        }
      }
    }
  }
}`

export const deleteRoomsSetUpVariables =
    `{
    "input": {
        "clientCode": "CDOC",
        "supplierCode": "PDOC",
        "hotelCode": "2",
        "contextCode": "TGX_PUSH",
        "rateCode": "BAR",
        "roomCodes": ["STD"]
    }
}`