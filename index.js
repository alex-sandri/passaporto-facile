/**
 * Registers a event listener to automatically convert the input's value into
 * the desired format for the actual request.
 * 
 * @param {string} id The source input's id.
 * @param {(value: string) => string} convert The converter function.
 * @param {string} target The target input's name.
 * @param {((e: Event) => any) | null | undefined} property ***(Optional)*** The property to convert.
 */
const convertAndUpdate = (id, convert, target, property) => {
  property ??= (e) => e.target.value;

  document.getElementById(id).addEventListener(
    'change',
    e => document.querySelector(`input[name="${target}"]`).value = convert(property(e))
  );
}

/**
 * Converts a date string value in the `yyyy-mm-dd` format, for example from an
 * input, to the `dd-mm-yyyy` format.
 * 
 * @param {string} date The date to convert.
 * @returns {string} The converted date string.
 */
const dateConverter = (date) => date.split('-').reverse().join('-');

/**
 * Converts a time string value in the `hh:mm` format, for example from an
 * input, to the `hh.mm` format, or `h.mm` if a the hours value has a leading
 * zero.
 * 
 * @param {string} time The time to convert.
 * @returns {string} The converted time string.
 */
const timeConverter = (time) => time.replace(':', '.').replace(/^[0]{1}/, '');

/**
 * Converts a checbox's value into either `S` when checked and `N` otherwise.
 * 
 * @param {boolean} value The value to convert.
 * @returns {string} The converted value.
 */
const checkboxConverter = (value) => value ? 'S' : 'N';

convertAndUpdate('data', dateConverter, 'data');
convertAndUpdate('orario', timeConverter, 'orario');
convertAndUpdate('orario', timeConverter, 'valoreOra');

convertAndUpdate('orario', (time) => {
  let [hours, minutes] = time.split(':');

  hours = `${parseInt(hours) + 1}`.padStart(2, '0');

  return timeConverter(`${hours}:${minutes}`);
}, 'oraPlus');

convertAndUpdate('dataNascita', dateConverter, 'dataNascita');
convertAndUpdate('email', (email) => email, 'email2');

convertAndUpdate(
  'sDataScadenzaPassaporto',
  dateConverter,
  'sDataScadenzaPassaporto'
);

convertAndUpdate(
  'haFigli',
  checkboxConverter,
  'haFigli', (e) => e.target.checked
);

convertAndUpdate(
  'precedentiPenali',
  checkboxConverter,
  'precedentiPenali', (e) => e.target.checked
);

document.getElementById('statoCivile').addEventListener('change', e => {
  const shouldHideSpouseNameInputs = e.target.value !== 'coniugato/a';

  document.getElementById('nome-coniuge').classList.remove('d-none');

  if (shouldHideSpouseNameInputs) {
    document.getElementById('nome-coniuge').classList.add('d-none');
  }
});
