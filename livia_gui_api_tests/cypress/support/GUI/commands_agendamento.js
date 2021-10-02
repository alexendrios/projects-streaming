const homeOpPagePro = require('../page_elements/home_op_page_pro')
const homeOpPageProN = new homeOpPagePro()

const agendamentoPagePro = require('../page_elements/agendamento_page_pro')
const agendamentoPageProN = new agendamentoPagePro()

const agendaPagePro = require('../page_elements/agenda_page_pro')
const agendaPageProN = new agendaPagePro()

Cypress.Commands.add('cadastrar_agendamento_presencial', { timeout: 7000 }, (nome, cpf, tel, dtNasc, convenio, plano, carteirinha) => {
    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.cpNome)
        .type(nome)

    cy.get(agendamentoPageProN.cpCpf)
        .type(cpf)

    cy.get(agendamentoPageProN.cpTel)
        .type(tel)

    cy.get(agendamentoPageProN.cpDataNasc)
        .type(dtNasc)

    cy.get(agendamentoPageProN.cpConvenio)
        .type(convenio)

    cy.get(agendamentoPageProN.cpPlano)
        .type(plano)

    cy.get(agendamentoPageProN.cpNumCart)
        .type(carteirinha)

    cy.get(agendamentoPageProN.cpData)
        .click()

    cy.get(agendamentoPageProN.opDiaHabilitado)
        .eq(0)
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.cbHorario, { force: true })
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.opHorario, { force: true })
        .click()

    cy.get(agendamentoPageProN.rbConsPresencial)
        .click()

    cy.get('input[value="LOCAL"]')
        .should('be.checked', true)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()

    cy.get('div[class^="MuiPaper-root MuiDialog-paper"] > div > div')
        .eq(5)
        .should('have.text', 'Tipo da consulta: Presencial')

    cy.get(agendamentoPageProN.btConfirmaAgendamento)
        .click()

    cy.get('div[class^="MuiPaper-root"] > div > h2')
        .should('have.text', 'Consulta agendada')

    cy.get(agendamentoPageProN.btFechar)
        .click()
})

Cypress.Commands.add('cadastrar_agendamento_remota', { timeout: 7000 }, (nome, cpf, tel, dtNasc, convenio, plano, carteirinha) => {
    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.cpNome)
        .type(nome)

    cy.get(agendamentoPageProN.cpCpf)
        .type(cpf)

    cy.get(agendamentoPageProN.cpTel)
        .type(tel)

    cy.get(agendamentoPageProN.cpDataNasc)
        .type(dtNasc)

    cy.get(agendamentoPageProN.cpConvenio)
        .type(convenio)

    cy.get(agendamentoPageProN.cpPlano)
        .type(plano)

    cy.get(agendamentoPageProN.cpNumCart)
        .type(carteirinha)

    cy.get(agendamentoPageProN.cpData)
        .click()

    cy.get(agendamentoPageProN.opDiaHabilitado)
        .eq(0)
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.cbHorario, { force: true })
        .click()

    cy.wait(1500)
    cy.get(agendamentoPageProN.opHorario, { force: true })
        .click()

    cy.get('input[value="REMOTE"]')
        .should('be.checked', true)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()

    cy.get('div[class^="MuiPaper-root MuiDialog-paper"] > div > div')
        .eq(5)
        .should('have.text', 'Tipo da consulta: Telemedicina')

    cy.get(agendamentoPageProN.btConfirmaAgendamento)
        .click()

    cy.get('div[class^="MuiPaper-root"] > div > h2')
        .should('have.text', 'Consulta agendada')

    cy.get(agendamentoPageProN.btFechar)
        .click()
})