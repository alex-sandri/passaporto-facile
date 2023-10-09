const richiedenteIsTitolare = document.getElementById('richiedenteIsTitolare');

richiedenteIsTitolare.addEventListener('change', () => {
  document.getElementById('altriRic').classList.toggle('d-none');
});

document.addEventListener('DOMContentLoaded', () => {
  const errorMessage = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Chiudi avviso">';
  const errorWrapper = document.querySelector('#errorMsgContainer');

  const validate = new bootstrap.FormValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'form-feedback',
    errorLabelStyle: '',
    focusInvalidField: false,
  });

  // TODO: idAppuntamento and idRichiedente are required when richiedenteIsTitolare is not checked.

  validate
    .addField('#data', [
      { rule: 'required', errorMessage: 'Questo campo è richiesto' },
    ])
    .addField('#orario', [
      { rule: 'required', errorMessage: 'Questo campo è richiesto' },
    ])
    .addField('#idRegista', [
      { rule: 'required', errorMessage: 'Questo campo è richiesto' },
    ])
    .onSuccess((e) => {
      errorWrapper.innerHTML = '';

      // Date value is always formatted as 'yyyy-mm-dd'
      const data = e.target.elements['data'].value
        .split('-')
        .reverse() // Date must be formatted as 'dd-mm-yyyy'
        .join('-');

      // Time value is always formatted as 'hh:mm'
      const orario = e.target.elements['orario'].value
        .replace(':', '.')
        .replace(/^[0]{1}/, ''); // Time must not have any leading zeros

      /**
       * The **id** of the office in which the appointment is made.
       */
      const idRegista = e.target.elements['idRegista'].value;

      /**
       * The **id** of the profile's owner.
       * 
       * ---
       * 
       * *Only set if the appointment is for someone else.*
       */
      const idAppuntamento = e.target.elements[''].value;

      /**
       * The **id** of the appointment's requester.
       * 
       * ---
       * 
       * *Only set if the appointment is for someone else.*
       */
      const idRichiedente = e.target.elements[''].value;

      const Richiedente = e.target.elements['richiedenteIsTitolare'].checked
        ? 'io'
        : 'altriRic';

      console.log(data, orario, idRegista, Richiedente);

      const params = new URLSearchParams();
      params.append('codop', 'inserisciAppuntamento');
      params.append('data', data);
      params.append('orario', orario);
      params.append('idRegista', idRegista);
      params.append('Richiedente', Richiedente);

      if (Richiedente !== 'io') {
        params.append('idAppuntamento', idAppuntamento);
        params.append('idRichiedente', idRichiedente);
      }

      const targetUrl = `https://www.passaportonline.poliziadistato.it/GestioneAppuntamentiCittadinoAction.do?${params}`;

      console.log(targetUrl);
      // open(targetUrl, '_blank');
    })
    .onFail(() => {
      errorWrapper.innerHTML = '';
      errorWrapper.innerHTML = errorMessage;
    });
});
