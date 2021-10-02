class agendamentoPagePro {
    constructor() {

        this.txNovoAgen = 'div [role="dialog"] h2';
        this.cpNome = 'div [role="dialog"] input[data-testid="input-patientName"]';
        this.cpCpf = 'div [role="dialog"] input[data-testid="input-federalTaxId"]';
        this.cpTel = 'div [role="dialog"] input[data-testid="input-phoneNumber"]';
        this.cpDataNasc = 'div [role="dialog"] input[data-testid="input-birthDate"]';
        this.cpConvenio = 'div [role="dialog"] input[data-testid="input-healthInsurance"]';
        this.cpPlano = 'div [role="dialog"] input[data-testid=input-insuranceType]';
        this.cpNumCart = 'div [role="dialog"] input[data-testid="input-cardNumber"]';
        this.cpData = 'div [role="dialog"] .react-datepicker__input-container [data-testid="textfield--schedule-modal-calendar"]';
        this.opDiaHabilitado = '.react-datepicker__week [aria-disabled="false"]';
        this.cbHorario = '#mui-component-select-time';
        this.opHorario = 'ul li[tabindex="0"]';
        this.rbConsRemota = '.MuiButtonBase-root.MuiIconButton-root.jss91.MuiRadio-root.MuiRadio-colorPrimary.jss88.jss92.Mui-checked.MuiIconButton-colorPrimary input[name="appointmentType"]';
        this.rbConsPresencial = ':nth-child(2) > .MuiTypography-root';
        this.btCancelar = 'button[class$="MuiButton-outlinedSizeLarge MuiButton-sizeLarge"]';
        this.btProsseguir = 'button[class$="MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]';
        this.btAcessarAgenda = 'button[id="access-schedule"]';
        this.btConfirmaAgendamento = 'button[class$="MuiButton-containedSizeLarge MuiButton-sizeLarge"]'
        this.btFechar = 'button[class$="MuiButton-sizeLarge"]'
        this.spanPacienteVazio = '[data-testid=textfield-patientName] > .MuiFormHelperText-root';
        this.spanCPFVazio = '[data-testid=textfield-federalTaxId] > .MuiFormHelperText-root';
        this.spanTelVazio = '[data-testid=textfield-phone] > .MuiFormHelperText-root';
        this.spanDtNascVazio = '[data-testid=input-birthDate]';
        this.spanConvenioVazio = '[data-testid=textfield-healthInsurance] > .MuiFormHelperText-root';
        this.spanPlanoVazio = '[data-testid=textfield-insuranceType] > .MuiFormHelperText-root';
        this.spanCarteirinhaVazio = '[data-testid=textfield-cardNumber] > .MuiFormHelperText-root';
        this.spanDtAgendaVazio = '[data-testid=textfield--schedule-modal-calendar] > .MuiFormHelperText-root';
        this.spanHorarioVazio = '[data-testid=textfield-time] > .MuiFormHelperText-root';
        this.spanDtInvalida = 'p[class$="Mui-error MuiFormHelperText-filled Mui-required"]';

    }
}
module.exports = agendamentoPagePro