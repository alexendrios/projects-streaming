const homeOpPagePro = require('../page_elements/home_op_page_pro')
const homeOpPageProN = new homeOpPagePro()

Cypress.Commands.add('busca_prof_nome', { timeout: 7000 }, (nome) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()
})

Cypress.Commands.add('busca_prof_crm', { timeout: 7000 }, (crm) => {
    cy.get(homeOpPageProN.rbCrm)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(crm)

    cy.get(homeOpPageProN.btBuscar)
        .click()
})

Cypress.Commands.add('limpar_busca_prof', { timeout: 7000 }, () => {

    cy.get(homeOpPageProN.btLimparBusca).eq(0)
        .click()
})

Cypress.Commands.add('buscar_por_nome_alterar_para_crm', { timeout: 7000 }, (nome) => {

    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.rbCrm)
        .click()
})