class medicoPagePro {
    constructor() {
        this.btIniciaUltAtend = 'table.MuiTable-root > tbody > tr:last-of-type> td:last-of-type > button';
        this.btIniciaAtend = '[data-testid=button-start-attendance] > .MuiButton-label';
        this.txUltimasAtividades = 'ul li';
        this.btIniciarAgora = '[role="dialog"] div button span.MuiButton-label';
        this.btEncerrar = '[data-testid="button-close"]';
        this.btConfEnc = '.MuiCardActions-root > button';
        this.btEncerraAtend = '[data-testid=button-start-attendance]';
        this.rbOpDialog = '[role="dialog"] div span'
        this.btFinalizar = '[role="dialog"] div [type="button"]'



    }
}
module.exports = medicoPagePro