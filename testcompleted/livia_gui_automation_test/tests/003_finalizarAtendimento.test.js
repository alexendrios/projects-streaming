const userMedico = '60202655601'
const pass = '123456'

describe("Zerar atendimentos" ,() => {
   it("Zerar atendimentos", (client) =>{
    
    client
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
   })
})