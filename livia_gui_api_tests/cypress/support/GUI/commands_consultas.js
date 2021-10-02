const medicoPagePro = require('../page_elements/pagina_inicial_medico_page_pro')
const medicoPageProN = new medicoPagePro()

const evolucaoPagePro = require('../page_elements/evolucao_paciente_page_pro')
const evolucaoPageProN = new evolucaoPagePro()

const MEMEDPagePro = require('../page_elements/MEMED_page_pro.js')
const MEMEDPageProN = new MEMEDPagePro()

const homeMedPagePro = require('../page_elements/home_med_page_pro.js')
const homeMedPageProN = new homeMedPagePro()

const relatoriosPagePro = require('../page_elements/relatorios_page_pro.js')
const relatoriosPageProN = new relatoriosPagePro()

Cypress.Commands.add('val_ultimas_atividades', { timeout: 7000 }, (mensagem) => {
    cy.get(medicoPageProN.txUltimasAtividades)
        .should('contain.text', mensagem)
})

Cypress.Commands.add('iniciar_atend_validar_informacoes_pac', { timeout: 7000 }, (ultimasatividades, paciente, idade, cpf, telefone) => {
    cy.val_ultimas_atividades(ultimasatividades)

    cy.get(medicoPageProN.btIniciaUltAtend)
        .click()

    //Validação das informações recebidas do agendamento (nome,idade,cpf,telefone)
    cy.get(evolucaoPageProN.lblPaciente, {timeout: 10000})
        .should('be.visible')
        .should('have.text', paciente)

    cy.get(evolucaoPageProN.lblIdade)
        .eq(0)
        .should('have.text', idade)

    cy.get(evolucaoPageProN.lblCPF)
        .eq(1)
        .should('have.text', cpf)

    cy.get(evolucaoPageProN.lblTelefone)
        .eq(2)
        .should('have.text', telefone)

    cy.get(evolucaoPageProN.btIniciaFinalizaAtend)
        .click()
})

Cypress.Commands.add('preenche_evolucao_sem_MEMED', { timeout: 7000 }, (motivo, medicamentos, avaliacao, diagnostico, conduta, observacao) => {
    cy.get(evolucaoPageProN.txtMotivoConsulta)
        .type(motivo)

    cy.get(evolucaoPageProN.txtMedicamentos)
        .type(medicamentos)

    cy.get(evolucaoPageProN.txtAvaliacao)
        .type(avaliacao)

    cy.get(evolucaoPageProN.txtDiagnostico)
        .type(diagnostico)

    cy.get(evolucaoPageProN.txtConduta)
        .type(conduta)

    cy.get(evolucaoPageProN.rbDesfechoNao)
        .click()

    cy.get(evolucaoPageProN.txtObservacao)
        .type(observacao)
})

Cypress.Commands.add('preenche_evolucao_com_MEMED', { timeout: 7000 }, (motivo, medicamentos, avaliacao, diagnostico, conduta, nome, medicamento, telefone, observacao) => {
    cy.get(evolucaoPageProN.txtMotivoConsulta)
        .type(motivo)

    cy.get(evolucaoPageProN.txtMedicamentos)
        .type(medicamentos)

    cy.get(evolucaoPageProN.txtAvaliacao)
        .type(avaliacao)

    cy.get(evolucaoPageProN.txtDiagnostico)
        .type(diagnostico)

    cy.get(evolucaoPageProN.txtConduta)
        .type(conduta)

    cy.get(evolucaoPageProN.btCriarPrescricao)
        .click()

    // cy.entrar_iframe_validar_nome_paciente(MEMEDPageProN.nomePaciente,nome)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btAddPrescricao)

    cy.entrar_iframe_digitar(MEMEDPageProN.txtMedicamento, medicamento)

    cy.wait(2000) // Aguarda medicamento aparecer na tela


    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.selMedicamento)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btGerarPrescricao)

    cy.wait(2000) // Aguarda telefone ficar disponivel para validação

    cy.entrar_iframe_validar_telefone(MEMEDPageProN.txtTelPaciente, telefone)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btEnviarEmitir)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btAssinaturaManual)

    cy.wait(2000)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btFechar)

    cy.entrar_iframe_clicar_elemento(MEMEDPageProN.btFecharMEMED)

    cy.get(evolucaoPageProN.rbDesfechoNao)
        .click()

    cy.get(evolucaoPageProN.txtObservacao)
        .type(observacao)
})

Cypress.Commands.add('finaliza_atendimento_presencial_sucesso', { timeout: 7000 }, () => {
    cy.get(evolucaoPageProN.btIniciaFinalizaAtend)
        .click()

    cy.get(evolucaoPageProN.btConfFinalizacao)
        .click()
})

Cypress.Commands.add('val_relatorios_com_MEMED', { timeout: 7000 }, (paciente, motivo, medicamento, exercicios, diagnostico, conduta, receituario, qtdMedicamento, desfecho, observacoes) => {
    cy.reload()

    cy.get(homeMedPageProN.mnRel)
        .click()

    cy.get(relatoriosPageProN.tdNomePaciente)
        .should('have.text', paciente)

    cy.get(relatoriosPageProN.btVerProntuario)
        .click()

    cy.get(relatoriosPageProN.btVisualizar)
        .click()

    cy.get(relatoriosPageProN.pMotivo)
        .eq(4)
        .should('have.text', motivo)

    cy.get(relatoriosPageProN.pMedicamento)
        .eq(6)
        .should('have.text', medicamento)

    cy.get(relatoriosPageProN.pExercicios)
        .eq(7)
        .should('have.text', exercicios)

    cy.get(relatoriosPageProN.pDiagnostico)
        .eq(8)
        .should('have.text', diagnostico)

    cy.get(relatoriosPageProN.pConduta)
        .eq(9)
        .should('have.text', conduta)

    cy.get(relatoriosPageProN.spanMedicamento)
        .eq(0)
        .should('have.text', receituario)

    cy.get(relatoriosPageProN.spanQtdeMedicamento)
        .eq(1)
        .should('have.text', qtdMedicamento)

    cy.get(relatoriosPageProN.pDesfecho)
        .should('have.text', desfecho)

    cy.get(relatoriosPageProN.pObservacoes)
        .should('have.text', observacoes)
})

Cypress.Commands.add('val_relatorios_sem_MEMED', { timeout: 7000 }, (paciente, motivo, medicamento, exercicios, diagnostico, conduta, desfecho, observacoes) => {
    cy.reload()

    cy.get(homeMedPageProN.mnRel)
        .click()

    cy.get(relatoriosPageProN.tdNomePaciente)
        .should('have.text', paciente)

    cy.get(relatoriosPageProN.btVerProntuario)
        .click()

    cy.get(relatoriosPageProN.btVisualizar)
        .click()

    cy.get(relatoriosPageProN.pMotivo)
        .eq(4)
        .should('have.text', motivo)

    cy.get(relatoriosPageProN.pMedicamento)
        .eq(6)
        .should('have.text', medicamento)

    cy.get(relatoriosPageProN.pExercicios)
        .eq(7)
        .should('have.text', exercicios)

    cy.get(relatoriosPageProN.pDiagnostico)
        .eq(8)
        .should('have.text', diagnostico)

    cy.get(relatoriosPageProN.pConduta)
        .eq(9)
        .should('have.text', conduta)

    cy.get(relatoriosPageProN.pDesfecho)
        .should('have.text', desfecho)

    cy.get(relatoriosPageProN.pObservacoes)
        .should('have.text', observacoes)
})


