const MEMEDPagePro = require('../page_elements/MEMED_page_pro.js')
const MEMEDPageProN = new MEMEDPagePro()

Cypress.Commands.add('entrar_iframe_clicar_elemento', { timeout: 7000 }, (elemento) => {
    cy.get(MEMEDPageProN.iframeMEMED).then(function ($ele) {
        var ifele = $ele.contents().find(elemento)
        cy.wrap(ifele).click()
    })
})

Cypress.Commands.add('entrar_iframe_digitar', { timeout: 7000 }, (elemento, medicamento) => {
    cy.get(MEMEDPageProN.iframeMEMED).then(function ($ele) {
        var ifele = $ele.contents().find(elemento)
        cy.wrap(ifele).type(medicamento)
    })
})

Cypress.Commands.add('entrar_iframe_validar_telefone', { timeout: 7000 }, (elemento, validacao) => {
    cy.get(MEMEDPageProN.iframeMEMED).then(function ($ele) {
        var ifele = $ele.contents().find(elemento)
        cy.wrap(ifele).should('have.value', validacao)
    })
})

Cypress.Commands.add('entrar_iframe_validar_nome_paciente', { timeout: 7000 }, (elemento, nome) => {
    cy.get(MEMEDPageProN.iframeMEMED).then(function ($ele) {
        var ifele = $ele.contents().find(elemento)
        cy.wrap(ifele).should('contain.text', nome)
    })
})