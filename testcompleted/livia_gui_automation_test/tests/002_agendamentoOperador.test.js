const userMedico = '76368164905'
const userOperador = '55476218386'
const pass = '123456'
const userPaciente = '65708873434'
const patientName = "Test Streaming"
const dateNasc = '30/12/1980'
const phone = '(51)996602120'
const email = 'robo@test.com'
const cep = '69022-334'
const memberNumber = '257319010455'
const infoPlano = 'Cabesp'
const genero = 'Mascul'

describe("Realizando uma consulta através da plataforma Nivia - Saúde - Agendamento pelo Operador", () => {

    it("Dado realizado o agendamento da Consulta pelo Operador através da plataforma", (client) => {
        //Agendamento a consulta pelo Operador
        client
            .url('https://staging-plataforma-saude.nexadigital.com.br')
            .waitForElementVisible('input[name="federalTaxId"]')
            .waitForElementVisible('input[name="password"]')
            .waitForElementVisible('div.jss15 > button')
            .setValue('input[name="federalTaxId"]', userOperador)
            .setValue('input[name="password"]', pass)
            .click('div.jss15 > button')
            .pause(500)
            .waitForElementVisible('label[class*="MuiFormControlLabel-root"]:nth-child(2)')
            .click('label[class*="MuiFormControlLabel-root"]:nth-child(2)')
            .waitForElementVisible('input[name="searchText"]')
            .setValue('input[name="searchText"]', userMedico)
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
            .waitForElementVisible('#access-schedule')
            .click('#access-schedule')
            .waitForElementVisible('button[class*="MuiButton-containedPrimary"]')
            .click('button[class*="MuiButton-containedPrimary"]');


        var data = datapicker();

        client
            .waitForElementVisible('input[name="patientName"]')
            .waitForElementVisible('input[name="federalTaxId"]')
            .waitForElementVisible('input[name="phoneNumber"]')
            .waitForElementVisible('input[name="birthDate"]')
            .waitForElementVisible('input[name="healthInsurance"]')
            .waitForElementVisible('input[name="insuranceType"]')
            .waitForElementVisible('input[name="cardNumber"]')
            .setValue('input[name="patientName"]', patientName)
            .setValue('input[name="federalTaxId"]', userPaciente)
            .setValue('input[name="phoneNumber"]', phone)
            .setValue('input[name="birthDate"]', dateNasc)
            .setValue('input[name="healthInsurance"]', infoPlano)
            .setValue('input[name="insuranceType"]', infoPlano)
            .setValue('input[name="cardNumber"]', memberNumber)
            .waitForElementVisible('input[name="date"]')
            .click('input[name="date"]')
            .waitForElementVisible('div.react-datepicker')
           
            // .click('div.react-datepicker')
            
            .waitForElementVisible('div[class*="react-datepicker__month-year-dropdown-container"]')
            .click('div[class*="react-datepicker__month-year-dropdown-container"]')
            .waitForElementVisible('div.react-datepicker__month-year-dropdown > div:nth-child(' + data[1] + ')')
            .click('div.react-datepicker__month-year-dropdown > div:nth-child(' + data[1] + ')')
            .waitForElementVisible('div.react-datepicker__day.react-datepicker__day--0' + data[0] + '.react-datepicker__day--today[aria-label *="' + data[3] + ' de ' + data[2] + '"]') 
            .click('div.react-datepicker__day.react-datepicker__day--0' + data[0] + '.react-datepicker__day--today[aria-label *="' + data[3] + ' de ' + data[2] + '"]')
            .waitForElementVisible('#mui-component-select-time')
            .pause()
            .keys(client.Keys.ENTER, () => {
                client
                    .pause(1000)
                    .click('#mui-component-select-time')
            });
            
        client
            .waitForElementVisible('ul > li:nth-child(1)')
            .keys(client.Keys.ENTER, () => { });
        client
            .pause(1000)
            .waitForElementVisible('button[class$="MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .click('button[class$="MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .waitForElementVisible('button[class$="MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .click('button[class$="MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .waitForElementVisible('button[class$="MuiButton-sizeLarge"]',50000)
            .saveScreenshot('./screenshots/002_agendamentoOperador.test/report_pass/001_AgendamentoOperador.png')
            .click('button[class$="MuiButton-sizeLarge"]')
            .end
    });

    it('Quando eu acesso a aplicação como paciente', (client) => {

        //Paciente Acessamdo o Ambiente
        client
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            })
            .url('https://www.staging.liviasaude.com.br/')
            .waitForElementVisible('#header > div.header-container > div.header-topo > a', 5000)
            .click('#header > div.header-container > div.header-topo > a')
            .waitForElementVisible('input[name="federalTaxId"]')
            .setValue('input[name="federalTaxId"]', userPaciente)
            .waitForElementVisible('div.login--button__wrapper > button')
            .submitForm('div.login--button__wrapper > button')
            .waitForElementVisible('input[name="password"]')
            .setValue('input[name="password"]', pass)
            .waitForElementVisible('div.default-button__loading')
            .click('div.default-button__loading')
            .waitForElementVisible('div.appointment-attendance-card__container')
            .click('div.appointment-attendance-card__container')
            .waitForElementVisible('div.telemedicine-modal__content--button-wrapper  button  div  div')
            .click('div.telemedicine-modal__content--button-wrapper  button  div  div')
            .doubleClick()
            .waitForElementVisible('input.default-checkbox__input')
            .click('input.default-checkbox__input')
            .waitForElementVisible('div.agreement-modal--content__footer button')
            .click('div.agreement-modal--content__footer button')
            .saveScreenshot('./screenshots/002_agendamentoOperador.test/report_pass/002_AgendamentoOperador.png')


            //Criando uma aba para O médico Logar no Sistema
            .openNewWindow('tab')
            .windowHandles((results) => {
                var newWindow = results.value[1];
                client.switchWindow(newWindow)
            })
    });



    it('Quando usuário identificado como médico loga na aplicação e realiza o atendimento do paciente', (client) => {
        client
            .url('https://staging-plataforma-saude.nexadigital.com.br')
            .waitForElementVisible('input[name="federalTaxId"]', 5000)
            .waitForElementVisible('input[name="password"]')
            .waitForElementVisible('div.jss15 > button')
            .setValue('input[name="federalTaxId"]', userMedico)
            .setValue('input[name="password"]', pass)
            .click('div.jss15 > button')
            .waitForElementVisible('div:nth-child(4) > div:nth-child(2) > div.MuiCardActions-root.jss49.MuiCardActions-spacing > button')
            .click('div:nth-child(4) > div:nth-child(2) > div.MuiCardActions-root.jss49.MuiCardActions-spacing > button')
            .waitForElementVisible('#access-schedule')
            .elements('css selector', 'table tbody tr', (result) => {
               var tableIndex  = result.value.length  
                client
                .waitForElementVisible("table tbody tr:nth-child("+tableIndex+") td:nth-child(6)")  
                .click("table tbody tr:nth-child("+tableIndex+") td:nth-child(6)")

            });
            client
            .pause(5000)

            //Iniciar o atendimento
            .waitForElementVisible('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)', 50000)
            .click('button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]:nth-child(1)')

            //Conectando a call com o Cliente.
            .waitForElementVisible('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .click('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]')
            .saveScreenshot('./screenshots/002_agendamentoOperador.test/report_pass/003_AgendamentoOperador.png')

            //retornando ao paciente
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            });

        client
            .back()
            .pause(1000)
            .refresh()
            .waitForElementVisible('div.card-in-call__container')
            .click('div.card-in-call__container')
            .refresh()

            .element('css selector', 'div.card-in-call__container', function (result) {
                if (result.status === 0) {
                    client
                        .click('div.card-in-call__container')
                        .pause(50000)
                };
            });

        client
            .pause(50000)
            .element('css selector', 'button[class*="default-button"]:nth-child(1)', function (result) {
                if (result.status === 0) {
                    client
                        .click('button[class*="default-button"]:nth-child(1)')
                        .pause(5000)
                };
            });
        client
            .pause(3000)
            .saveScreenshot('./screenshots/002_agendamentoOperador.test/report_pass/004_AgendamentoOperador.png')
    });

    it('Então estabelecido a comunicação paciente médico será realizada a consulta', (client) => {

        //Retornando a Aba do Médico
        client.windowHandles((results) => {
            var newWindow = results.value[1];
            client.switchWindow(newWindow)
        })

        client
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
            .waitForElementVisible('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss284.MuiButton-containedPrimary.MuiButton-containedSizeLarge.MuiButton-sizeLarge', 5000)
            .click('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss284.MuiButton-containedPrimary.MuiButton-containedSizeLarge.MuiButton-sizeLarge')
            .saveScreenshot('./screenshots/002_agendamentoOperador.test/report_pass/005_AgendamentoOperador.png')
    })
});

//Método Interação com datapicker
function datapicker() {
    var now = new Date;
    var dia = now.getDate();
    var mes = now.getMonth();
    var mesReal = now.getMonth();
    var diaIdentificacao = '';

    if (dia < 10) {
        diaIdentificacao = "0" + dia;
    } else {
        diaIdentificacao = dia;
    }

    switch (mesReal) {
        case 0:
            mesReal = "janeiro";
            break;
        case 1:
            mesReal = "fevereiro";
            break;
        case 2:
            mesReal = "março";
            break;

        case 3:
            mesReal = "abril";
            break;
        case 4:
            mesReal = "maio";
            break;
        case 5:
            mesReal = "junho";
            break;
        case 6:
            mesReal = "julho";
            break;
        case 7:
            mesReal = "agosto";
            break;
        case 8:
            mesReal = "setembro";
            break;
        case 9:
            mesReal = "outubro";
            break;
        case 10:
            mesReal = "novembro";
            break;
        case 11:
            mesReal = "dezembro";
    }
 
    return [diaIdentificacao, mes, mesReal, dia];
}
