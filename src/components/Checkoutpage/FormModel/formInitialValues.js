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
     address2,
     city,
     zipcode,
     country,
     mobile,
     countrycode,
     state,
     otp
  }
} = checkoutFormModel;
export default {
    [firstName.name]: '',
    [lastName.name]: '',
    [email.name]: '',
    [password.name]: '',
    [otp.name]: '',
    // [recaptcha]: false,
    [checkbox.name]: false,
    [city.name]: '',
    [zipcode.name]: '',
    [address1.name]: '',
    [address2.name]: '',
    [country.name]: '',
    [mobile.name]: '',
    [countrycode.name]: '',
    [state.name]: '',

  };