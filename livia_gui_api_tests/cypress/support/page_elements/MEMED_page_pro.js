class MEMEDPagePro {
    constructor() {
        this.iframeMEMED = '#iframe-container > iframe[id="mdhub-module-plataforma.prescricao"]';
        this.btGerarPrescricao = 'button.btn-action.btn-prescricao-parceiro';
        this.btEnviarEmitir = '#imprimirPrescricao';
        this.btAssinaturaManual = '#DigitalSignatureDialogManualSignButton';
        this.btAddPrescricao = '#addItemBtn';
        this.btFecharMEMED = 'button.btn-close.btn-close-component.btn-closse--imprimir';
        this.btFechar = '#fechar';
        this.txtMedicamento = '#searchMedicamentos';
        this.selMedicamento = 'tr:first-of-type';
        this.txtTelPaciente = 'div.form-item>input';
        this.selPosologia = 'div.autocomplete.autocomplete-small.posologia-autocomplete';
        this.nomePaciente = 'div.paciente-field';

    }
}
module.exports = MEMEDPagePro