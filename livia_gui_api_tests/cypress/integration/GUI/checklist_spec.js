/// <reference types="Cypress" />

describe('Check List', () => {
    var faker = require('faker');
    var hundred_characters = faker.lorem.paragraphs(2);

    let dtNascInvalida =
    {
        data1: 15091899,
        data2: 15092050
    };

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

    it('acessar agenda', () => {
        let nomemedico = 'Dr(a). ' + Cypress.env('nome_logado_med');
        let drnomemedico = 'AgendaDr(a). ' + Cypress.env('nome_logado_med');

        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.acessar_agenda(Cypress.env('nome_logado_med'))

        cy.val_nome_medico_agenda(nomemedico, drnomemedico)

    })

    it('acessar agenda e voltar', () => {
        let nomeTelaHomeOp = 'Busca por profissional';

        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.acessar_agenda_voltar(Cypress.env('nome_logado_med'))

        cy.val_nome_tela_inicial_op(nomeTelaHomeOp)

    })

    describe('Formulario de consultas', () => {
        let nomePacienteVazio = 'Este campo é obrigatório';
        let cpfVazio = 'CPF é obrigatório';
        let telVazio = 'O telefone é obrigatório';
        let convenioVazio = 'Este campo é obrigatório';
        let planoVazio = 'Este campo é obrigatório';
        let carteirinhaVazio = 'Este campo é obrigatório';
        let dtAgendamento = 'Este campo é obrigatório';
        let horarioVazio = 'Escolha um horário';

        it('campos obrigatórios', () => {
            cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

            cy.acessar_agenda_validar_campos_obrigatorios(Cypress.env('nome_logado_med'))

            cy.val_campos_vazios_agenda(nomePacienteVazio, cpfVazio, telVazio, convenioVazio, planoVazio, carteirinhaVazio, dtAgendamento, horarioVazio)

        })

        it('campo CPF', () => {
            let cpf = 13244657687;
            let cpfInvalido = 'CPF Inválido';

            cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

            cy.acessar_agenda_validar_campo_CPF(Cypress.env('nome_logado_med'), cpf)

            cy.val_campo_cpf(cpfInvalido)
        })

        it('campo telefone', () => {
            let telefone = 119576;
            let telInvalido = 'Telefone inválido';

            cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

            cy.acessar_agenda_validar_campo_telefone(Cypress.env('nome_logado_med'), telefone)

            cy.val_campo_tel(telInvalido)
        })

        it('campo nome', () => {
            let maximoCaracteres = 'Este campo aceita no máximo 100 caractéres';

            cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

            cy.acessar_agenda_validar_campo_nome(Cypress.env('nome_logado_med'), hundred_characters)

            cy.val_campo_nome(maximoCaracteres)
        })

        it('campo data de nascimento', () => {
            let dataInvalida = 'Data inválida';

            cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

            cy.acessar_agenda_validar_campo_data_nascimento(Cypress.env('nome_logado_med'), dtNascInvalida.data1)

            cy.val_data_nascimento(dataInvalida)

            cy.acessar_agenda_validar_campo_data_nascimento_2(dtNascInvalida.data2)

            cy.val_data_nascimento(dataInvalida)
        })

    })

    describe('Esqueci a senha', () => {

        it('sucesso', () => {
            let msgSucesso = 'Email enviado com sucesso!';

            cy.esqueci_senha(Cypress.env('email'))

            cy.val_mensagem_sucesso_esqueci_senha(msgSucesso)

            cy.voltar_tela_inicial_validar()
        });

        it('utilizando e-mail inválido', () => {
            let emailInv = 'automacao.liviapro.dasa.com.br';
            let msgEmailInvalido = 'Formato de e-mail inválido.';

            cy.esqueci_senha(emailInv)

            cy.val_email_invalido(msgEmailInvalido)
        });

        it('utilizando e-mail não cadastrado', () => {
            let emailNaoCad = 'automacao.liviapro@dasa.com.br';
            let msgEmailNaoCad = 'Usuário inválido.';

            cy.esqueci_senha(emailNaoCad)

            cy.val_email_nao_cad(msgEmailNaoCad)
        });

        it('acessar a página e voltar', () => {
            let saudacaoLogin = 'Olá!'

            cy.esqueci_senha_voltar()

            cy.val_mensagem_tela_inicial(saudacaoLogin)

        });

    });

})