/// <reference types="Cypress" />

let baseUrl = Cypress.config().baseUrl

const dataAtual = require('../../support/utility')
const dataAtualN = new dataAtual()

describe('Login', () => {


    let menCpfInv = "CPF inválido.";


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

    it('Médico sucesso (COA & Meu Consultório)', () => {
        let nomeTelaHomeMed = 'Página inicial';

        cy.login_coa_meu_consult(Cypress.env('cpf_med'), Cypress.env('senha'))

        cy.val_nome_tela_inicial_med(nomeTelaHomeMed)

        cy.destaca_nome_user()

        cy.destaca_nome_tela_home_med()
    });




    it('Operador sucesso', () => {
        let nomeTelaHomeOp = 'Busca por profissional';
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.val_nome_tela_inicial_op(nomeTelaHomeOp)

        cy.destaca_nome_user()

        cy.destaca_nome_tela_home_op()
    });

    it('Realizar login com sucesso e sair', () => {

        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.sair_operador()

        cy.url()
            .should('eq', Cypress.env('url') + '/login')
    });

    it('Cpf não cadastrado', () => {

        cy.login(Cypress.env('cpf_sem_cad'), Cypress.env('senha'))

        cy.valMens_erroCpf(menCpfInv)

    });

    it('Cpf não preenchido', () => {
        cy.login_sem_cpf(Cypress.env('cpf_sem_cad'), Cypress.env('senha'))

        cy.valMens_erroCpf(menCpfInv)

    });

    it('Senha incorreta', () => {
        let menCpfSenhaInv = "CPF ou senha inválido";

        cy.login(Cypress.env('cpf_med'), Cypress.env('senha_incorreta'))

        cy.valMens_erroCpfSenha(menCpfSenhaInv)

    });

    it('Senha não preenchida', () => {
        let menSenhaVazia = 'Senha necessita pelo menos 5 caracteres.'

        cy.login_sem_senha(Cypress.env('cpf_med'), Cypress.env('senha'))

        cy.valMens_errSenhaVazia(menSenhaVazia)

    })

})