class homeOpPagePro {
    constructor() {

        this.rbNome = 'label[data-testid="operator-radio-name"]';
        this.rbCrm = 'label[data-testid="operator-radio-crm"]';
        this.cpNomeCrm = 'input[data-testid="input-operator-search"]';
        this.btBuscar = 'button[data-testid="button-operator-search"]';
        this.btLimparBusca = '.containerInfiniteScroll button[type="button"]';
        this.btAcessarAgenda = 'button[id="access-schedule"]';
        this.svgMenu = 'span.MuiButton-endIcon.MuiButton-iconSizeMedium > svg';
        this.btSair = '.MuiList-root > .MuiButtonBase-root';
        this.txNomeTela = 'h1';


    }
}
module.exports = homeOpPagePro