//commands API
import './API/commands_login_saude_api'
import './API/commands_login_api'
import './API/commands_att_saude_api'
import './API/commands_lista_hosp_api'
import './API/commands_termo_api'

import './API/commands_create_users_api'

import './API/commands_forgot_password_api'
import './API/commands_list_doctors_api'
import './API/commands_list_users_api'



//commands UI
import './GUI/commands_login'
import './GUI/commands_busca_profissional'
import './GUI/commands_agendamento'
import './GUI/commands_checklist'
import './GUI/commands_consultas'
import './GUI/commands_MEMED'
import './GUI/commands_att'

//commands BD
import './BD/commands_bd'

//commands Condições
import './CONDITION/commands_condition'


Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        //const screenshotFileName = `${runnable.parent.title} -- ${test.title}.png`
        addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
        
    }
    else {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} -- after each hook.png`
      addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  }
})