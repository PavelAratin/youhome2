
const formPayload = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};
const services = {
  ID_SERVICE: 'service_twzj527',
  ID_TEMPLATES: 'template_byvk3eq',
};
const erorrMessageText = {
  ERROR_MESSAGE: 'Это поле обязательно для заполнения'
}
const buttonText = {
  SUCCESS: 'Заявка оформлена',
  DEFAULT: 'Оформить заявку',
}
const regexs = {
  // Валидация телефона 
  PHONE_REGEX: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
  // Валидация email
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}
export function formInit({ form,
  fields,
  checkbox,
  buttonForm
}) {

  function validateName(name) {
    return name.value.trim() !== '';
  }

  function validatePhone(phone) {
    return regexs.PHONE_REGEX.test(phone.value);
  }

  function validateCheckbox(checkbox) {
    return checkbox.checked ? true : false;
  }

  function markInvalid(input, isValid, errorMessageText) {
    if (!isValid) {
      if (input.name === 'name') {
        input.placeholder = errorMessageText;
        input.classList.add('js-red-placeholder');
        const labelEl = input.closest('.js-label');
        labelEl.style.color = '#c92626';
      }
      if (input.name === 'tel') {
        input.placeholder = errorMessageText;
        input.classList.add('js-red-placeholder');
        const labelEl = input.closest('.js-label');
        labelEl.style.color = '#c92626';
      }
      if (input.type === 'checkbox') {
        input.classList.add('error');
      } else {
        input.classList.remove('error')
      }
    };
  };

  function validateForm(fields) {
    return {
      nameValid: validateName(fields.name),
      phoneValid: validatePhone(fields.phone),
      checkboxValid: validateCheckbox(checkbox),
      allValid() {
        return this.nameValid && this.phoneValid && this.checkboxValid;
      }
    };
  }

  function resetErrors() {
    // Сбрасываем стили для всех полей
    const errorFields = form.querySelectorAll('.js-red-placeholder, .error');
    errorFields.forEach(field => {
      field.classList.remove('js-red-placeholder', 'error');
      field.placeholder = ''; // Сбрасываем placeholder
      // Если у поля есть соответствующий label
      const label = field.closest('.js-label');
      if (label) {
        label.style.color = ''; // Сбрасываем цвет текста label
      }
    });
  }


  emailjs.init({
    publicKey: "PW8JbRD7lMEM_f1pZ",
  });
  // отправка формы
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Сбрасываем все ошибки перед проверкой
    resetErrors()
    // валидация формы
    const validation = validateForm(fields);
    // Отметить невалидные поля
    markInvalid(fields.name, validation.nameValid, erorrMessageText.ERROR_MESSAGE);
    markInvalid(fields.phone, validation.phoneValid, erorrMessageText.ERROR_MESSAGE);
    markInvalid(checkbox, validation.checkboxValid);
    // форма не отправиться, если есть невалидные поля
    if (!validation.allValid()) {
      console.log('Форма содержит ошибки');
      return;
    }

    // сервис emailjs id-сервис gmail,id-шаблон сообщения
    emailjs.sendForm(services.ID_SERVICE, services.ID_TEMPLATES, form)
      .then(() => {
        console.log(formPayload.SUCCESS);
        form.reset();
        resetErrors();
        buttonForm.textContent = buttonText.SUCCESS;
        setTimeout(() => {
          buttonForm.textContent = buttonText.DEFAULT;
        }, 2000)
      }, (error) => {
        console.log(formPayload.FAILED, error);
      });
  });
}