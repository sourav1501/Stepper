import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
     email,
     password,
     recaptcha,
     checkbox,
  }
} = checkoutFormModel;
export default {
    [firstName.name]: '',
    [lastName.name]: '',
    [email.name]: '',
    [password.name]: '',
    [recaptcha]: '',
    [checkbox.name]: '',

  };