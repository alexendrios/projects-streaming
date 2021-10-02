Cypress.Commands.add('forgot_password', (baseUrl, email) => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/ums/api/v1/account/forgot-password',
        body:
        {
            email: email,
        },
        resp: []
    })
})