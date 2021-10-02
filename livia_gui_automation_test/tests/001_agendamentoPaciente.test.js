const userMedico = '55888701661'
const userPaciente = '88641412352'
const pass = 'Qatest@123'
const name = "Test Streaming"
const dateNasc = '30/12/1980'
const phone = '(51)996602120'
const email = 'robo@test.com'
const cep = '69022-334'
const genero = 'Mascul'
const memberNumber = '257319010455'


describe("Realizando uma consulta através da plataforma Nivia - Saúde - Agendamento pelo Paciente", () => {

    it("Dado realizado o agendamento da Consulta pelo paciente através da plataforma", (client) => {
        client
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            })
            .url('https://www.staging.liviasaude.com.br/')
            .waitForElementVisible('#header > div.header-container > div.header-topo > a', 500000)
            .click('#header > div.header-container > div.header-topo > a')
            .waitForElementVisible('input[name="federalTaxId"]',500000)
            .setValue('input[name="federalTaxId"]', userPaciente)
            .waitForElementVisible('div.login--button__wrapper > button',500000)
            .submitForm('div.login--button__wrapper > button')
            .waitForElementVisible('input[name="password"]',500000)
            .setValue('input[name="password"]', pass)
            .waitForElementVisible('div.default-button__loading',500000)
            .submitForm('div.default-button__loading')
            .waitForElementVisible('a.video-attendance-card__link',500000)
            .click('a.video-attendance-card__link')
            .waitForElementVisible('input.default-checkbox__input',500000)
            .click('input.default-checkbox__input')
            .waitForElementVisible('div.agreement-modal--content__footer > button',500000)
            .click('div.agreement-modal--content__footer > button')
            .waitForElementVisible('input[name="name"]',500000)
            .waitForElementVisible('input[name="federalTaxId"]',500000)
            .waitForElementVisible('input[name="date"]',500000)
            .waitForElementVisible('div[class=textfield-wrapper] > div > input',500000)
            .keys(client.Keys.ENTER, () => {
                client
                .pause(1000)
                .setValue('div[class=textfield-wrapper] > div > input', genero)
            });
            client
            .waitForElementVisible('div.visible.menu.transition > div',500000)
            .click('div.visible.menu.transition > div')
            .waitForElementVisible('div.telemedicine-form__footer > button',500000)
            .setValue('input[name="name"]', name)
            .setValue('input[name="federalTaxId"]', userPaciente)
            .setValue('input[name="date"]', dateNasc)
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible('input[name="phone"]',500000)
            .waitForElementVisible('input[name="email"]',500000)
            .waitForElementVisible('input[name="cep"]',500000)
            .waitForElementVisible('div.telemedicine-form__footer > button',500000)
            .setValue('input[name="phone"]', phone)
            .setValue('input[name="email"]', email)
            .setValue('input[name="cep"]', cep)
            .click('div.telemedicine-form__footer > button')

            // Trecho de código teferente ao input dos dados do plaano de saúde

            //.waitForElementVisible('input[name="Cabesp"]')
            //.waitForElementVisible('div.telemedicine-form__footer > button')
            //.click('input[name="Cabesp"]')
            //.click('div.telemedicine-form__footer > button')
            // .waitForElementVisible('input[name="memberNumber"]')
            // .waitForElementVisible('div.telemedicine-form__footer > button')
            // .setValue('input[name="memberNumber"]', memberNumber)
            // .click('div.telemedicine-form__footer > button')

            .pause(500)
            .waitForElementVisible('input[name="Diarréia / vômito"]',500000)
            .waitForElementVisible('div.telemedicine-form__footer > button',500000)
            .click('input[name="Diarréia / vômito"]')
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible('div.telemedicine-form__footer > button',500000)
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible("div[class='default-button__loading']",500000)
            .click("div[class='default-button__loading']")
            .waitForElementVisible('div.telemedicine-modal__content--button-wrapper  button  div  div',500000)
            .click('div.telemedicine-modal__content--button-wrapper  button  div  div')
            .doubleClick()
            .waitForElementVisible('button.index__button___ixw9L.index__primary___PICz2.index__normal___3yKr8.index__normalPadding___2-3rW > div > div',500000)
            .submitForm('button.index__button___ixw9L.index__primary___PICz2.index__normal___3yKr8.index__normalPadding___2-3rW > div > div')
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/001_AgendamentoPaciente.png')
            
    });

    it('Quando usuário identificado como médico loga na aplicação e realiza o atendimento do paciente', (client) => {
        client
            .openNewWindow('tab')
            .windowHandles((results) => {
                var newWindow = results.value[1];
                client.switchWindow(newWindow)
            })

            .url('https://staging-plataforma-saude.nexadigital.com.br')
            .waitForElementVisible('input[name="federalTaxId"]',500000)
            .waitForElementVisible('input[name="password"]')
            .waitForElementVisible('div.jss15 > button',500000)
            .setValue('input[name="federalTaxId"]', userMedico)
            .setValue('input[name="password"]', pass)
            .click('div.jss15 > button')
            .waitForElementVisible('div.MuiCardActions-root.jss49.MuiCardActions-spacing > button > span.MuiButton-label',500000)
            .click('div.MuiCardActions-root.jss49.MuiCardActions-spacing > button > span.MuiButton-label')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text sc-AxirZ bJCmFu"]',500000)
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text sc-AxirZ bJCmFu"]')

            //Iniciar o atendimento
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)',500000)
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')

            //Conectando a call com o Cliente.
            .waitForElementVisible('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]',500000)
            .click('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/002_ConectandoCallPaciente.png')
    });

    it('Então estabelecido a comunicação paciente médico será realizada a consulta', (client) => {
        client
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            })

            .refresh()
           
            // Ao finalizar com o submit o comportamento do código mudou
            // .waitForElementVisible("div.card-in-call__footer > a",5000)
            // .click("div.card-in-call__footer > a")

            .pause(5000);


        client.element('css selector', 'button[class*="default-button"]:nth-child(1)', function (result) {
            if (result.status === 0) {
                client
                    .click('button[class*="default-button"]:nth-child(1)')
                    .pause(5000)
            };
        });


        client
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/003_ConectandoCallMédico.png')
            .windowHandles((results) => {
                var newWindow = results.value[1];
                client.switchWindow(newWindow)
            })

            //Finalizando a call
            .pause(10000)
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/004_RealizaçãoConsulta.png')
            .waitForElementVisible('textarea[name="complaint"]',500000)
            .waitForElementVisible('textarea[name="conduct"]',500000)
            .setValue('textarea[name="complaint"]', 'Test Streaming')
            .setValue('textarea[name="conduct"]', 'Test Streaming')
            .click('input[value="UNNECESSARY_PRESENTIAL_CARE"]')
            .waitForElementVisible('textarea[name="observations"]',500000)
            .setValue('textarea[name="observations"]', 'Test Streaming')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiIconButton-root"]:nth-child(2)',500000)
            .click('button[class*="MuiButtonBase-root MuiIconButton-root"]:nth-child(2)')
            .waitForElementVisible('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]',500000)
            .click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)',500000)
            .submitForm('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')
            .click('input[value="call_ended"]')
            .waitForElementVisible('.MuiButton-containedSizeLarge.MuiButton-sizeLarge',500000)
            .click('.MuiButton-containedSizeLarge.MuiButton-sizeLarge')
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/005_FinalizaçãoAtendimento.png')
    })
});

