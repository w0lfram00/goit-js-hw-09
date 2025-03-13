const refs = {
  form: document.querySelector('.feedback-form'),
};
let formData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
}

refs.form.elements.email.value = formData.email;
refs.form.elements.message.value = formData.message;

refs.form.addEventListener('input', formInputHandler);
refs.form.addEventListener('submit', formSubmitHandler);

function formInputHandler(event) {
  const { email, message } = refs.form.elements;
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function formSubmitHandler(event) {
  event.preventDefault();
  const { email, message } = refs.form.elements;
  if (email.value.trim() && message.value.trim()) {
    console.log(formData);
    refs.form.reset();
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
  } else alert('Fill all spaces');
}
