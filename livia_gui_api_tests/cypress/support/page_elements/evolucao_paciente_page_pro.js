class evolucaoPagePro {
    constructor() {
        this.btIniciaFinalizaAtend = 'button[data-testid="button-start-attendance"]';
        this.btCriarPrescricao = 'button[data-testid="create-prescription-button"]';
        this.btConfFinalizacao = 'div[class^="MuiPaper-root"]>div>div>button[class^="MuiButtonBase-root MuiButton-root MuiButton-contained"]';
        this.btVoltaFinalizacao - 'div[class^="MuiPaper-root"]>div>div>button[class^="MuiButtonBase-root MuiButton-root MuiButton-outlined"]';
        this.lblIdade = 'div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12>div>div>div>div>p';    // 0
        this.lblCPF = 'div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12>div>div>div>div>p';      // 1
        this.lblTelefone = 'div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12>div>div>div>div>p'; // 2
        this.lblPaciente = 'div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12>div>div>div>div>h2';
        this.txtMotivoConsulta = 'textarea[name="complaint"]';
        this.txtMedicamentos = 'textarea[name="medicines"]';
        this.txtAvaliacao = 'textarea[name="evaluation"]';
        this.txtDiagnostico = 'textarea[name="diagnosis"]';
        this.txtConduta = 'textarea[name="conduct"]';
        this.txtObservacao = 'textarea[name="observations"]';
        this.rbDesfechoSim = 'input[value="REFERRED_TO_PRESENTIAL_CARE"]';
        this.rbDesfechoNao = 'input[value="UNNECESSARY_PRESENTIAL_CARE"]';
    }
}
module.exports = evolucaoPagePro