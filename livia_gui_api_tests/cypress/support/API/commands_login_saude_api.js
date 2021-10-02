Cypress.Commands.add('login_saude_api', (url_saude_api, password, cpf) => {

    cy.request({
        method: 'POST',
        // url: "https://www.staging.liviasaude.com.br/api/user/api/v1/login",
        url: url_saude_api + "/api/user/api/v1/login",
        headers: {
            //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNpby5hZ3VpYXJAZGFzYS5jb20uYnIiLCJwZXJmaWwiOlsiUk9MRV9BRE1JTiJdLCJzdWZpeCI6Img5aiIsImlhdCI6MTU3NDE2NzU2NywiZXhwIjoxNjA1NzAzNTY3fQ.dV6DZU-5iqnzBU0pX_s7Mba3ldKtNAK55FmwGElX0UI',
            //  'content-type': 'application/json'
        },
        body:
        {
            password: password,
            federalTaxId: cpf
        },
        timeout: 120000,
        failOnStatusCode: false
    })
})

