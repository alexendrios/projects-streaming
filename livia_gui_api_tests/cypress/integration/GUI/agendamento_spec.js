/// <reference types="Cypress" />

describe('Agendamento presencial', () => {
    var faker = require('faker');
    var nome = faker.name.findName();
    let tel = '11999999999';
    let dtNasc = '10101990';
    var convenio = faker.name.findName();
    var plano = faker.name.findName();
    var numCart = faker.random.number();
    const ncpf = 16268680006

    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
    })
    afterEach(() => {
        cy.screenshot()
    })

    it('presencial com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(Cypress.env('nome_logado_med'))

        cy.cadastrar_agendamento_presencial(nome, ncpf, tel, dtNasc, convenio, plano, numCart)

    });

    it('remota com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(Cypress.env('nome_logado_med'))

        cy.cadastrar_agendamento_remota(nome, ncpf, tel, dtNasc, convenio, plano, numCart)

    });

    it('agendamento para data futura', () => {
        //TODO fazer
    });

});