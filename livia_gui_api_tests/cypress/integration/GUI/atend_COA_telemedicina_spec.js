/// <reference types="Cypress" />

let baseUrl = Cypress.config().baseUrl
describe('Atendimento Telemedicina COA', () => {
    let patientId;
    let token;
    let attId;
    let observacao = 'Paciente faz constantes uso de novalgina, foi encaminhado para um oculista';
    let conduta = 'Passar no oculista';
    let diagnostico = 'Enxaqueca';
    let avaliacao = 'Exercícios físicos 3 vezes na semana';
    let motivo = 'Constantes dores de cabeça';
    let medicamento = 'Novalgina';

    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
        cy.login_saude_api(Cypress.env('url_saude_api'), Cypress.env('senha'), Cypress.env('cpf_pac_saude'))
            .then((resp) => {
                return new Promise(resolve => {
                    expect(resp).property('status').to.equal(200)
                    patientId = resp.body['id'];
                    token = resp.body['token'];
                    resolve(patientId, token)
                })
            })
    })
    afterEach(() => {
        cy.screenshot()
    })

    it('Lívia Pró - Login Médico', () => {
        let mensUltAtv = "O paciente Meu perfil foi atendido com sucesso"

        cy.att_saude_api(Cypress.env('url_saude_api'), token, patientId, Cypress.env('cpf_pac_saude'))
        .then((resp) => {
            return new Promise(resolve => {
                expect(resp).property('status').to.equal(200)
                attId = resp.body['id'];
                resolve(attId)
            })
        })

        cy.login_coa(Cypress.env('cpf_med'), Cypress.env('senha'))

        cy.inicia_atendim_COA()

        cy.preenche_evolucao_sem_MEMED(motivo, medicamento, avaliacao, diagnostico, conduta, observacao)

        cy.finaliza_atendim_COA_tel()

        cy.val_ultimas_atividades(mensUltAtv)

    })
})