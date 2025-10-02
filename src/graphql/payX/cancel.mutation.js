export const cancelMutation = 
`mutation($whereInput:VccCancelInput!,$settingInput:VccSettingsInput!){
    payX{
        cancel(input:$whereInput, settings:$settingInput){
            cardDetail{
                status
                id
                type
            }
            adviseMessage{
                code
                description
                level
                external{
                    code
                    message
                }
                correlationID
            }
        }
    }
}`



export const cancelVariables = 
`{
    "whereInput":{
        "virtualCreditCardID":"123456789"
    },
    "settingInput":{
         "accessCode":"0",
         "clientName":"hotxdoc"
    }
}`