/// <reference types="Cypress" />

//let baseUrl = Cypress.config().baseUrl
describe('Busca de Profissional', () => {
    let quantNome;
    let quantNomeCarcEsp;
    let quantNumCrm;
    let quantNomeNumCrmUf;
    let quantDoctors;
    let quantOperators;
    let nomeNaoCad = 'xxxyyy';
    let nomeCaracEsp = 'Stéphane';
    let sobrenome = 'Vasconcelos';
    let crmMedNum = '12345';
    let crmMedUf = 'SP';
    let crmMedNumUf = '12345SP';
    let msg2ouMaisPro = ' profissionais encontrados';
    let msgUmPro = ' profissional encontrado';
    let msgNenhumEnc = 'Nenhum profissional encontrado'
    let msgProfEncontrados = 'div.containerInfiniteScroll > div > div > span';
    before(function () {

        cy.consBD_user_nome(Cypress.env('nome_logado_med')).then(queryResponse => {
            quantNome = queryResponse[0].count
        })

        cy.consBD_user_nome(nomeCaracEsp).then(queryResponse => {
            quantNomeCarcEsp = queryResponse[0].count
        })


        cy.consBD_user_crm(crmMedNum).then(queryResponse => {
            quantNumCrm = queryResponse[0].count
        });

        cy.consBD_user_crm_uf(crmMedNum, crmMedUf).then(queryResponse => {
            quantNomeNumCrmUf = queryResponse[0].count
        });

        cy.consBD_user_doctor(crmMedUf).then(queryResponse => {
            quantDoctors = queryResponse[0].count
        });

        cy.consBD_user_operator(crmMedUf).then(queryResponse => {
            quantOperators = queryResponse[0].count
        });

    });


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

    it('por nome, com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(Cypress.env('nome_logado_med'))

        cy.val_mens_quant(quantNome, msgProfEncontrados, msgUmPro, msg2ouMaisPro)

    });

    it('por nome com caracteres especiais', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(nomeCaracEsp)

        cy.val_mens_quant(quantNomeCarcEsp, msgProfEncontrados, msgUmPro, msg2ouMaisPro)

    });

    it.skip('por sobrenome', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(sobrenome)

        cy.val_mens_quant(quantNomeCarcEsp, msgProfEncontrados, msgUmPro, msg2ouMaisPro)
    });

    it('por CRM(números), com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_crm(crmMedNum)

        cy.val_mens_quant(quantNumCrm, msgProfEncontrados, msgUmPro, msg2ouMaisPro)

        cy.get('.MuiTableRow-root td')
            .eq(0)
            .invoke('text')
            .should('contain', '12345')
    });

    it('por CRM(numeros+UF), com sucesso', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_crm(crmMedNumUf)

        cy.val_mens_quant(quantNomeNumCrmUf, msgProfEncontrados, msgUmPro, msg2ouMaisPro)

        cy.get('.MuiTableRow-root td')
            .eq(0)
            .invoke('text')
            .should('contain', 'SP')
            .should('contain', '12345')
    });

    it('por UF do CRM, com sucesso', () => {
        let profEncontradosUf = quantDoctors - quantOperators;
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_crm(crmMedUf)

        cy.val_mens_quant(profEncontradosUf, msgProfEncontrados, msgUmPro, msg2ouMaisPro)


        cy.get('.MuiTableRow-root td')
            .eq(0)
            .invoke('text')
            .should('contain', 'SP')
    });

    it('por usuário que não existe', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_nome(nomeNaoCad)

        cy.get(msgProfEncontrados)
            .should('have.text', msgNenhumEnc)
    });

    it('com sucesso e limpar', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.busca_prof_crm(crmMedUf)

        cy.get('.MuiTableRow-root td')
            .eq(0)
            .invoke('text')
            .should('contain', 'SP')

        cy.limpar_busca_prof()

        cy.get(msgProfEncontrados)
            .should('not.contain.text', msgNenhumEnc)
    });

    it('por nome e altera para CRM', () => {
        cy.login(Cypress.env('cpf_op'), Cypress.env('senha'))

        cy.buscar_por_nome_alterar_para_crm(Cypress.env('nome_logado_med'))

        cy.get('input[data-testid="input-operator-search"]')
            .should('not.have.text')
    })

});

