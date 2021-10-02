Cypress.Commands.add('list_doctors_by', (baseUrl, parametro, value, token) => {
    cy.request({
        method: 'GET',
        url: baseUrl + '/ums/api/v1/doctors?' + parametro + value,
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json'
        },
        timeout: 120000,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('list_doctors_by_document_and_state', (baseUrl, document, state, token) => {
    cy.request({
        method: 'GET',
        url: baseUrl + '/ums/api/v1/doctors?document=' + document + '&' + 'documentState=' + state,
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/json'
        },
        timeout: 120000,
        failOnStatusCode: false
    })
})