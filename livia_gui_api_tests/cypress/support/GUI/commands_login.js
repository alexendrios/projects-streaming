// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//Locators telas de Login

/*const loginPageOne = require('../page_elements/Login/login_page_one_locators')
const loginPageOneN = new loginPageOne()

const loginPageTwo = require('../page_elements/Login/login_page_two_locators')
const loginPageTwoN = new loginPageTwo()

const loginPageThree = require('../page_elements/Login/login_page_three_locators')
const loginPageThreeN = new loginPageThree()*/


//const Hospital = ['#multiple-limit-tags-option-1', '#multiple-limit-tags-option-2', '#multiple-limit-tags-option-3', '#multiple-limit-tags-option-4', '#multiple-limit-tags-option-5', '#multiple-limit-tags-option-7', '#multiple-limit-tags-option-8', '#multiple-limit-tags-option-9'];
const loginPagePro = require('../page_elements/login_page_pro')
const loginPageProN = new loginPagePro()

const selPlataformaPagePro = require('../page_elements/sel_plataforma_page_pro')
const selPlataformaPageProN = new selPlataformaPagePro()

const homeMedPagePro = require('../page_elements/home_med_page_pro')
const homeMedPageProN = new homeMedPagePro()

const homeOpPagePro = require('../page_elements/home_op_page_pro')
const homeOpPageProN = new homeOpPagePro()

Cypress.Commands.add('acessar_url', { timeout: 7000 }, (url) => {
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear()
      win.onerror = null
    }
  })
})

Cypress.Commands.add('login', { timeout: 7000 }, (cpf, senha) => {
  cy.get(loginPageProN.cpCpf)
    .type(cpf)

  cy.get(loginPageProN.cpSenha)
    .type(senha)

  cy.get(loginPageProN.btEntrar)
    .click()

  //cy.valida_termos_de_uso()
})

Cypress.Commands.add('login_coa_meu_consult', { timeout: 7000 }, (cpf, senha) => {
  cy.get(loginPageProN.cpCpf)
    .type(cpf)

  cy.get(loginPageProN.cpSenha)
    .type(senha)

  cy.get(loginPageProN.btEntrar)
    .click()

  //cy.valida_termos_de_uso()

  cy.get(selPlataformaPageProN.lkAtendMeuConsul)
    .click()
})

Cypress.Commands.add('login_coa', { timeout: 7000 }, (cpf, senha) => {
  cy.get(loginPageProN.cpCpf)
    .type(cpf)

  cy.get(loginPageProN.cpSenha)
    .type(senha)

  cy.get(loginPageProN.btEntrar)
    .click()

  //cy.valida_termos_de_uso()

  cy.get(selPlataformaPageProN.lkAtendCoa)
    .click()
})

Cypress.Commands.add('login_sem_senha', { timeout: 7000 }, (cpf, senha) => {
  cy.get(loginPageProN.cpCpf)
    .type(cpf)

  cy.get(loginPageProN.cpSenha)
    .type(senha)

  cy.get(loginPageProN.cpSenha)
    .clear()

  cy.get(loginPageProN.btEntrar)
    .click()
})

Cypress.Commands.add('login_sem_cpf', { timeout: 7000 }, (cpf, senha) => {
  cy.get(loginPageProN.cpCpf)
    .type(cpf)

  cy.get(loginPageProN.cpCpf)
    .clear()

  cy.get(loginPageProN.cpSenha)
    .type(senha)


  cy.get(loginPageProN.btEntrar)
    .click()
})

//comando para reconhecer nome da tela inicial
Cypress.Commands.add('val_nome_tela_inicial_med', { timeout: 7000 }, (nomeTela) => {
  cy.get(homeMedPageProN.txNomeTela)
    .should('have.text', nomeTela)
})

Cypress.Commands.add('val_nome_tela_inicial_op', { timeout: 7000 }, (nomeTela) => {
  cy.get(homeOpPageProN.txNomeTela)
    .should('have.text', nomeTela)
})

//comando para destacar o nome da tela
Cypress.Commands.add('destaca_nome_tela_home_med', { timeout: 7000 }, () => {
  cy.get(homeMedPageProN.txNomeTela)
    .then($button => {
      $button.css('border', '1px solid magenta')
    })
})

Cypress.Commands.add('destaca_nome_tela_home_op', { timeout: 7000 }, () => {
  cy.get(homeOpPageProN.txNomeTela)
    .then($button => {
      $button.css('border', '1px solid magenta')
    })
})

Cypress.Commands.add('destaca_nome_user', { timeout: 7000 }, () => {
  cy.get(homeMedPageProN.nomeUserLogado)
    .then($button => {
      $button.css('border', '1px solid magenta')
    })
})
////////////////////////////////////////////////////////////////////
Cypress.Commands.add('valMens_erroCpf', { timeout: 7000 }, (mensCpfInv) => {
  cy.get(loginPageProN.msgErroCpf)
    .should('have.text', mensCpfInv)
})

Cypress.Commands.add('valMens_erroCpfSenha', { timeout: 7000 }, (menCpfSenhaInv) => {
  cy.get(loginPageProN.msgErroSenha)
    .should('have.text', menCpfSenhaInv)
})

Cypress.Commands.add('valMens_errSenhaVazia', { timeout: 7000 }, (menSenhaVazia) => {
  cy.get(loginPageProN.msgSenhaSemPreencher)
    .should('have.text', menSenhaVazia)
})