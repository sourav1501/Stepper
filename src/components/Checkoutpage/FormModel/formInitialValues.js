import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
     email,
     password,
     recaptcha,
     checkbox,
     address1,
     city,
     zipcode,
     country,
     mobile,
     countrycode,
     state
  }
} = checkoutFormModel;
export default {
    [firstName.name]: '',
    [lastName.name]: '',
    [email.name]: '',
    [password.name]: '',
    [recaptcha]: '',
    [checkbox.name]: '',
    [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [mobile.name]: '',
  [countrycode.name]: '',
  [state.name]: '',

  };