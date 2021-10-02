Cypress.Commands.add('list_users', (baseUrl, userid) => {
    cy.request({
        method: 'GET',
        url: baseUrl + '/ums/api/v1/users/' + userid,
        timeout: 120000,
        failOnStatusCode: false
    })
})