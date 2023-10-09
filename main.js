document.addEventListener('DOMContentLoaded', () => {
  const errorMessage = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso">';
  const errorWrapper = document.querySelector('#errorMsgContainer');

  const validate = new bootstrap.FormValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'form-feedback',
    errorLabelStyle: '',
    focusInvalidField: false,
  });

  validate
    .addField('#data', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto',
      },
    ])
    .addField('#orario', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto',
      },
    ])
    .addField('#idRegista', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto',
      },
    ])
    .addField('#Richiedente', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto',
      },
    ])
    .onSuccess((e) => {
      errorWrapper.innerHTML = '';

      // Date value is always formatted as 'yyyy-mm-dd'
      const data = e.target.elements['data'].value.split('-').reverse().join('-');

      // Time value is always formatted as 'hh:mm'
      const orario = e.target.elements['orario'].value.replace(':', '.');

      const idRegista = e.target.elements['idRegista'].value;
      const Richiedente = e.target.elements['Richiedente'].value;

      console.log(data, orario, idRegista, Richiedente);

      const targetUrl = `https://www.passaportonline.poliziadistato.it/GestioneAppuntamentiCittadinoAction.do?codop=inserisciAppuntamento&data=${data}&orario=${orario}&idRegista=${idRegista}&Richiedente=${Richiedente}`;

      open(targetUrl, '_blank');
    })
    .onFail(() => {
      errorWrapper.innerHTML = '';
      errorWrapper.innerHTML = errorMessage;
    });
});
