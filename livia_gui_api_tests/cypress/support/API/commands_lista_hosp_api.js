Cypress.Commands.add('lista_hospitais', (baseUrl3) => {

    cy.request({
        method: 'GET',
        url: baseUrl3+'public/hospitais/', // baseUrl is prepended to url
        headers: {
            //'Authorization': Bearer,
            'content-type': 'application/json'
        },
        body: {

        }
    })
})