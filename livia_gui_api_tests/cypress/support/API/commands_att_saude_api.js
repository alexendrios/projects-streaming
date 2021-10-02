Cypress.Commands.add('att_saude_api', (url, token, patientId, cpf) => {
    cy.request({
        method: 'POST',
        url: url + "/api/attendance",
        headers: {
            'Authorization': 'Bearer ' + token,
            // 'Bearer ' + 
            //'authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5EZzFNamcwTWpJNU5qYzNNRFUyTUE9PSIsImZ0aSI6Ik1qZ3dNVE16TWpjNE1Eaz0iLCJpYXQiOjE2MDUyNjY5NjksImV4cCI6MTYwNTM1MzM2OSwiaXNzIjoiSFRDIn0.gFaTns859JaplTWAqhNPt3SP_JcYfetc6ch9qg3WXLhTUdT9n1e1zW4WQIBI11lDMgNG1kmvF_OsmQYRfVovg2yI3NGVEmS8YbHXLMV7R8lzwT5mfZXuklawlINHI1aYW0BcaEou_clpKtG98HF5pAxJos9qYmKeLMlQFrKats8REjiq7DBlx_06oOIkOeVd28ktSFF6VesJNKRFIefdpYCf9dM48a9AflpqcFZ6pAUT0gN5pWxzzKjlCVOLmPwF-vAEwAa1-8c39uj86Uz5IxQmNrzjWWhyxsJ1ikK7iPFVOA_NlTW97aDp8pzEM-ZzhlJfX2jPSYXanAlX_TM5Ybn3JQx79WZBm-OWZWTV8QZ33F7mHr3xZhVkj5tHFGDWMG5OQoTnb8MSV5X4kqqbzBrCUm9wl__kJB57PmJ7bAUiPXAmd5qV03pMsqr2ozEbDOcRo2BWNU4TDzUjSTvZhluABCK3rQdP5SdYavhcXSl2V57KkzYIc1zsJFKstWrLh5b5I2CTcdweA8pm_eN_lTUebFazwvQajgteO2J7T6iPL0nOaQyRYO36_y3QzzZV2jeB4xigh5RBNVufeQl-mMVVrZk8QNaADEARVpyadgfenWU-tRaBpTHf8enjCVnrW9EBCfvHSXvQ4nwpHOgksC8tAMHffXODLDPeEv9B_CI',
            'content-type': 'application/json'
        },
        body:
        {
            "patientId": patientId,
            "patientData": {
                "healthPlan": "Cabesp",
                "memberNumber": "257319010455",
                "birthDate": "01/01/1985",
                "federalTaxId": cpf,
                "gender": "male",
                "name": "Meu perfil",
                "cep": "18085540",
                "email": "",
                "phone": "11996583033",
                "ansId": "",
                "healthProviderId": "",
                "symptoms": ["Cansaço"],
                "clinicConditions": ["Problemas cardíacos"]
            },
            timeout: 120000,

        }
    })
})
