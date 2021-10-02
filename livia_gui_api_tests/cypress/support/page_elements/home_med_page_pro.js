class homeMedPagePro {
    constructor() {

        this.mnExpAberto = '.icon-expand-menu.false';
        this.mnExpFechado = '.icon-expand-menu.jss88'; //TODO ajustar elemento (pois trata-se de elemento dinâmico)
        this.mnHome = 'a[aria-current="page"]';
        this.mnRel = 'a[href="/relatorios"]';
        this.mnPrecisoAjuda = 'a[href="https://ajuda.pro.liviasaude.com.br/hc/pt-br/requests/new"]';
        this.btProxPac = 'button[data-testid="next-patient-button"]';
        this.txUltimasNov = 'h3[data-testid="title-latest-activities"]';
        this.txUltAtend = 'span.jss186'; //TODO ajustar elemento (pois trata-se de elemento dinâmico)
        this.txNomeTela = 'h1[data-testid="title"]';
        this.nomeUserLogado = 'button[class^="MuiButtonBase-root MuiButton-root MuiButton-text"]';


    }
}
module.exports = homeMedPagePro