describe('users', () => {
  // let param_name = 'name=';
  // let name_doctor = 'jean';
  // let userid;
  // let token;

  it('user by id', () => {
    // cy.login_via_api(Cypress.env('url_pes_tel_api'), Cypress.env('cpf_med'), Cypress.env('senha'))
    //   .then((resp) => {
    //     return new Promise(resolve => {
    //       expect(resp).property('status').to.equal(200)
    //       token = resp.body['token'];
    //       resolve(token)
    //     })
    //   })

    // cy.list_doctors_by(Cypress.env('url_pes_tel_api'), param_name, name_doctor, token)
    //   .then((resp) => {
    //     return new Promise(resolve => {
    //       expect(resp.status).to.eq(200)
    //       console.log('user_id: ' + resp.body.results[0].user_id)
    //       userid = resp.body.results[0].user_id;
    //       resolve(userid)
    //     })
    //   })

    cy.list_users(Cypress.env('url_pes_tel_api'), 96)
      .then((resp) => {
        expect(resp).property('status').to.equal(200)
        expect(resp).property('statusText').to.equal('OK')
      })

  })
})