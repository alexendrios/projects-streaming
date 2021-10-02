Cypress.Commands.add('val_mens_quant', { timeout: 7000 }, (quant, msgProfEncontrados, msgUmPro, msg2ouMaisPro) => {
    if (quant > 1) {
        cy.get(msgProfEncontrados)
            .should('have.text', quant + msg2ouMaisPro)
    }
    else {
        cy.get(msgProfEncontrados)
            .should('have.text', quant + msgUmPro)
    }
})

// Cypress.Commands.add('valida_termos_de_uso', { timeout: 7000 }, () => {
//     if(Cypress.$('#scroll-terms').length > 0) {
//       cy.get('#scroll-terms').scrollTo('bottom')
//       cy.get('span.MuiButton-label').contains('Concordo').click()
//     }
// })


