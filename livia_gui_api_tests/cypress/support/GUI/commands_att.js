const homeMedPagePro = require('../page_elements/home_med_page_pro')
const homeMedPageProN = new homeMedPagePro()

const medicoPagePro = require('../page_elements/pagina_inicial_medico_page_pro')
const medicoPageProN = new medicoPagePro()

Cypress.Commands.add('inicia_atendim_COA', { timeout: 15000 }, () => {
  cy.get(homeMedPageProN.btProxPac).click()

  cy.get(medicoPageProN.btIniciaAtend).click()



  cy.get(medicoPageProN.btIniciarAgora, { timeout: 15000 }).click()

  

  cy.get(medicoPageProN.btEncerrar).click()

  

  cy.get(medicoPageProN.btConfEnc).click()

})


Cypress.Commands.add('finaliza_atendim_COA_tel', { timeout: 12000 }, () => {

  cy.get(medicoPageProN.btEncerraAtend).click()

  cy.get(medicoPageProN.rbOpDialog).eq(0).click()

  cy.get(medicoPageProN.btFinalizar).eq(0).click()

})
