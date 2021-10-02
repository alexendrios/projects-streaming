const homeOpPagePro = require('../page_elements/home_op_page_pro')
const homeOpPageProN = new homeOpPagePro()

const agendaPagePro = require('../page_elements/agenda_page_pro')
const agendaPageProN = new agendaPagePro()

const agendamentoPagePro = require('../page_elements/agendamento_page_pro')
const agendamentoPageProN = new agendamentoPagePro()

const loginPagePro = require('../page_elements/login_page_pro')
const loginPageProN = new loginPagePro()

const esqueciSenhaPagePro = require('../page_elements/esqueci_senha_page_pro')
const esqueciSenhaPageProN = new esqueciSenhaPagePro()

Cypress.Commands.add('sair_operador', { timeout: 7000 }, () => {
    cy.get(homeOpPageProN.svgMenu)
        .click()

    cy.get(homeOpPageProN.btSair)
        .click()
})

Cypress.Commands.add('acessar_agenda', { timeout: 7000 }, (nome) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()
})

Cypress.Commands.add('acessar_agenda_voltar', { timeout: 7000 }, (nome) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btVoltar)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campos_obrigatorios', { timeout: 7000 }, (nome) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campo_CPF', { timeout: 7000 }, (nome, cpf) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.cpCpf)
        .type(cpf)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campo_telefone', { timeout: 7000 }, (nome, telefone) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(nome)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.cpTel)
        .type(telefone)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campo_nome', { timeout: 7000 }, (medico, paciente) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(medico)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.cpNome)
        .type(paciente)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campo_data_nascimento', { timeout: 7000 }, (medico, dtNasc) => {
    cy.get(homeOpPageProN.rbNome)
        .click()

    cy.get(homeOpPageProN.cpNomeCrm)
        .type(medico)

    cy.get(homeOpPageProN.btBuscar)
        .click()

    cy.get(homeOpPageProN.btAcessarAgenda).eq(0)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.cpDataNasc)
        .type(dtNasc)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('acessar_agenda_validar_campo_data_nascimento_2', { timeout: 7000 }, (dtNasc) => {
    cy.get(agendamentoPageProN.btCancelar)
        .click()

    cy.get(agendaPageProN.btAgendarNovaCons)
        .click()

    cy.get(agendamentoPageProN.cpDataNasc)
        .type(dtNasc)

    cy.get(agendamentoPageProN.btProsseguir)
        .click()
})

Cypress.Commands.add('esqueci_senha', { timeout: 7000 }, (email) => {
    cy.get(loginPageProN.lkEsqSenha)
        .click()

    cy.get(esqueciSenhaPageProN.cpEmail)
        .type(email)

    cy.get(esqueciSenhaPageProN.btEnviar)
        .click()
})

Cypress.Commands.add('esqueci_senha_voltar', { timeout: 7000 }, () => {
    cy.get(loginPageProN.lkEsqSenha)
        .click()

    cy.get(esqueciSenhaPageProN.btVoltar)
        .click()
})

///////////////////////////////////////////////////////////////////////////////////////
Cypress.Commands.add('val_nome_medico_agenda', { timeout: 7000 }, (nomemedico, drnomemedico) => {
    cy.get(agendaPageProN.spanDr)
        .eq(1)
        .should('have.text', nomemedico)

    cy.get(agendaPageProN.spanNomeAgendaMedico)
        .should('have.text', drnomemedico)
})

Cypress.Commands.add('val_campos_vazios_agenda', { timeout: 7000 }, (pacienteVazio, cpfVazio, foneVazio, convenioVazio, planoVazio, carteirinhaVazio, dtAgendamentoVazio, horarioVazio) => {
    cy.get(agendamentoPageProN.spanPacienteVazio)
        .should('have.text', pacienteVazio)

    cy.get(agendamentoPageProN.spanCPFVazio)
        .should('have.text', cpfVazio)

    cy.get(agendamentoPageProN.spanTelVazio)
        .should('have.text', foneVazio)

    cy.get(agendamentoPageProN.spanConvenioVazio)
        .should('have.text', convenioVazio)

    cy.get(agendamentoPageProN.spanPlanoVazio)
        .should('have.text', planoVazio)

    cy.get(agendamentoPageProN.spanCarteirinhaVazio)
        .should('have.text', carteirinhaVazio)

    cy.get('[data-testid=input-birthDate]')
        .should('have.attr', 'aria-invalid', 'true')
})

Cypress.Commands.add('val_campo_cpf', { timeout: 7000 }, (cpfInvalido) => {
    cy.get(agendamentoPageProN.spanCPFVazio)
        .should('have.text', cpfInvalido)
})

Cypress.Commands.add('val_campo_tel', { timeout: 7000 }, (telInvalido) => {
    cy.get(agendamentoPageProN.spanTelVazio)
        .should('have.text', telInvalido)
})

Cypress.Commands.add('val_campo_nome', { timeout: 7000 }, (nomeInvalido) => {
    cy.get(agendamentoPageProN.spanPacienteVazio)
        .should('have.text', nomeInvalido)
})

Cypress.Commands.add('val_data_nascimento', { timeout: 7000 }, (dataInvalida) => {
    cy.get(agendamentoPageProN.spanDtInvalida)
        .should('have.text', dataInvalida)
})

Cypress.Commands.add('val_mensagem_sucesso_esqueci_senha', { timeout: 7000 }, (msgSucesso) => {
    cy.get(esqueciSenhaPageProN.titEsqSenha)
        .should('have.text', msgSucesso)
})

Cypress.Commands.add('voltar_tela_inicial_validar', { timeout: 7000 }, () => {
    cy.get(esqueciSenhaPageProN.btInicio)
        .click()

    cy.url()
        .should('eq', Cypress.env('url') + '/login')
})

Cypress.Commands.add('val_email_invalido', { timeout: 7000 }, (msgEmailInvalido) => {
    cy.get(esqueciSenhaPageProN.spanErroEmail)
        .should('have.text', msgEmailInvalido)
})

Cypress.Commands.add('val_email_nao_cad', { timeout: 7000 }, (msgEmailNaoCad) => {
    cy.get(esqueciSenhaPageProN.pUsuarioInvalido)
        .should('have.text', msgEmailNaoCad)
})

Cypress.Commands.add('val_mensagem_sucesso_esqueci_senha', { timeout: 7000 }, (msgSucesso) => {
    cy.get(esqueciSenhaPageProN.titEsqSenha)
        .should('have.text', msgSucesso)
})

Cypress.Commands.add('val_mensagem_tela_inicial', { timeout: 7000 }, (msgTelaInicial) => {
    cy.get(esqueciSenhaPageProN.titEsqSenha)
        .should('have.text', msgTelaInicial)
})