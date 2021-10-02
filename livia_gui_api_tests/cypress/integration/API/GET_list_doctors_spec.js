/// <reference types="Cypress" />

describe('list doctor', () => {
    let param_document = 'document=';
    let param_name = 'name=';
    let name_doctor = 'jean';
    let document_doctor = '12312312';
    let state = 'SP';
    let token;

    it('list doctor by name', () => {
        cy.login_via_api(Cypress.env('url_pes_tel_api'), Cypress.env('cpf_med'), Cypress.env('senha'))
            .then((resp) => {
                return new Promise(resolve => {
                    expect(resp).property('status').to.equal(200)
                    expect(resp).property('statusText').to.equal('OK')
                    token = resp.body['token']
                    resolve(token)
                })
            })

        cy.list_doctors_by(Cypress.env('url_pes_tel_api'), param_name, name_doctor, token)
            .then((resp) => {
                console.log(resp.body)
                expect(resp.status).to.eq(200)
                expect(resp).property('statusText').to.equal('OK')
            })
    })

    it('list doctor by document', () => {
        cy.list_doctors_by(Cypress.env('url_pes_tel_api'), param_document, document_doctor, token)
            .then((resp) => {
                console.log(resp.body)
                expect(resp.status).to.eq(200)
                expect(resp).property('statusText').to.equal('OK')
            })
    })

    it('list doctor by document and state', () => {
        cy.list_doctors_by_document_and_state(Cypress.env('url_pes_tel_api'), document_doctor, state, token)
            .then((resp) => {
                console.log(resp.body)
                expect(resp.status).to.eq(200)
                expect(resp).property('statusText').to.equal('OK')
            })
    })

})
