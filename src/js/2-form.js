const formData = {
    email: '',
    message: '',
  };
  
  const form = document.querySelector('.feedback-form');
  const FEEDBACK_FORM_STATE = 'feedback-form-state';
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedFormData = localStorage.getItem(FEEDBACK_FORM_STATE);
  
    if (!savedFormData) return;
  
    const parsedFormData = JSON.parse(savedFormData);
  
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
  
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  });
  
  form.addEventListener('input', () => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
  
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
  });
  
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    console.log(formData);
  
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    form.reset();
  
    formData.email = '';
    formData.message = '';
  });