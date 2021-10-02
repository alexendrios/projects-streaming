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
            .waitForElementVisible('#header > div.header-container > div.header-topo > a', 50000)
            .click('#header > div.header-container > div.header-topo > a')
            .waitForElementVisible('input[name="federalTaxId"]')
            .setValue('input[name="federalTaxId"]', userPaciente)
            .waitForElementVisible('div.login--button__wrapper > button')
            .submitForm('div.login--button__wrapper > button')
            .waitForElementVisible('input[name="password"]')
            .setValue('input[name="password"]', pass)
            .waitForElementVisible('div.default-button__loading')
            .submitForm('div.default-button__loading')
            .waitForElementVisible('a.video-attendance-card__link')
            .click('a.video-attendance-card__link')
            .waitForElementVisible('input.default-checkbox__input')
            .click('input.default-checkbox__input')
            .waitForElementVisible('div.agreement-modal--content__footer > button')
            .click('div.agreement-modal--content__footer > button')
            .waitForElementVisible('input[name="name"]')
            .waitForElementVisible('input[name="federalTaxId"]')
            .waitForElementVisible('input[name="date"]')
            .waitForElementVisible('div[class=textfield-wrapper] > div > input')
            .keys(client.Keys.ENTER, () => {
                client
                .pause(1000)
                .setValue('div[class=textfield-wrapper] > div > input', genero)
            });
            client
            .waitForElementVisible('div.visible.menu.transition > div',300)
            .click('div.visible.menu.transition > div')
            .waitForElementVisible('div.telemedicine-form__footer > button')
            .setValue('input[name="name"]', name)
            .setValue('input[name="federalTaxId"]', userPaciente)
            .setValue('input[name="date"]', dateNasc)
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible('input[name="phone"]')
            .waitForElementVisible('input[name="email"]')
            .waitForElementVisible('input[name="cep"]')
            .waitForElementVisible('div.telemedicine-form__footer > button')
            .setValue('input[name="phone"]', phone)
            .setValue('input[name="email"]', email)
            .setValue('input[name="cep"]', cep)
            .click('div.telemedicine-form__footer > button')
            //.waitForElementVisible('input[name="Cabesp"]')
            //.waitForElementVisible('div.telemedicine-form__footer > button')
            //.click('input[name="Cabesp"]')
            //.click('div.telemedicine-form__footer > button')
            // .waitForElementVisible('input[name="memberNumber"]')
            // .waitForElementVisible('div.telemedicine-form__footer > button')
            // .setValue('input[name="memberNumber"]', memberNumber)
            // .click('div.telemedicine-form__footer > button')
            .pause(500)
            .waitForElementVisible('input[name="Diarréia / vômito"]')
            .waitForElementVisible('div.telemedicine-form__footer > button')
            .click('input[name="Diarréia / vômito"]')
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible('div.telemedicine-form__footer > button')
            .click('div.telemedicine-form__footer > button')
            .waitForElementVisible("div[class='default-button__loading']")
            .click("div[class='default-button__loading']")
            .waitForElementVisible('div.telemedicine-modal__content--button-wrapper  button  div  div')
            .click('div.telemedicine-modal__content--button-wrapper  button  div  div')
            .doubleClick()
            .waitForElementVisible('button.index__button___ixw9L.index__primary___PICz2.index__normal___3yKr8.index__normalPadding___2-3rW > div > div')
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
            .waitForElementVisible('input[name="federalTaxId"]')
            .waitForElementVisible('input[name="password"]')
            .waitForElementVisible('div.jss15 > button')
            .setValue('input[name="federalTaxId"]', userMedico)
            .setValue('input[name="password"]', pass)
            .click('div.jss15 > button')
            .waitForElementVisible('div.MuiCardActions-root.jss49.MuiCardActions-spacing > button > span.MuiButton-label')
            .click('div.MuiCardActions-root.jss49.MuiCardActions-spacing > button > span.MuiButton-label')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text sc-AxirZ bJCmFu"]')
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text sc-AxirZ bJCmFu"]')

            //Iniciar o atendimento
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)',50000)
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')

            //Conectando a call com o Cliente.
            .waitForElementVisible('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
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
           
            //Ao finalizar com o submit o comportamento do código mudou
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
            .waitForElementVisible('textarea[name="complaint"]')
            .waitForElementVisible('textarea[name="conduct"]')
            .setValue('textarea[name="complaint"]', 'Test Streaming')
            .setValue('textarea[name="conduct"]', 'Test Streaming')
            .click('input[value="UNNECESSARY_PRESENTIAL_CARE"]')
            .waitForElementVisible('textarea[name="observations"]')
            .setValue('textarea[name="observations"]', 'Test Streaming')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiIconButton-root"]:nth-child(2)')
            .click('button[class*="MuiButtonBase-root MuiIconButton-root"]:nth-child(2)')
            .waitForElementVisible('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]')
            .click('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]')
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')
            .submitForm('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')
            .click('input[value="call_ended"]')
            .waitForElementVisible('.MuiButton-containedSizeLarge.MuiButton-sizeLarge')
            .click('.MuiButton-containedSizeLarge.MuiButton-sizeLarge')
            .saveScreenshot('./screenshots/001_agendamentoPaciente.test/report_pass/005_FinalizaçãoAtendimento.png')
    })
});

