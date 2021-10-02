Cypress.Commands.add('consBD_user_nome', { timeout: 7000 }, (nome) => {
    cy.task("dbQuery", { "query": "select count(*) from \"user\" where name like '%" + nome + "%' and user_type = 'DOCTOR'" })

});

Cypress.Commands.add('consBD_user_crm', { timeout: 7000 }, (crm) => {
    cy.task("dbQuery", { "query": "select count(*) from \"doctor\" where \"document\" like '%" + crm + "%'" })
})

Cypress.Commands.add('consBD_user_crm_uf', { timeout: 7000 }, (crm, uf) => {
    cy.task("dbQuery", { "query": "select count(*) from \"doctor\" where \"document\" like '%" + crm + "%' and \"document_state\" like '%" + uf + "%'" })
})

Cypress.Commands.add('consBD_user_doctor', { timeout: 7000 }, (uf) => {
    cy.task("dbQuery", { "query": "SELECT count(*) AS \"count\" FROM ( SELECT \"Doctor\".\"id\", \"Doctor\".\"document_org\" AS \"documentOrg\", \"Doctor\".\"document\", \"Doctor\".\"document_state\" AS \"documentState\", \"Doctor\".\"specialty\", \"Doctor\".\"user_id\", \"User\".\"id\" AS \"User.id\", \"User\".\"name\" AS \"User.name\", \"User\".\"email\" AS \"User.email\", \"User\".\"federal_tax_id\" AS \"User.federalTaxId\", \"User\".\"phone_number\" AS \"User.phoneNumber\", \"User\".\"first_access\" AS \"User.firstAccess\", \"User\".\"date_of_birth\" AS \"User.dateOfBirth\", \"User\".\"user_type\" AS \"User.userType\" FROM \"doctor\" AS \"Doctor\" INNER JOIN \"user\" AS \"User\" ON \"Doctor\".\"user_id\" = \"User\".\"id\" WHERE \"Doctor\".\"document_state\" = '" + uf + "' ORDER BY \"User\".\"name\" ASC LIMIT 100 OFFSET 0) AS \"sub\"" })
})

Cypress.Commands.add('consBD_user_operator', { timeout: 7000 }, (uf) => {
    cy.task("dbQuery", { "query": "select count(*) from \"user\" JOIN \"doctor\" ON \"user\".id = \"doctor\".user_id where \"user\".user_type = 'OPERATOR' and \"doctor\".document_state = '" + uf + "'" })
})