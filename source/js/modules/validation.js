const form = document.querySelector('.free__form');
const nameInput = form.querySelector('#name');
const telephoneInput = form.querySelector('#telephone');
const messageName = form.querySelector('.free__error--name');
const messageTelephone = form.querySelector('.free__error--telephone');

const isValidName = (name) => {
  const pattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
  return pattern.test(name);
};

const isValidTelephone = (telephone) => {
  const pattern = /^\d+$/;
  return pattern.test(telephone);
};

const onSubmitForm = (evt) => {
  evt.preventDefault();

  const name = nameInput.value;
  const telephone = telephoneInput.value;

  messageName.style.display = isValidName(name) ? 'none' : 'block';
  nameInput.classList.toggle('free__input--error', !isValidName(name));

  messageTelephone.style.display = isValidTelephone(telephone) ? 'none' : 'block';
  telephoneInput.classList.toggle('free__input--error', !isValidTelephone(telephone));

  if (isValidName(name) && isValidTelephone(telephone)) {
    form.submit();
  }
};

const validatesForm = () => {
  form?.addEventListener('submit', onSubmitForm);
};

export { validatesForm };
