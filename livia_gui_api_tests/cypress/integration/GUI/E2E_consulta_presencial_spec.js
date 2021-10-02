/// <reference types="Cypress" />

describe('End to end - Consulta presencial', () => {
    var faker = require('faker');
    var nome = faker.name.findName();
    var convenio = faker.name.findName();
    var plano = faker.name.findName();
    var numCart = faker.random.number();
    const ncpf = 16268680006;
    var pacientechegou = 'O paciente ' + nome + ' chegou no consultório e já pode ser atendido.';
    var atendimentosucesso = 'O paciente ' + nome + ' foi atendido com sucesso';
    let tel = '11957625539';
    let dtNasc = '20041998';
    let observacao = 'Paciente faz constantes uso de novalgina, foi encaminhado para um oculista';
    let conduta = 'Passar no oculista';
    let diagnostico = 'Enxaqueca';
    let avaliacao = 'Exercícios físicos 3 vezes na semana';
    let motivo = 'Constantes dores de cabeça';
    let valida_celular = 'Celular: (11) 95762-5539';
    let valida_cpf = 'CPF: 162.686.800-06';
    let valida_idade = 'Idade: 22 anos';
    let medicamento = 'Novalgina';
    let teltratado = '(11) 95762-5539';
    let qtdMedicacao = ' - 1 embalagem';
    let receiturario = 'Novalgina, Comprimido (10un)';
    let desfecho = 'Não';

    beforeEach(() => {
        cy.acessar_url(Cypress.env('url'))
    })
    afterEach(() => {
        cy.screenshot()
    })

    it('Agendamento e atendimento com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(Cypress.env('nome_logado_med'))

        cy.cadastrar_agendamento_presencial(nome, ncpf, tel, dtNasc, convenio, plano, numCart)

        cy.acessar_url(Cypress.env('url'))

        cy.login_coa_meu_consult(Cypress.env('cpf_med'), Cypress.env('senha'))

        cy.iniciar_atend_validar_informacoes_pac(pacientechegou, nome, valida_idade, valida_cpf, valida_celular)

        cy.preenche_evolucao_sem_MEMED(motivo, medicamento, avaliacao, diagnostico, conduta, observacao)

        cy.finaliza_atendimento_presencial_sucesso()

        cy.val_ultimas_atividades(atendimentosucesso)

        cy.val_relatorios_sem_MEMED(nome, motivo, medicamento, avaliacao, diagnostico, conduta, desfecho, observacao)

    })

    it('Agendamento e atendimento prescrevendo MEMED', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(Cypress.env('nome_logado_med'))

        cy.cadastrar_agendamento_presencial(nome, ncpf, tel, dtNasc, convenio, plano, numCart)

        cy.acessar_url(Cypress.env('url'))

        cy.login_coa_meu_consult(Cypress.env('cpf_med'), Cypress.env('senha'))

        cy.iniciar_atend_validar_informacoes_pac(pacientechegou, nome, valida_idade, valida_cpf, valida_celular)

        cy.preenche_evolucao_com_MEMED(motivo, medicamento, avaliacao, diagnostico, conduta, nome, medicamento, teltratado, observacao)

        cy.finaliza_atendimento_presencial_sucesso()

        cy.val_ultimas_atividades(atendimentosucesso)

        cy.val_relatorios_com_MEMED(nome, motivo, medicamento, avaliacao, diagnostico, conduta, receiturario, qtdMedicacao, desfecho, observacao)

    })
})