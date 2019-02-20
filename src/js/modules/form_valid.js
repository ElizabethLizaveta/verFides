/* jshint esversion: 6 */
const FormValid = {

  validate() {
    const registrationFormGroup = $('.registration-form-group');
    const registrationEmail = registrationFormGroup.find('#registration-email');
    const registrationName = registrationFormGroup.find('#registration-name');
    const registrationBtn = $('.registration-button');

    const questionFormGroup = $('.question-form-group');
    const questionName = questionFormGroup.find('#question-name');
    const questionEmail = questionFormGroup.find('#question-email');
    const questionPhone = questionFormGroup.find('#question-phone');
    const questionText = questionFormGroup.find('#question-text');
    const questionBtn = $('.question-button');

    registrationBtn.attr('disabled', true);
    questionBtn.attr('disabled', true);

    function emailCheck(mail) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(mail);
    }

    function validateEmail(e, email) {
      if (!emailCheck(email.val())) {
        e.preventDefault();
        email.addClass('alert');
        email.val('');
      }
      return false;
    }

    function phoneCheck(phone) {
      const re = /^[0-9+()]*$/;
      return re.test(phone);
    }

    function validatePhone(e, phone) {
      if (!phoneCheck(phone.val())) {
        e.preventDefault();
        questionPhone.addClass('alert');
        phone.val('');
      }
      return false;
    }

    registrationBtn.click((e) => {
      validateEmail(e, registrationEmail);
    });

    questionBtn.click((e) => {
      validateEmail(e, questionEmail);
      validatePhone(e, questionPhone);
    });

    registrationFormGroup.keyup(() => {
      if (($.trim(registrationName.val()) !== '') && (registrationEmail.val())) {
        registrationBtn.attr('disabled', false);
      } else {
        registrationBtn.attr('disabled', true);
      }
    });

    questionFormGroup.keyup(() => {
      if (($.trim(questionName.val()) !== '') && (questionEmail.val()) && (questionPhone.val().length > 9) && (questionText.val())) {
        questionBtn.attr('disabled', false);
      } else {
        questionBtn.attr('disabled', true);
      }
    });
  },
};

export default FormValid;
