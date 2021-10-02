class loginPagePro {
    constructor() {

        this.cpCpf = '[data-testid=input-federalTaxId]';
        this.cpSenha = '[data-testid=input-password]';
        this.rbLembrar = 'input[name=remind]';
        this.lkEsqSenha = 'a[href="/esqueci-senha"]';
        this.btEntrar = '[data-testid=button-login] > .MuiButton-label';
        this.msgErroCpf = '.MuiFormHelperText-root';
        this.msgErroSenha = 'form > p';
        this.msgSenhaSemPreencher = 'p';


    }
}

module.exports = loginPagePro
