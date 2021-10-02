class relatoriosPagePro {
    constructor() {
        this.btVerProntuario = 'tbody>tr:first-of-type>td:last-of-type>button';
        this.btVisualizar = 'button[data-testid="see-patient-details"]';
        this.pMotivo = 'div[class^="jss"]>p[class$="body1"]'; // .eq(4)
        this.pMedicamento = 'div[class^="jss"]>p[class$="body1"]'; // .eq(6)
        this.pExercicios = 'div[class^="jss"]>p[class$="body1"]'; // .eq(7)
        this.pDiagnostico = 'div[class^="jss"]>p[class$="body1"]'; // .eq(8)
        this.pConduta = 'div[class^="jss"]>p[class$="body1"]'; // .eq(9)
        this.pObservacoes = 'div:last-of-type>div.MuiCollapse-container.MuiCollapse-entered>div>div>div>div>div>div>p';
        this.pDesfecho = 'p[class^="MuiTypography-root makeStyles"]';
        this.spanMedicamento = 'div[class^="jss"]>p>span'; // .eq(0)
        this.spanQtdeMedicamento = 'div[class^="jss"]>p>span'; // .eq(1)
        this.pPosologia = 'div[class^="jss"]>p[class^="jss"]'; // .eq(5)
        this.tdNomePaciente = 'tbody>tr:first-of-type>td:first-of-type';
    }
}

module.exports = relatoriosPagePro
