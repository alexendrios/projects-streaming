/// <reference types="Cypress" />

describe('forgot password', () => {
  let token;

  it('forgot password', () => {
    cy.forgot_password(Cypress.env('url_pes_tel_api'), Cypress.env('email_forgot_password'))
      .then((resp) => {
        expect(resp).property('status').to.equal(204)
        expect(resp.statusText).to.eq('No Content')
        console.log(resp)
      })
  })

  it('reset password', () => {
    cy.login_via_api(Cypress.env('url_pes_tel_api'), Cypress.env('cpf_med'), Cypress.env('senha'))
      .then((resp) => {
        return new Promise(resolve => {
          expect(resp).property('status').to.equal(200)
          expect(resp).property('statusText').to.equal('OK')
          token = resp.body['token']
          resolve(token)
        })
      })

    cy.request({
      method: 'POST',
      url: Cypress.env('url_pes_tel_api') + '/ums/api/v1/account/reset-forgotten-password',
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      },
      body:
      {
        password: Cypress.env('senha'),
      },
      timeout: 120000,
      failOnStatusCode: false
    })
      .then((resp) => {
        expect(resp).property('status').to.equal(200)
        expect(resp).property('statusText').to.equal('OK')
      })
  })
})